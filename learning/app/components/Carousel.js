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
 *     Initial: 2018/01/24        LiuQi
 */

import React from 'react';
import { Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Layout from '../res/dimensions';

const renderSlide = ({ item }) => {
  return (
    <Image
      source={{ uri: item }}
      style={styles.slide}
    />
  );
};

export default (props) => {
  return (
    <View style={styles.carousel}>
      <Carousel
        autoplay
        loop
        autoplayDelay={1000}
        autoplayInterval={2000}
        data={props.slides}
        renderItem={renderSlide}
        sliderWidth={Layout.ScreenWidth}
        itemWidth={Layout.ScreenWidth}
      />
    </View>
  );
};

const styles = {
  carousel: {
    height: Layout.Height(400),
  },

  slide: {
    width: Layout.Width(640),
    height: Layout.Height(500),
  },
};
