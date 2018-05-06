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
 *     Initial: 2018/01/27        LiuQi
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Carousel from '../../components/Carousel';
import Open from './Components/Open';
import Rate from './Components/Rate';

import Colors from '../../res/colors';
import Layout from '../../res/dimensions';

class Advanced extends Component {
  render() {
    return (
      <View>
        <View style={styles.carousel}>
          <Carousel slides={this.props.slides} />
        </View>

        <Open />

        <View style={styles.rate}>
          {
            this.props.advanced.map((item) => {
              return (
                <Rate
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: Layout.Height(-24),
  },

  rate: {
    backgroundColor: Colors.backgroundColorWhite,
  },
});

export default connect(({
  carousel,
  thealbum,
}) => ({
  slides: carousel.theAlbum,
  advanced: thealbum.advanced,
}))(Advanced);
