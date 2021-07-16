import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Feather } from '@expo/vector-icons';

import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logo from '../../assets/logo.png'
import { TextInput } from 'react-native-gesture-handler';
import { api } from '../../services/api';
import { ItemLink, saveLink } from '../../utils/store';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<ItemLink>({} as ItemLink);

  function endLink() {
    Keyboard.dismiss();
    setLoading(false);
    setInput('');
  }

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('/shorten',
        {
          long_url: input
        });
      setData(response.data);
      setModalVisible(true);

      saveLink(response.data);

      endLink();
    } catch {
      alert('Parece que algo deu errado!');
      endLink();
      saveLink(data);
    }
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={[theme.colors.background20, theme.colors.background100]}
        style={styles.container}
      >
        <StatusBarPage
          color={theme.colors.background20}
          barStyle="light-content"
        />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
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
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={setInput}
              />
            </View>
            <TouchableOpacity
              style={styles.containerButton}
              activeOpacity={0.8}
              onPress={handleShortLink}
            >
              {
                loading ? (
                  <ActivityIndicator color={theme.colors.loading} size={24} />
                ) : (
                  <Text style={styles.buttonText}>
                    Gerar link
                  </Text>
                )
              }
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide" >
          <ModalLink onClose={handleCloseModal} data={data}></ModalLink>
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}