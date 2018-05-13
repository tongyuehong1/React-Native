import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';


import Navigator, { dispatcher } from '../../../helper/navigator';

import Layout from '../../../res/dimensions';

let dispatch;

export default class Information extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }
  render() {
    return (
      <View style={styles.global}>
        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#40E0D0' }}
          title="华北电力大学科技学院公告1"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#40E0D0' }}
          title="华北电力大学科技学院公告2"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#40E0D0' }}
          title="华北电力大学科技学院公告3"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#F4A460' }}
          title="计算机2班——班级公告1"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#F4A460' }}
          title="计算机2班——班级公告2"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#F4A460' }}
          title="计算机2班——班级公告3"
          button
          type="instagram"
        />

        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          style={{ backgroundColor: '#F4A460' }}
          title="计算机2班——班级公告4"
          button
          type="instagram"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
});
