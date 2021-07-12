import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Feather } from '@expo/vector-icons';

import { Menu } from '../../components/Menu';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logo from '../../assets/logo.png'
import { TextInput } from 'react-native-gesture-handler';

export function Home() {
  return (
    <LinearGradient
      colors={[theme.colors.background20, theme.colors.background100]}
      style={styles.container}
    >
      <StatusBarPage
        color={theme.colors.background20}
        barStyle="light-content"
      />
      <Menu />
      <View style={styles.logoView}>
        <Image
          style={styles.image}
          source={logo}
          resizeMode="contain" />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Encurtador de Link</Text>
        <Text style={styles.subtitle}>Cole seu link abaixo para encurtar</Text>
        <View style={styles.containerInput}>
          <View style={styles.boxIcon}>
            <Feather
              name="link"
              size={22}
              color={theme.colors.text}
            />
          </View>
          <TextInput
            placeholder="Cole seu link aqui..."
            placeholderTextColor={theme.colors.text}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          style={styles.containerButton}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Gerar link
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}