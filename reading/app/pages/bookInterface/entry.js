import React from 'react';
import {
  ScrollView,
  View,
  Image,
} from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import ReaderPage from './page/ReaderPage';

const everyDayRead = DrawerNavigator({
  ReadPage: {
    screen: ReaderPage,
    navigationOptions: {
      header: null,
    },
  },
}, {
  contentComponent: props => {
    return (
      <ScrollView>
        <View style={{ height: 200, alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ height: 110, width: 200 }} resizeMode={"stretch"} source={require('./res/images/head.png')} />
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    )
  }
  });

export default everyDayRead;
