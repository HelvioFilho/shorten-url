import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background100,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 33,
    marginTop: Platform.OS === 'ios' ? '35%' : '20%',
    marginLeft: 20,
    color: theme.colors.text,
  },
  empty: {
    marginTop: '15%',
    alignItems: 'center',
  },
  warning: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    color: theme.colors.text,
  }
});