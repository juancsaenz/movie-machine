import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Styles for view
export default StyleSheet.create({
  view: {
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 4,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
  },
  moviePic: {
    zIndex: 1,
    borderRadius: 5,
    backgroundColor: '#F2F5F8',
  },
  contentText: {
    flexWrap: 'wrap',
    color: '#7F7F7F',
    fontSize: 12,
    height: 35,
    paddingHorizontal: 2,
    paddingTop: 5,
  },
});
