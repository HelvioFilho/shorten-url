import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export function Menu() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.container}
      activeOpacity={0.1}
    >
      <Feather name="menu" size={40} color={theme.colors.text} />
    </TouchableOpacity>
  );
}