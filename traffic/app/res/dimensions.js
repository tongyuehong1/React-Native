import { Dimensions } from 'react-native';

const setWidth = 600;
const setHeight = 1000;

const layout = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,

  Width: (x) => {
    return x * Dimensions.get('window').width / setWidth; // eslint-disable-line
  },
  Height: (y) => {
    return y * Dimensions.get('window').height / setHeight; // eslint-disable-line
  },
};

export default layout;
