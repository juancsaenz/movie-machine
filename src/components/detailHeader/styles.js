import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Styles for view
export default StyleSheet.create({
  content: {
    height: 210,
    width,
    justifyContent: 'flex-end',
  },
  moviePic: {
    ...StyleSheet.absoluteFill,
    height: 200,
    backgroundColor: '#F2F5F8',
  },
  bottomOverlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 160,
  },
  contentView: {
    width: '100%',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 27,
    paddingVertical: 9,
  },
  contentPic: {
    width: 90,
    height: 130,
    marginRight: 16,
    backgroundColor: '#F2F5F8',
    borderRadius: 5,
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentDescription: {
    marginTop: 2,
    color: '#B8BEC8',
    paddingBottom: 16,
  },
  contentTitle: {
    color: '#4D4D4D',
    width: width / 1.8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
