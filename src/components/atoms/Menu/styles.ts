import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

export const ContainerMenu = styled.TouchableOpacity`
  position: absolute;
  z-index: 9999;
  justify-content: space-around;
  top: ${({ theme }) => theme.metrics.px(Platform.OS === 'ios' ? (StatusBar.currentHeight || 0) + 60 : 30)}px;
  margin: 0 ${({ theme }) => theme.metrics.px(20)}px;
`;