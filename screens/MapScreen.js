import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
        <Text>Map kaouther</Text>
        <MapView
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} 
    style= {{
      height:700
    }}
  />  
    </View>
   
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});