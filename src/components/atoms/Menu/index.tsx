import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ContainerMenu } from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { defaultTheme } from '../../../global/styles/theme';

export function Menu() {
  const navigation = useNavigation();

  return (
    <ContainerMenu
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      activeOpacity={0.1}
    >
      <Feather name="menu" size={40} color={defaultTheme.colors.text} />
    </ContainerMenu>
  );
}