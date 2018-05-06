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
 *     Initial: 2018/02/01        LiuQi
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function Rate(props) {
  return (
    <View style={styles.historical}>
      <Image
        style={styles.image}
        source={{ uri: props.item.image }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.item.title}</Text>
        <View style={styles.rate}>
          <Rating
            type="custom"
            ratingColor="#FFD700"
            ratingBackgroundColor="#FFD700"
            ratingCount={5}
            imageSize={24}
            style={{ paddingVertical: 10 }}
          />
          <Text style={styles.score}>5分</Text>
        </View>
        <Text style={styles.seen}>{props.item.seen}人看过</Text>
        <Text style={styles.price}>¥ {props.item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  historical: {
    flexDirection: 'row',
    paddingVertical: Layout.Height(30),
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
    marginLeft: Layout.Width(30),
    marginRight: Layout.Width(30),
  },

  image: {
    height: Layout.Height(220),
    width: Layout.Width(220),
  },

  detail: {
    marginLeft: Layout.Width(40),
  },

  title: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  score: {
    marginLeft: Layout.Width(30),
  },

  seen: {
    color: Colors.fontColorGray,
    marginBottom: Layout.Height(40),
  },

  price: {
    color: Colors.fontColorOrangeRed,
    fontSize: Fonts.large,
    fontWeight: 'bold',
  },
});

export default Rate;
