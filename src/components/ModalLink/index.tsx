import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as WebBrowser from 'expo-web-browser';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ItemLink } from '../../utils/store';

type Props = {
  onClose: () => void;
  data: ItemLink;
}

export function ModalLink({ onClose, data }: Props) {

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

  async function handleShare() {
    try {
      await Share.share({
        message: `Link: ${data.link}`
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleOpenBrowser(link: string) {
    await WebBrowser.openBrowserAsync(link);
  }

  return (
    <View style={styles.containerModal}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Feather
              name="x"
              color={theme.colors.icon}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleShare}
          >
            <Feather
              name="share"
              color={theme.colors.icon}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerLink}>
          <Text style={styles.title}>
            Link encurtado
          </Text>
          <Text
            style={styles.longUrl}
            numberOfLines={1}
          >
            {data.long_url}
          </Text>
          <TouchableOpacity
            style={styles.containerShort}
            activeOpacity={0.9}
            onPress={copyLink}
          >
            <Text
              style={styles.shortUrl}
              numberOfLines={1}
            >
              {data.link}
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={copyLink}
            >
              <Feather
                name="copy"
                color={theme.colors.text}
                size={25}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => handleOpenBrowser(data.link)}
          >
            <Text style={styles.buttonText}>Abrir no Navegador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}