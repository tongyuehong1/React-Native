import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

import Layout from '../../../res/dimensions';

export default class Index extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '刘琦',
      pass: '111111',
    };
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.imagePosition}>
          <Image
            style={styles.imageSize}
            source={require('../../../assets/images/images.png')}
          />
        </View>

        <View>
          <View style={styles.textInput}>
            <Text style={styles.textInputFont}>用户名</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
              value={this.state.name}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.textInputFont}>密码</Text>
            <TextInput
              password
              secureTextEntry
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
              value={this.state.pass}
            />
          </View>
        </View>

        <Button
          onPress={this.handleSubmit}
          title="登录"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#F08080",
            height: 45,
            borderColor: "transparent",
            borderRadius: 5,
            marginTop: Layout.Height(100),
          }}
          containerStyle={{ marginTop: 20 }}
        />

        <TouchableOpacity
          style={styles.registered}
        >
          <Text style={styles.registeredFont}>没有账号？点击这里注册</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: Layout.Width(80),
  },
  imagePosition: {
    marginVertical: Layout.Height(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: Layout.Height(400),
    width: Layout.Width(400),
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Layout.Height(40),
  },
  textInputFont: {
    fontSize: 18,
    color: '#000000',
  },
  textInputStyle: {
    padding: 0,
    width: Layout.Width(300),
    borderBottomWidth: 1,
    borderColor: '#F08080',
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
