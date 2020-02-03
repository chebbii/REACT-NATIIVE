import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator"
import Exercice3 from "..exercice3"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Exercice1/>
        <Exercice3/>

        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
    text: {
    fontWeight: "bold",
    fontSize: 20
  },
  A1: {
    flex: 1,
    backgroundColor: "red"
  },
  A2: {
    flex: 1,
    backgroundColor: "#c6394d"
  },
  
});