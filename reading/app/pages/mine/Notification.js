import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../res/dimensions';

function Notification(props) {
  return (
    <View style={styles.notification}>
      <View style={styles.notificationBar}>
        <View style={styles.notificationBarLeft}>
          <Icon
            size={24}
            name={props.item.icon}
            type="ionicon"
            color="#808080" //gray
            marginHorizontal={Layout.Width(30)}
          />
          <Text style={styles.notificationBarFont}>{props.item.title}</Text>
        </View>
        <Icon
          size={24}
          name="ios-arrow-forward"
          type="ionicon"
          color="#D3D3D3" //lightgray
          marginRight={Layout.Width(30)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#FFFFFF', //white
  },
  notificationBar: {
    justifyContent: 'space-between',
    paddingVertical: Layout.Height(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBarLeft: {
    flexDirection: 'row',
  },
  notificationBarFont: {
    color: '#000000', //black
    fontSize: 16,
  },
});

export default Notification;
