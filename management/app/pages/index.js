import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Picker,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Navigator, { dispatcher } from '../helper/navigator';

import Layout from '../res/dimensions';

let dispatch;

export default class Index extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      LoginMode: null,
      SelectTheClass: null,
    };
    dispatch = dispatcher(this.props);
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
            selectedValue={this.state.LoginMode}
            onValueChange={lang => this.setState({ LoginMode: lang })}
            prompt="选择登录方式"
            mode="dialog"
          >
            <Picker.Item label="学生登录" value="学生登录" />
            <Picker.Item label="教师登录" value="教师登录" />
          </Picker>
        </View>

        <View style={styles.asdf}>
          <Picker
            selectedValue={this.state.SelectTheClass}
            onValueChange={lang => this.setState({ SelectTheClass: lang })}
            prompt="选择所在班级"
            mode="dialog"
          >
            <Picker.Item label="计算机14k1班" value="计算机14k1班" />
            <Picker.Item label="计算机14k2班" value="计算机14k2班" />
            <Picker.Item label="电信14k1班" value="电信14k1班" />
            <Picker.Item label="电信14k2班" value="电信14k2班" />
            <Picker.Item label="软件14k1班" value="软件14k1班" />
            <Picker.Item label="软件14k2班" value="软件14k2班" />
            <Picker.Item label="通信14k1班" value="通信14k1班" />
            <Picker.Item label="通信14k2班" value="通信14k2班" />
            <Picker.Item label="网络14k1班" value="网络14k1班" />
            <Picker.Item label="网络14k2班" value="网络14k2班" />
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
            onPress={() => dispatch(Navigator.navigate('Student'))}
            title="登录"
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
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Register'))}
          style={styles.registered}
        >
          <Text style={styles.registeredFont}>没有账号？点击这里注册</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  asdf: {
    paddingHorizontal: Layout.Width(80),
  },
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
  registered: {
    marginVertical: Layout.Height(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  registeredFont: {
    color: '#808080',
  },
});
