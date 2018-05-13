import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Navigator, { dispatcher } from '../../helper/navigator';

import Layout from '../../res/dimensions';

let dispatch;

export default class Student extends Component {
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
        <View style={styles.top}>
          <Text style={styles.topFont}>班级信息管理系统</Text>
        </View>

        <View style={styles.arrangement}>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('Mine'))}
            style={styles.card}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-heart"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>我的信息</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('Classmate'))}
            style={styles.card}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-happy"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>同学信息</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.arrangement}>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('Announcement'))}
            style={styles.card}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-paw"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>班级公告</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => dispatch(Navigator.navigate('Results'))}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-school"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>成绩查询</Text>
          </TouchableOpacity>
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
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.Height(80),
    marginBottom: Layout.Height(40),
  },
  topFont: {
    fontSize: 20,
  },
  arrangement: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Layout.Width(20),
    marginBottom: Layout.Height(40),
  },
  card: {
    height: Layout.Height(240),
    width: Layout.Width(240),
    backgroundColor: '#40E0D0', //颜色：Turquoise
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardIcon: {
    marginBottom: Layout.Height(30),
  },
  cardName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});