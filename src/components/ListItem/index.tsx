import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type items = {
  id: string;
  link: string;
}

type Props = {
  data: items;
}

export function ListItem({ data }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.containerButton}
        onPress={() => { }}
      >
        <Feather
          name="link"
          color={theme.colors.text}
          size={24}
        />
        <Text numberOfLines={1} style={styles.item}>{data.link}</Text>
      </TouchableOpacity>
    </View>
  );
}