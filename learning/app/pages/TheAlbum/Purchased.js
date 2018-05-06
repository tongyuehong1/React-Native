/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/21        LiuQi
 */

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
