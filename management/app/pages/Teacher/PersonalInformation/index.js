import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import Information from './Information';
import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://avatars0.githubusercontent.com/u/32216634?s=460&v=4" }}
            onPress={() => {}}
            activeOpacity={0.7}
          />
        </View>
        <View style={{ marginBottom: 100 }}>
          {
            this.props.teacherInformation.map((item) => {
              return (
                <Information
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
});


export default connect(({ personalInformation }) => ({
  ...personalInformation,
}))(PersonalInformation);
