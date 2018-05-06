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
 *     Initial: 2018/02/02        LiuQi
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Tile } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function Collection(props) {
  return (
    <View style={styles.card}>
      <View style={styles.video}>
        <Tile
          imageSrc={{ uri: props.item.image }}
          icon={{ name: 'play-circle', type: 'font-awesome', marginTop: Layout.Height(60) }}
          featured
          width={Layout.Width(240)}
          height={Layout.Height(180)}
        />
      </View>

      <View style={styles.briefIntroduction}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.time}>时长{props.item.minute}分{props.item.second}秒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: Layout.Height(20),
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: Layout.Width(20),
    marginRight: Layout.Width(20),
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  video: {
    position: 'relative',
  },

  image: {
    height: Layout.Height(140),
    width: Layout.Width(240),
  },

  icon: {
    position: 'absolute',
    top: Layout.Height(40),
    left: Layout.Width(100),
  },

  briefIntroduction: {
    width: Layout.Width(320),
    marginLeft: Layout.Width(30),
  },

  title: {
    fontSize: Fonts.medium,
    marginBottom: Layout.Width(60),
  },

  time: {
    fontSize: Fonts.small,
    color: Colors.fontColorGray,
  },
});

export default Collection;
