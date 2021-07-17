import { theme } from '../../global/styles/theme';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoView: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 35 : 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  containerText: {
    marginTop: Platform.OS === 'ios' ? '25%' : '15%',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 35,
    color: theme.colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    color: theme.colors.text,
    textAlign: 'center',
    paddingBottom: "3%",
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 7,
    marginVertical: 15,
    marginHorizontal: 0,
    paddingHorizontal: 15,
  },
  boxIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    width: "11%",
    height: 50,
    backgroundColor: theme.colors.input,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  input: {
    fontFamily: theme.fonts.text400,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: 50,
    padding: 10,
    backgroundColor: theme.colors.input,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    fontSize: 16,
    color: theme.colors.text,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: theme.colors.text,
    marginVertical: 0,
    marginHorizontal: 15,
    borderRadius: 7,
    marginBottom: 15,
  },
  buttonText: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
  }
});