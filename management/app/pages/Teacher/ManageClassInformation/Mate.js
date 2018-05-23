import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Classmate from './Classmate';

import Layout from '../../../res/dimensions';

class ManageClassInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.topFont}>编辑同学信息</Text>
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
  top: {
    marginVertical: Layout.Height(40),
  },
  topFont: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
  },
  card: {
    marginHorizontal: Layout.Width(40),
  },
});

export default connect(({ classInformation }) => ({
  ...classInformation,
}))(ManageClassInformation);
