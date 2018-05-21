import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

import Colors from '../../../res/colors';
import Icons from '../../../res/icons';
import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';

function CommunityWonderful(props) {
  return (
    <View style={styles.wonderful}>
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
          <Text style={styles.titleRightFont}>关注</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <Text style={styles.contentLeftTitle}>{props.item.title}</Text>
          <Text style={styles.contentLeftContent}>{props.item.content}</Text>
        </View>
        <View style={styles.contentRight}>
          <Image
            style={styles.contentRightImage}
            source={{ uri: props.item.image }}
          />
        </View>
      </View>

      <View style={styles.interaction}>
        <View style={styles.interactionLeft}>
          <View style={styles.interactionLeftIcon}>
            <Icon
              size={18}
              name="ios-chatboxes"
              type="ionicon"
              color={Colors.iconColorGray}
            />
            <Text style={styles.interactionLeftIconFont}>{props.item.comment}</Text>
          </View>
          <View style={styles.interactionLeftIcon}>
            <Icon
              size={18}
              name="ios-thumbs-up"
              type="ionicon"
              color={Colors.iconColorGray}
            />
            <Text style={styles.interactionLeftIconFont}>{props.item.like}</Text>
          </View>
        </View>
        <Text style={styles.interactionRight}>{props.item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wonderful: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.Height(26),
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
    width: Layout.Width(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.borderColorBlack,
    borderWidth: 1,
    marginRight: Layout.Width(20),
    borderRadius: 4,
  },

  titleRightFont: {
    fontSize: Fonts.tiny,
  },

  content: {
    flexDirection: 'row',
  },

  contentLeft: {
    flex: 1,
    marginLeft: Layout.Width(20),
  },

  contentLeftTitle: {
    fontSize: Fonts.large,
    marginBottom: Layout.Height(14),
  },

  contentLeftContent: {
    fontSize: Fonts.small,
    color: Colors.fontColorGray,
  },

  contentRight: {
    height: Layout.Height(160),
    width: Layout.Width(160),
  },

  contentRightImage: {
    height: Layout.Height(140),
    width: Layout.Width(140),
  },

  interaction: {
    flexDirection: 'row',
  },

  interactionLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  interactionLeftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.Width(20),
  },

  interactionLeftIconFont: {
    marginLeft: Layout.Width(6),
  },

  interactionRight: {
    width: Layout.Width(130),
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
  },
});

export default CommunityWonderful;
