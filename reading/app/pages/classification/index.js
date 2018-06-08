import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navigator, { dispatcher } from '../../helper/navigator';

import Types from './Types';

import Layout from '../../res/dimensions';

let dispatch;

class Classification extends Component {
  static navigationOptions = {
    header: (
      <View
        style={{
        paddingVertical: Layout.Height(10),
        backgroundColor: 'white',
        flexDirection: 'row',
      }}
      >
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Search'))}
        >
          <Badge
            containerStyle={{
            backgroundColor: 'whitesmoke',
            flexDirection: 'row',
            width: Layout.Width(460),
            height: Layout.Height(50),
            marginLeft: Layout.Width(40),
            }}
          >
            <View style={{ marginRight: Layout.Width(10) }}>
              <Ionicons
                name="ios-search"
                size={16}
              />
            </View>
            <Text style={{ color: 'gray' }}>搜索</Text>
          </Badge>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ marginLeft: Layout.Width(30) }}>
          <Ionicons
            name="ios-qr-scanner"
            size={30}
          />
        </TouchableOpacity> */}
      </View>
    ),
    tabBarLabel: '分类',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-bulb' : 'ios-bulb-outline'}
        size={20}
        style={{ color: tintColor }}
      />
    ),
  }

  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        {
          this.props.types.map((item) => {
            return (
              <Types
                key={`student${item.id}`}
                item={item}
              />
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingTop: Layout.Height(20),
    backgroundColor: '#FFFFFF', //white
  },
});

export default connect(({ classification }) => ({
  ...classification,
}))(Classification);
