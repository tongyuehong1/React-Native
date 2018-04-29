/*
 * Revision History:
 *     Initial: 2018/04/29        Liu Qi
 */

import { Platform, Dimensions } from "react-native";

const System = {
  android: () => {
    return Platform.OS === 'android';
  },
  ios: () => {
    return Platform.OS === 'ios';
  },
  width: () => {
    return Dimensions.get("window").width;
  },
  height: () => {
    return Dimensions.get("window").height;
  },
};

export default System;
