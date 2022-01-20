import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Styles for view
export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scores: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 27,
  },
  centerContainer: {
    alignItems: 'center',
    width: width / 4,
  },
  separator: {
    height: 1,
    width: width - 30,
    backgroundColor: '#F2F5F8',
    marginVertical: 20,
  },
  rantingIcon: {
    color: '#f1c40f',
  },
  ratingValue: {
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: 'bold',
  },
  ratingStatic: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  explainer: {
    color: '#B8BEC8',
    fontSize: 14,
    marginTop: 2,
  },
  overall: {
    backgroundColor: '#f1c40f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: 'bold',
  },
  rateIcon: {
    color: '#3382C8',
  },
  description: {
    color: '#4D4D4D',
    fontSize: 14,
    paddingHorizontal: 27,
  },
  seeMore: {
    color: '#B8BEC8',
    fontWeight: 'bold',
  },
  itemContent: {
    borderWidth: 1,
    borderColor: '#AEB5C0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 18,
  },
  listSeparator: {
    width: 10,
  },
  itemText: {
    color: '#AEB5C0',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
