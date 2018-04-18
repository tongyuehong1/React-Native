/*
 * Revision History:
 *     Initial: 2018/02/03        LiuQi
 */

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';

import TopBars from './Components/TopBar';

import Layout from '../../res/dimensions';
import Fonts from '../../res/fonts';

class TopBar extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        {
          this.props.topbar.map((item) => {
            return (
              <TopBars
                key={item.id}
                item={item}
              />
            );
          })
        }

        <View style={styles.margin}>
          <Tile
            imageSrc={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4lSTsKOIrUyoE9YaTP5X2coSXCTzYbFl-DohpoBbQbWL8XbUmQ" }}
            title="更多"
            titleStyle={{ fontWeight: 'bold', fontSize: Fonts.large, marginTop: Layout.Height(40) }}
            featured
            width={Layout.Width(240)}
            height={Layout.Height(240)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    marginLeft: Layout.Width(20),
    marginRight: Layout.Width(20),
    marginTop: Layout.Height(30),
    marginBottom: Layout.Height(30),
  },
});

export default connect(({ community }) => ({
  topbar: community.topbar,
}))(TopBar);
