import { StyleSheet, StatusBar, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? (StatusBar.currentHeight || 0) + 60 : 13,
    marginVertical: 0,
    marginHorizontal: 20,
    justifyContent: 'space-around',
  }
});