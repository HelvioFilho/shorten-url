import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { defaultTheme } from '../../../global/styles/theme';
import { ActionContainer, ContainerLink } from './styles';
import { CustomText } from '../../atoms';
import { ItemLink } from '../../../utils/interface';

type Props = {
  data: ItemLink;
  selectedItem: (item: ItemLink) => void;
  deleteItem: (item: string) => void;
}

export function ListItem({ data, selectedItem, deleteItem }: Props) {
  function RightActions() {
    return (
      <ActionContainer
        activeOpacity={0.9}
        onPress={() => deleteItem(data.id)}
      >
        <Feather
          name="trash"
          color={defaultTheme.colors.text}
          size={24}
        />
      </ActionContainer>
    );
  }

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerLink
          activeOpacity={0.9}
          onPress={() => selectedItem(data)}
        >
          <Feather
            name="link"
            color={defaultTheme.colors.text}
            size={24}
          />
          <CustomText
            numberOfLines={1}
            fontFamily="text400"
            fontSize={18}
            color="text"
            paddingLeft={10}
            paddingRight={20}
          >
            {data.long_url}
          </CustomText>
        </ContainerLink>
      </Swipeable>
    </View>
  );
}