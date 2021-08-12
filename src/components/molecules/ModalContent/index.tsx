import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as WebBrowser from 'expo-web-browser';
import { Feather } from '@expo/vector-icons';
import { defaultTheme } from '../../../global/styles/theme';
import { Container, CustomText } from '../../atoms';
import { ContainerShort, LinkButton } from './styles';
import { ModalProps } from '../../../utils/interface';

export function ModalContent({ data }: ModalProps) {

  function copyLink() {
    Clipboard.setString(data.link);
    Alert.alert(
      'Aviso',
      'Link copiado com sucesso!',
      [
        {
          text: 'ok',
        }
      ],
      { cancelable: false }
    );
  }

  async function handleOpenBrowser(link: string) {
    await WebBrowser.openBrowserAsync(link);
  }

  return (
    <Container
      flex={1}
      justifyContent="center"
    >
      <CustomText
        fontFamily="title700"
        fontSize={33}
        color="title"
        marginBottom={10}
      >
        Link encurtado
      </CustomText>
      <CustomText
        fontFamily="text400"
        fontSize={16}
        color="pale"
        marginBottom={20}
        numberOfLines={1}
      >
        {data.long_url}
      </CustomText>
      <ContainerShort
        activeOpacity={0.9}
        onPress={copyLink}
      >
        <CustomText
          fontFamily="text400"
          color="text"
          fontSize={16}
          widthPercent={90}
          numberOfLines={1}
        >
          {data.link}
        </CustomText>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={copyLink}
        >
          <Feather
            name="copy"
            color={defaultTheme.colors.text}
            size={25}
          />
        </TouchableOpacity>
      </ContainerShort>
      <LinkButton
        activeOpacity={0.8}
        onPress={() => handleOpenBrowser(data.link)}
      >
        <CustomText
          fontFamily="text400"
          fontSize={18}
          color="text"
        >
          Abrir no Navegador
        </CustomText>
      </LinkButton>
    </Container>
  );
}