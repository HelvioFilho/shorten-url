import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { StatusBarPage } from '../../components/StatusBarPage';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function MyLinks() {
  return (
    <View style={styles.container}>
      <StatusBarPage
        color={theme.colors.background100}
        barStyle="light-content"
      />
      <Menu />
      <Text style={styles.title}>Meus Links</Text>
      <FlatList
        data={[{ id: '1', link: 'feelstest.com' }, { id: '2', link: 'mynotebook.com' }]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}