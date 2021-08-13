import React from 'react';
import { AlertModalProps } from '../../../utils/interface';
import { Container, CustomText } from '../../atoms';

export function AlertModal({ alertText }: AlertModalProps) {
  return (
    <Container
      flex={1}
      backgroundColor="modal"
    >
      <Container
        flex={3}
      />
      <Container
        flex={1}
        alignItems="flex-start"
        justifyContent="space-around"
        backgroundColor="icon"
        borderRadius={20}
        marginRight={55}
        marginLeft={55}
      >
        <Container
          flexDirection="row"
          widthPercent={100}
          justifyContent="center"
        >
          <Container />
          <CustomText
            fontFamily="text400"
            fontSize={20}
            color="text"
          >
            Aviso
          </CustomText>
        </Container>
        <Container
          widthPercent={100}
          justifyContent="center"
        >
          <CustomText
            fontFamily="text400"
            fontSize={16}
            color="text"
            textAlign="center"
          >
            {alertText}
          </CustomText>
        </Container>
        <Container />
      </Container>
      <Container
        flex={3}
      />
    </Container>
  );
}