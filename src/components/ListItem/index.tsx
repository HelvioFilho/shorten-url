import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ItemLink } from '../../utils/store';

type Props = {
  data: ItemLink;
  selectedItem: (item: ItemLink) => void;
  deleteItem: (item: string) => void;
}

export function ListItem({ data, selectedItem, deleteItem }: Props) {
  function RightActions() {
    return (
      <TouchableOpacity
        style={styles.actionContainer}
        onPress={() => deleteItem(data.id)}
      >
        <Feather
          name="trash"
          color={theme.colors.text}
          size={24}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={RightActions}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.containerButton}
          onPress={() => selectedItem(data)}
        >
          <Feather
            name="link"
            color={theme.colors.text}
            size={24}
          />
          <Text numberOfLines={1} style={styles.item}>{data.long_url}</Text>
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
}