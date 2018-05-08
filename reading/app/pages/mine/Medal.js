import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Medals from './Components/Medals';

import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Icons from '../../res/icons';
import Fonts from '../../res/fonts';

class Medal extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.titleLeftFont}>我的勋章</Text>
          </View>
          <View style={styles.titleRight}>
            <Text style={styles.titleRightFont}>查看全部勋章</Text>
            <Icon
              size={Icons.extiny}
              name="ios-arrow-forward"
              type="ionicon"
              color={Colors.iconColorGray}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            this.props.medals.map((item) => {
              return (
                <Medals
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(10),
    backgroundColor: Colors.backgroundColorWhite,
  },

  title: {
    paddingVertical: Layout.Height(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  titleLeft: {
    flex: 1,
    marginLeft: Layout.Width(20),
  },

  titleLeftFont: {
    fontSize: Fonts.medium,
  },

  titleRight: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Layout.Width(170),
  },

  titleRightFont: {
    marginRight: Layout.Width(10),
    color: Colors.fontColorGray,
    fontSize: Fonts.tiny,
  },
});

export default connect(({ settings }) => ({ ...settings }))(Medal);
