import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Layout from '../../../res/dimensions';

function TheTeacherInCharge(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: props.item.image }}
      />
      <View style={styles.font}>
        <Text>姓名：{props.item.name}</Text>
        <Text>性别：{props.item.gender}</Text>
        <Text>QQ：{props.item.qq}</Text>
        <Text>微信：{props.item.wechat}</Text>
        <Text>手机：{props.item.mobilePhone}</Text>
        <Text>办公室：{props.item.office}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Layout.Height(40),
    flexDirection: 'row',
  },
  image: {
    height: Layout.Height(200),
    width: Layout.Width(200),
    borderRadius: 10,
  },
  font: {
    marginLeft: Layout.Width(40),
  },
});

export default TheTeacherInCharge;
