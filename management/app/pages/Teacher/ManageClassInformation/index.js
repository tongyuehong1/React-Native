import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import TheTeacherInCharge from './TheTeacherInCharge';
import ClassCadre from './ClassCadre';
import Classmate from './Classmate';

import Layout from '../../../res/dimensions';

class ManageClassInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.classCadre}>
          <Text style={styles.classCadreFont}>班主任</Text>
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

        <View style={styles.classCadre}>
          <Text style={styles.classCadreFont}>班干部</Text>
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

        <View style={styles.classCadre}>
          <Text style={styles.classCadreFont}>同学</Text>
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
  classCadre: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(40),
    paddingBottom: Layout.Height(20),
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  classCadreFont: {
    fontSize: 30,
    color: '#000000', //black
  },
  card: {
    marginHorizontal: Layout.Width(40),
  },
});

export default connect(({ classInformation }) => ({
  ...classInformation,
}))(ManageClassInformation);
