import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  onClose: () => void;
}

export function ModalLink({ onClose }: Props) {

  function copyLink() {
    Clipboard.setString('https://meulink.com.br');
    alert('Link copiado com sucesso!');
  }

  async function handleShare() {
    try {
      await Share.share({
        message: `Link: https://meulink.com.br`
      });

    } catch (error) {
      console.log(error.message);
    }
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
            https://hsvf.com.br
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
              https://bit.ly/ao2dko
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
        </View>
      </View>
    </View>
  );
}