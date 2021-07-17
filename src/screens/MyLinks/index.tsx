import React, { useEffect, useState } from 'react';
import { View, Text, Modal, ActivityIndicator, Platform } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { StatusBarPage } from '../../components/StatusBarPage';

import { deleteLink, getLinksSave, ItemLink, StorageLink } from '../../utils/store';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ModalLink } from '../../components/ModalLink';

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

      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <StatusBarPage
            color={theme.colors.background100}
            barStyle="light-content"
          />
          {
            Platform.OS === 'android'
            &&
            <Menu />
          }
          <Text style={styles.title}>Meus Links</Text>

          {
            loading && (
              <View style={styles.empty}>
                <ActivityIndicator color={theme.colors.text} size={25} />
              </View>
            )
          }
          {
            !loading && links.length === 0
            && (
              <View style={styles.empty}>
                <Text style={styles.warning}>
                  Você ainda não possuí nenhum link 😕
                </Text>
              </View>
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
      </View>
    </>

  );
}