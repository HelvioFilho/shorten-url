import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../screens/Home';
import { MyLinks } from '../screens/MyLinks';
import { defaultTheme } from '../global/styles/theme';

import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Navigator
      drawerContentOptions={{
        activeBackgroundColor: defaultTheme.colors.background40,
        activeTintColor: defaultTheme.colors.text,
        labelStyle: {
          fontSize: 19,
        }
      }}
      drawerStyle={{ paddingTop: 36, }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
}