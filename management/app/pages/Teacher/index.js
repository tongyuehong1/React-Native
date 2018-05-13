import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Picker,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { Button } from 'react-native-elements';

import Layout from '../../res/dimensions';

export default class Index extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    school: '学生',
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.imagePosition}>
          <Image
            style={styles.imageSize}
            source={{ uri: 'http://pic.qiantucdn.com/58pic/14/85/93/58PIC5558PICVSA_1024.jpg!qt324' }}
          />
        </View>

        <View style={styles.input}>
          <Picker
            prompt="Picker"
            mode="dropdown"
            selectedValue={this.state.school}
            onValueChange={({ lang }) => this.setState({ school: lang })}
          >
            <Picker.Item label="学生登录" value="略略略" />
            <Picker.Item label="教师登录" value="js" />
            <Picker.Item label="校长登录" value="net" />
            <Picker.Item label="仝月虹登录" value="rn" />
          </Picker>
          <Sae
            label="用户名"
            labelStyle={{ color: '#F08080' }}
            inputStyle={{ color: '#000000' }}
            iconClass={FontAwesomeIcon}
            iconName="pencil"
            iconColor="#F08080"
          />
          <Sae
            label="密码"
            labelStyle={{ color: '#F08080' }}
            inputStyle={{ color: '#000000' }}
            iconClass={FontAwesomeIcon}
            iconName="pencil"
            iconColor="#F08080"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="登录"
            loading
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "#F08080",
              height: 45,
              borderColor: "transparent",
              borderRadius: 5,
            }}
            containerStyle={{ marginTop: 20 }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    height: Layout.Height(1000),
    width: Layout.Width(600),
    backgroundColor: '#FFFFFF',
  },
  imagePosition: {
    marginVertical: Layout.Height(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: Layout.Height(260),
    width: Layout.Width(260),
  },
  input: {
    paddingHorizontal: Layout.Width(80),
  },
  button: {
    marginTop: Layout.Height(80),
    paddingHorizontal: Layout.Width(80),
  },
});
