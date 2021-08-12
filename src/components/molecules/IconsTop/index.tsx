import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import { defaultTheme } from '../../../global/styles/theme';
import { Container } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { ModalProps } from '../../../utils/interface';

export function IconsTop({ onClose, data }: ModalProps) {

  async function handleShare() {
    try {
      await Share.share({
        message: `Link: ${data.link}`
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      marginTop={30}
      marginBottom={15}
    >
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.8}
      >
        <Feather
          name="x"
          color={defaultTheme.colors.icon}
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleShare}
      >
        <Feather
          name="share"
          color={defaultTheme.colors.icon}
          size={30}
        />
      </TouchableOpacity>
    </Container>
  );
}