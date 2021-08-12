import styled from 'styled-components/native';

export const ContainerLink = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.input};
  margin-top: ${({ theme }) => theme.metrics.px(5)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(5)}px;
  margin-right: ${({ theme }) => theme.metrics.px(15)}px;
  margin-left: ${({ theme }) => theme.metrics.px(15)}px;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
  border-radius: ${({ theme }) => theme.metrics.px(7)}px;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(60)}px;
  background-color: ${({ theme }) => theme.colors.trash};
  border-radius: ${({ theme }) => theme.metrics.px(7)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.px(10)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
  margin-right: ${({ theme }) => theme.metrics.px(15)}px;
`;