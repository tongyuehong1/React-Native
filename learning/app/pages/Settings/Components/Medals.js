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
 *     Initial: 2018/02/06        LiuQi
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';
import Icons from '../../../res/icons';
import Fonts from '../../../res/fonts';

function Medal(props) {
  return (
    <View style={styles.content}>
      <View
        style={styles.contentLargeCircle}
        backgroundColor={props.item.backgroundColorLarge}
      >
        <View
          style={styles.contentMediumCircle}
          backgroundColor={props.item.backgroundColorMedium}
        >
          <View
            style={styles.contentSmallCircle}
            backgroundColor={props.item.backgroundColorSmall}
          >
            <Icon
              size={Icons.large}
              name={props.item.icon}
              type="ionicon"
              color={props.item.iconColor}
            />
            <Text style={styles.contentFont}>{props.item.achievement}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: Layout.Height(30),
    marginLeft: Layout.Width(20),
  },

  contentLargeCircle: {
    height: Layout.Height(138),
    width: Layout.Width(138),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentMediumCircle: {
    height: Layout.Height(126),
    width: Layout.Width(126),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentSmallCircle: {
    height: Layout.Height(110),
    width: Layout.Width(110),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentFont: {
    fontWeight: '900',
    fontSize: Fonts.tiny,
    color: Colors.fontColorWhite,
  },
});

export default Medal;
