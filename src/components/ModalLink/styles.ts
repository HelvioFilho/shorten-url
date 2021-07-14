import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.text,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginVertical: 15,
  },
  containerLink: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 33,
    color: theme.colors.title,
  },
  longUrl: {
    fontFamily: theme.fonts.text400,
    fontSize: 17,
    color: theme.colors.pale,
    marginBottom: 30,
  },
  containerShort: {
    height: 40,
    width: '100%',
    backgroundColor: theme.colors.background100,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  shortUrl: {
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    width: '90%',
    color: theme.colors.text,
  },
});