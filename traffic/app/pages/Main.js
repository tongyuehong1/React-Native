import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { MapView } from 'react-native-amap3d';

const coordinate = {
  latitude: 39.706901,
  longitude: 116.397972,
};

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
      title: '地图模式',
      headerRight: (
        <Picker {...props}>
          <Picker.Item label="标准" value="standard" />
          <Picker.Item label="卫星" value="satellite" />
          <Picker.Item label="导航" value="navigation" />
          <Picker.Item label="夜间" value="night" />
          <Picker.Item label="公交" value="bus" />
        </Picker>
      ),
    };
  }

  render() {
    return (
      <MapView.Marker image="flag" coordinate={coordinate}>
        <View>
          <Text>自定义信息窗体</Text>
        </View>
      </MapView.Marker>
    );
  }
}
