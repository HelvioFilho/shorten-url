import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BoxIcon, ButtonAll, ContainerGradient, ImageLogo, Input } from './styles';
import logo from '../../assets/logo.png'
import { api } from '../../services/api';
import { saveLink } from '../../utils/store';
import { defaultTheme } from '../../global/styles/theme';
import { AlertModal, Container, CustomText, Menu, ModalLink, StatusBarPage } from '../../components';
import { ItemLink } from '../../utils/interface';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [data, setData] = useState<ItemLink>({} as ItemLink);
  const [alertText, setAlertText] = useState('');

  function endLink() {
    Keyboard.dismiss();
    setLoading(false);
    setInput('');
  }

  async function handleShortLink() {
    setLoading(true);
    let link;
    if (input.includes('http://') || input.includes('https://')) {
      link = input;
    } else {
      link = `http://${input}`;
    }
    try {
      const response = await api.post('/shorten',
        {
          long_url: link
        });
      setData(response.data);
      setModalVisible(true);
      saveLink(response.data);
      endLink();
    } catch {
      setAlertText('Entre com um link válido!');
      setAlertVisible(true);
      endLink();
    }
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleCloseAlert() {
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ContainerGradient
        colors={[defaultTheme.colors.background20, defaultTheme.colors.background100]}
      >
        <StatusBarPage
          color={defaultTheme.colors.background20}
          barStyle="light-content"
        />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <Container
            alignItems="center"
            marginTop={20}
            marginBottom={30}
          >
            <ImageLogo
              source={logo}
              resizeMode="contain" />
          </Container>
          <Container
            marginTop={40}
          >
            <CustomText
              fontFamily="title700"
              fontSize={34}
              color="text"
              textAlign="center"
            >
              Encurtador de Link
            </CustomText>
            <CustomText
              fontFamily="text400"
              fontSize={16}
              color="text"
              textAlign="center"
              paddingBottom={30}
            >
              Cole seu link abaixo para encurtar
            </CustomText>
            <Container
              flex={1}
              flexDirection="row"
              alignItems="center"
              widthPercent={100}
              borderRadius={7}
              marginTop={25}
              marginBottom={15}
              paddingLeft={25}
              paddingRight={25}
            >
              <BoxIcon>
                <Feather
                  name="link"
                  size={22}
                  color={defaultTheme.colors.text}
                />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor={defaultTheme.colors.text}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={setInput}
              />
            </Container>
            <ButtonAll
              activeOpacity={0.8}
              onPress={handleShortLink}
            >
              {
                loading ? (
                  <ActivityIndicator color={defaultTheme.colors.loading} size={24} />
                ) : (
                  <CustomText
                    fontFamily="text400"
                    fontSize={18}
                  >
                    Gerar link
                  </CustomText>
                )
              }
            </ButtonAll>
          </Container>
        </KeyboardAvoidingView>
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
        >
          <ModalLink
            onClose={handleCloseModal}
            data={data}
          />
        </Modal>
        <Modal
          visible={alertVisible}
          transparent
          animationType="fade"
          onShow={handleCloseAlert}
          statusBarTranslucent={true}
        >
          <AlertModal alertText={alertText} />
        </Modal>
      </ContainerGradient>
    </TouchableWithoutFeedback>
  );
}