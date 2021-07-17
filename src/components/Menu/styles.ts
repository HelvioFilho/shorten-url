import { StyleSheet, StatusBar, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    elevation: 9999,
    top: Platform.OS === 'ios' ? (StatusBar.currentHeight || 0) + 60 : 30,
    marginVertical: 0,
    marginHorizontal: 20,
    justifyContent: 'space-around',
  }
});