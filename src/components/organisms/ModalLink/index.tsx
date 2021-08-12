import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ModalProps } from '../../../utils/interface';
import { Container } from '../../atoms';
import { IconsTop, ModalContent } from '../../molecules';
import { Separator } from './styles';

export function ModalLink({ onClose, data }: ModalProps) {

  return (
    <Container flex={1}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Separator></Separator>
      </TouchableWithoutFeedback>
      <Container
        flex={1}
        backgroundColor="text"
        borderTopRightRadius={30}
        borderTopLeftRadius={30}
        paddingRight={20}
        paddingLeft={20}
      >
        <IconsTop onClose={onClose} data={data} />
        <ModalContent data={data} />
      </Container>
    </Container>
  );
}