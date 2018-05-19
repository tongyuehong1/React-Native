import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import AnnoucementTitle from '../../Teacher/ReleaseAnnouncement/AnnoucementTitle';

import Layout from '../../../res/dimensions';

class ReleaseAnnouncement extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.global}>
        {
          this.props.title.map((item) => {
            return (
              <AnnoucementTitle
                key={item.id}
                item={item}
              />
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
});

export default connect(({ annoucement }) => ({
  ...annoucement,
}))(ReleaseAnnouncement);
