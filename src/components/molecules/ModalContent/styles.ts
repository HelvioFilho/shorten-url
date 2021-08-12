import styled from 'styled-components/native';

export const ContainerShort = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background100};
  border-radius: ${({ theme }) => theme.metrics.px(7)}px;
  padding: 0 ${({ theme }) => theme.metrics.px(10)}px;
`;

export const LinkButton = styled.TouchableOpacity`
  width: 60%;
  height: ${({ theme }) => theme.metrics.px(45)}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.title};
  margin-top: ${({ theme }) => theme.metrics.px(15)}px;
  border-radius: ${({ theme }) => theme.metrics.px(7)}px;
`;