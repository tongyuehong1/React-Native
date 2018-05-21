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
            imageSrc={{ uri: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f6e5055d9ad1d603fd364c11823d026&w=1000&q=80" }}
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
