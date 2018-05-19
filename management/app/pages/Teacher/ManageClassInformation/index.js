import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import TheTeacherInCharge from './TheTeacherInCharge';
import ClassCadre from './ClassCadre';
import Classmate from './Classmate';

import Layout from '../../../res/dimensions';

let dispatch;

class ManageClassInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.class}>
          <Text style={styles.classFont}>班主任</Text>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('TeacherPersonalInformation'))}
          >
            <Text style={styles.edit}>编辑</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {
            this.props.theTeacherInCharge.map((item) => {
              return (
                <TheTeacherInCharge
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </View>

        <View style={styles.class}>
          <Text style={styles.classFont}>班干部</Text>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('TeacherPersonalInformation'))}
          >
            <Text style={styles.edit}>编辑</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {
            this.props.classCadre.map((item) => {
              return (
                <ClassCadre
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </View>

        <View style={styles.class}>
          <Text style={styles.classFont}>同学</Text>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('TeacherPersonalInformation'))}
          >
            <Text style={styles.edit}>编辑</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {
            this.props.ordinary.map((item) => {
              return (
                <Classmate
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
  class: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(40),
    paddingBottom: Layout.Height(20),
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classFont: {
    fontSize: 30,
    color: '#000000', //black
  },
  card: {
    marginHorizontal: Layout.Width(40),
  },
  edit: {
    fontSize: 14,
    color: '#808080',
  },
});

export default connect(({ classInformation }) => ({
  ...classInformation,
}))(ManageClassInformation);
