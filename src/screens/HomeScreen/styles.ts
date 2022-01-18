import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  indicatorStyle: {
    height: 4,
    backgroundColor: '#121212',
  },
  tabBar: {
    backgroundColor: '#777777',
    margin: 0,
    padding: 0,
    paddingTop: 40,
  },
  tabLabel: {
    textAlign: 'center',
    width: width / 2,
    margin: 0,
  },
  active: {
    fontWeight: 'bold',
    color: '#121212',
  },
  inactive: {
    color: '#FFF',
  },
});

export default styles;
