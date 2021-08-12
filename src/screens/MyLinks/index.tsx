import React, { useEffect, useState } from 'react';
import { Modal, ActivityIndicator, Platform } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

import { Container, CustomText, ListItem, Menu, ModalLink, StatusBarPage } from '../../components';

import { deleteLink, getLinksSave } from '../../utils/store';
import { defaultTheme } from '../../global/styles/theme';
import { ItemLink } from '../../utils/interface';

export function MyLinks() {
  const isFocused = useIsFocused();
  const [links, setLinks] = useState<ItemLink[]>([]);
  const [data, setData] = useState<ItemLink>({} as ItemLink);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleItem(item: ItemLink) {
    setData(item);
    setModalVisible(true);
  }

  async function deleteItem(item: string) {
    await deleteLink(item);
    getLinks();
  }

  async function getLinks() {
    const result = await getLinksSave();
    setLinks(result);
    setLoading(false);
  }

  useEffect(() => {
    getLinks();
  }, [isFocused]);

  return (
    <>
      {
        Platform.OS === 'ios'
        &&
        <Menu />
      }
      <Container
        flex={1}
        backgroundColor="background100"
      >
        <TouchableWithoutFeedback>
          <StatusBarPage
            color={defaultTheme.colors.background100}
            barStyle="light-content"
          />
          {
            Platform.OS === 'android'
            &&
            <Menu />
          }
          <CustomText
            fontFamily="title700"
            fontSize={33}
            marginTop={100}
            marginLeft={20}
            color="text"
          >
            Meus Links
          </CustomText>
          {
            loading && (
              <Container
                alignItems="center"
                marginTop={15}
              >
                <ActivityIndicator color={defaultTheme.colors.text} size={25} />
              </Container>
            )
          }
          {
            !loading && links.length === 0
            && (
              <Container
                alignItems="center"
                marginTop={15}
              >
                <CustomText
                  fontFamily="text400"
                  fontSize={18}
                  color="text"
                >
                  Você ainda não possuí nenhum link 😕
                </CustomText>
              </Container>
            )
          }
          <FlatList
            data={links}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) =>
              <ListItem
                data={item}
                selectedItem={handleItem}
                deleteItem={deleteItem}
              />
            }
            contentContainerStyle={{ paddingBottom: 22, paddingTop: 10 }}
            showsVerticalScrollIndicator={false}
          />
          <Modal visible={modalVisible} transparent animationType="slide" >
            <ModalLink onClose={handleCloseModal} data={data}></ModalLink>
          </Modal>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
}