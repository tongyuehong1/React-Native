import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import TheTeacherInCharge from '../../Teacher/ManageClassInformation/TheTeacherInCharge';
import ClassCadre from '../../Teacher/ManageClassInformation/ClassCadre';
import Classmate from '../../Teacher/ManageClassInformation/Classmate';

import Layout from '../../../res/dimensions';

class ManageClassInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.class}>
          <Text style={styles.classFont}>班主任</Text>
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
