import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ContainerGradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  width: ${({ theme }) => theme.metrics.px(150)}px;
  height: ${({ theme }) => theme.metrics.px(150)}px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.metrics.px(10)}px;
  width: 11%;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  background-color: ${({ theme }) => theme.colors.input};
  border-top-left-radius: ${({ theme }) => theme.metrics.px(7)}px;
  border-bottom-left-radius: ${({ theme }) => theme.metrics.px(7)}px;
`;

export const Input = styled(TextInput)`
  font-family: ${({ theme }) => theme.fonts.text400};
  align-items: center;
  justify-content: center;
  width: 90%;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  padding: ${({ theme }) => theme.metrics.px(10)}px;
  background-color: ${({ theme }) => theme.colors.input};
  border-top-right-radius: ${({ theme }) => theme.metrics.px(7)}px;
  border-bottom-right-radius: ${({ theme }) => theme.metrics.px(7)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonAll = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.metrics.px(45)}px;
  background-color: ${({ theme }) => theme.colors.text};
  margin-left: ${({ theme }) => theme.metrics.px(25)}px;
  margin-right: ${({ theme }) => theme.metrics.px(22)}px;
  margin-top: ${({ theme }) => theme.metrics.px(25)}px;;
  border-radius: ${({ theme }) => theme.metrics.px(7)}px;
`;