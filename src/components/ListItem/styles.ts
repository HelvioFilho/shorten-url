import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.input,
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 7,
  },
  item: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    color: theme.colors.text,
    paddingLeft: 10,
    paddingRight: 20,
  },
  actionContainer: {
    width: '15%',
    backgroundColor: theme.colors.trash,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 10,
  },
});