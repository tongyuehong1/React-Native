import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

import Colors from '../../../res/colors';
import Icons from '../../../res/icons';
import Layout from '../../../res/dimensions';
import Fonts from '../../../res/fonts';

function CommunityConcern(props) {
  return (
    <View style={styles.concern}>
      <View style={styles.title}>
        <View style={styles.titleLeft}>
          <Avatar
            small
            rounded
            source={{ uri: props.item.avatar }}
            activeOpacity={0.7}
          />
          <View style={styles.titleAuthor}>
            <View style={styles.titleAuthorBar}>
              <Text style={styles.titleAuthorBarName}>{props.item.name}</Text>
              <Icon
                size={Icons.extiny}
                name={props.item.iconName}
                type="ionicon"
                color={Colors.iconColorGoldenrod}
              />
            </View>
            <View style={styles.titleAuthorBarSignature}>
              <Icon
                size={Icons.extiny}
                name={props.item.iconSignature}
                type="ionicon"
                color={Colors.iconColorRed}
              />
              <Text style={styles.titleAuthorBarSignatureFont}>{props.item.signature}</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleRight}>
          <Text style={styles.titleRightFont}>已关注</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          source={{ uri: props.item.image }}
          style={styles.contentImage}
        />
        <Text style={styles.contentFont}>{props.item.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  concern: {
    justifyContent: 'center',
    borderColor: Colors.borderColorLightgray,
    borderBottomWidth: 1,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.Height(26),
    marginTop: Layout.Height(30),
  },

  titleLeft: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: Layout.Width(10),
  },

  titleAuthor: {
    justifyContent: 'center',
    marginLeft: Layout.Width(20),
  },

  titleAuthorBar: {
    flexDirection: 'row',
    marginBottom: Layout.Height(4),
  },

  titleAuthorBarName: {
    marginRight: Layout.Width(10),
  },

  titleAuthorBarSignature: {
    flexDirection: 'row',
  },

  titleAuthorBarSignatureFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginLeft: Layout.Width(4),
  },

  titleRight: {
    height: Layout.Height(36),
    width: Layout.Width(90),
    marginRight: Layout.Width(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },

  titleRightFont: {
    fontSize: Fonts.tiny,
    color: 'gray',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    marginLeft: Layout.Width(20),
    marginRight: Layout.Width(20),
    marginBottom: Layout.Height(30),
  },

  contentImage: {
    height: Layout.Height(100),
    width: Layout.Width(100),
    margin: Layout.Height(20),
  },

  contentFont: {
    fontSize: Fonts.medium,
  },
});

export default CommunityConcern;
