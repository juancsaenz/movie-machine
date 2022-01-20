import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Styles for view
export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    width: width - 60,
  },
  input: {
    width: '100%',
    height: 38,
    marginTop: 15,
    color: '#000',
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  button: {
    width: 250,
    height: 44,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
