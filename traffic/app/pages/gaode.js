import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MapView } from 'react-native-amap3d';

import Navigator, { dispatcher } from '../helper/navigator';

import Layout from '../res/dimensions';

let dispatch;

export default class MapTypesExample extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    state.params = state.params || { mapType: 'standard' };
    const props = {
      mode: 'dropdown',
      style: { width: 100 },
      selectedValue: state.params.mapType,
      onValueChange: mapType => setParams({ mapType }),
    };
    return {
      header: (
        <View style={styles.topBar}>
          <View style={styles.topBarSearch}>
            <TouchableOpacity
              onPress={() => dispatch(Navigator.navigate('Search'))}
            >
              <TextInput
                style={styles.topBarSearchInput}
                underlineColorAndroid="transparent"
                placeholder="输入位置进行搜索"
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <Picker
            dropdown
            {...props}
          >
            <Picker.Item label="标准" value="standard" />
            <Picker.Item label="卫星" value="satellite" />
          </Picker>
        </View>
      ),
    };
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }


  _animatedToOne = () => {
    this.mapView.animateTo({
      tilt: 0,
      rotation: 0,
      zoomLevel: 16,
      coordinate: {
        latitude: 38.87722,
        longitude: 115.50569,
      },
    });
  }
  _animatedToTwo = () => {
    this.mapView.animateTo({
      tilt: 0,
      rotation: 0,
      zoomLevel: 16,
      coordinate: {
        latitude: 38.88917,
        longitude: 115.51516,
      },
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <MapView
          style={styles.body}
          mapType={this.props.navigation.state.params.mapType}
          ref={ref => this.mapView = ref} //eslint-disable-line
          coordinate={{
            latitude: 38.88917,
            longitude: 115.51516,
          }}
          showsIndoorMap
          showsBuildings
          showsCompass
          showsZoomControls
          showsScale
          showsLocationButton
          locationEnabled
          onLocation={({ nativeEvent }) => (`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this._animatedToOne}>
              <Text style={styles.text}>华电一校区</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this._animatedToTwo}>
              <Text style={styles.text}>华电二校区</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topBarSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarSearchInput: {
    width: Layout.Width(300),
    color: '#808080',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    marginBottom: Layout.Height(20),
  },
  topBarSearchFont: {
    backgroundColor: '#1E90FF',
    paddingVertical: Layout.Height(16),
    paddingHorizontal: Layout.Width(20),
  },
  topBarSearchFontColor: {
    color: '#FFFFFF',
  },
  body: {
    flex: 1,
  },
  buttonPosition: {
    flexDirection: 'row',
  },
  buttons: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  text: {
    fontSize: 16,
  },
});
