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
 *     Initial: 2018/02/03        LiuQi
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function Purchased(props) {
  return (
    <View style={styles.purchased}>
      <Image
        style={styles.image}
        source={{ uri: props.item.image }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.item.title}</Text>
        <View style={styles.rate}>
          <Rating
            type="custom"
            ratingColor="#F08080"
            ratingBackgroundColor="#F08080"
            ratingCount={5}
            imageSize={18}
            style={{ paddingVertical: 10 }}
          />
          <Text style={styles.score}>5分</Text>
        </View>
        <Text style={styles.seen}>{props.item.seen}人看过</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchased: {
    flexDirection: 'row',
    marginLeft: Layout.Width(30),
    marginBottom: Layout.Width(30),
  },

  image: {
    height: Layout.Height(140),
    width: Layout.Width(260),
  },

  detail: {
    marginLeft: Layout.Width(40),
  },

  title: {
    fontSize: Fonts.large,
    fontWeight: 'bold',
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.Height(20),
  },

  score: {
    marginLeft: Layout.Width(30),
  },

  seen: {
    color: Colors.fontColorGray,
  },
});

export default Purchased;
