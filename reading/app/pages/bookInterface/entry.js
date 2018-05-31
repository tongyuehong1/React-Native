import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';

import ReaderPage from './page/ReaderPage';

const everyDayRead = DrawerNavigator(
  {
    ReadPage: {
      screen: ReaderPage,
      navigationOptions: {
        title: '阅读',
      },
    },
  },
  {
    contentComponent: props => {//eslint-disable-line
      return (
        <ScrollView>
          <View style={{ height: 200, alignItems: 'center', justifyContent: 'center', }}>
            <Image
              style={{ height: 110, width: 200 }}
              resizeMode={"stretch"}//eslint-disable-line
              source={require('./res/images/head.png')}
            />
          </View>
          <DrawerItems {...props} />
        </ScrollView>
      )//eslint-disable-line
    }//eslint-disable-line
  },
);

export default everyDayRead;
