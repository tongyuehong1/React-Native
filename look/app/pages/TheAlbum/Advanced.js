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
