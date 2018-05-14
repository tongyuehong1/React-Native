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
import Navigator, { dispatcher } from '../helper/navigator';

import Layout from '../res/dimensions';

let dispatch;

export default class Index extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
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
  registered: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registeredFont: {
    color: '#808080',
  },
});
