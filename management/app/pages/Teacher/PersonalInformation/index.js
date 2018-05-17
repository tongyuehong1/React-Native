import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import Layout from '../../../res/dimensions';

export default class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.personal}>
        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://avatars0.githubusercontent.com/u/32216634?s=460&v=4" }}
            onPress={() => {}}
            activeOpacity={0.7}
          />
          <View style={styles.name}>
            <Text style={styles.nameStyle}>刘琦</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  personal: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
  editor: {
    marginTop: Layout.Height(20),
    marginRight: Layout.Width(20),
  },
  avatar: {
    alignItems: 'center',
    marginBottom: Layout.Height(20),
  },
  name: {
    marginTop: Layout.Height(20),
  },
  nameStyle: {
    fontSize: 20,
    color: '#808080', //gray
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
});
