import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../res/dimensions';

import Navigator, { dispatcher } from '../../helper/navigator';
// import { createAction } from '../../helper';

import BookAndDetails from './Component/BookAndDetails';

let dispatch;

class Search extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
  }

  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
    this.state = {
      text: '',
    };
  }

  // onLoadOridary = async () => {
  //   const dispatch = dispatcher(this.props);
  //   console.log('asfgbfvdcs');
  //   try {
  //     console.log(`liuqi sb ${this.props.className}`);
  //     let res = await fetch('http://10.0.0.43:8080/books/get/one', {//eslint-disable-line
  //       method: 'POST',
  //       mode: 'cors',
  //       credentials: 'include',
  //       body: JSON.stringify({
  //         book: '人间至味是清欢',
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log('data: ', data);
  //     dispatch(createAction('state/save')(data));
  //     console.log('111111111111111111');
  //   } catch (e) {
  //     console.log(`error: ${e}`);
  //   }
  //   dispatch(Navigator.navigate('BookInterface'));
  // }

  onButtonPress = async () => {
    try {
      let res = await fetch('http://172.20.10.10:8080/books/search/title', {//eslint-disable-line
        method: 'POST',
        headers: {
          'Accept': 'application/json', //eslint-disable-line
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          title: this.state.text,
        }),
      });
      const data = await res.json();

      if (data.status !== 0) {
        return;
      }

      console.log('data: ', data);

      this.props.dispatch({
        type: 'search/getResult',
        payload: data,
      });
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.top}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="transparent"
            value={this.state.text}
            onChangeText={(text) => { this.setState({ text }); }}
          />
          <Button
            style={styles.button}
            onPress={this.onButtonPress}
            title="点击搜索"
            color="#FFA07A"
            accessibilityLabel="搜索"
          />
        </View>

        {
          this.props.search.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => dispatch(Navigator.navigate('BookInterface'))}
              >
                <BookAndDetails
                  key={`key-${item.id}`}
                  item={item}
                />
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Layout.Height(40),
  },
  text: {
    height: Layout.Height(80),
    width: Layout.Width(300),
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  button: {
    height: Layout.Height(100),
  },
});

export default connect(({ search }) => ({
  ...search,
}))(Search);
