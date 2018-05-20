import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Purchaseds from './Components/Purchased';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';

class Purchased extends Component {
  render() {
    return (
      <View>
        <View style={styles.purchasedTheAlbum}>
          <View style={styles.title}>
            <Text style={styles.titleLeft}>已购专辑</Text>
            <View style={styles.titleRight}>
              <Text style={styles.titleRightFont}>更多</Text>
              <Icon
                name="ios-arrow-forward"
                type="ionicon"
                size={Fonts.medium}
                color={Colors.iconColorGray}
              />
            </View>
          </View>
          <View style={styles.theAlbum}>
            {
              this.props.purchased.map((item) => {
                return (
                  <Purchaseds
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        </View>

        <View style={styles.purchasedItems}>
          <View style={styles.purchasedItemsTitle}>
            <Text style={styles.titleLeft}>已购单品</Text>
            <View style={styles.titleRight}>
              <Text style={styles.titleRightFont}>更多</Text>
              <Icon
                name="ios-arrow-forward"
                type="ionicon"
                size={Fonts.medium}
                color={Colors.iconColorGray}
              />
            </View>
          </View>
          <View style={styles.theAlbum}>
            {
              this.props.purchased.map((item) => {
                return (
                  <Purchaseds
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purchasedTheAlbum: {
    backgroundColor: Colors.backgroundColorWhite,
  },

  title: {
    marginTop: Layout.Height(-20),
    marginBottom: Layout.Height(20),
    height: Layout.Height(80),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  titleLeft: {
    flex: 1,
    fontSize: Fonts.medium,
    fontWeight: 'bold',
    marginLeft: Layout.Width(20),
  },

  titleRight: {
    width: Layout.Width(100),
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleRightFont: {
    color: Colors.fontColorGray,
    marginRight: Layout.Width(10),
    fontSize: Fonts.small,
  },
  purchasedItems: {
    backgroundColor: Colors.backgroundColorWhite,
    marginTop: Layout.Height(20),
  },
  purchasedItemsTitle: {
    marginBottom: Layout.Height(20),
    height: Layout.Height(80),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },
});

export default connect(({ thealbum }) => ({
  purchased: thealbum.purchased,
}))(Purchased);
