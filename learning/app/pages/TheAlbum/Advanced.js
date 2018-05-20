import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Open from './Components/Open';
import Rate from './Components/Rate';

import Colors from '../../res/colors';
import Layout from '../../res/dimensions';

class Advanced extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{ uri: 'https://images.unsplash.com/photo-1506361797048-46a149213205?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=493e200df17b54d1ef10eb61e1df148a&w=1000&q=80' }}
        />
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
  image: {
    marginTop: Layout.Height(-24),
    height: Layout.Height(400),
    width: Layout.Width(640),
  },

  rate: {
    backgroundColor: Colors.backgroundColorWhite,
  },
});

export default connect(({ thealbum }) => ({
  advanced: thealbum.advanced,
}))(Advanced);
