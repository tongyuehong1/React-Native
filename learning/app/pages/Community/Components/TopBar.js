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
import { View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';

import Layout from '../../../res/dimensions';
import Fonts from '../../../res/fonts';

function TopBar(props) {
  return (
    <View style={styles.global}>
      <Tile
        imageSrc={{ uri: props.item.image }}
        title={props.item.title}
        titleStyle={{ fontWeight: 'bold', fontSize: Fonts.small }}
        featured
        width={Layout.Width(240)}
        height={Layout.Height(240)}
        caption={props.item.caption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    marginLeft: Layout.Width(20),
    marginTop: Layout.Height(30),
    marginBottom: Layout.Height(30),
  },
});

export default TopBar;
