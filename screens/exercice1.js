import Animated from "react-native-reanimated";
import React, { Component } from "react";
import View from "react-native";
import StyleSheet from "react-native";

export default class exercice1 extends Component {
    navigationOption = {
        title: 'Animated'
    };
    state = {
        height: new Animated.Value(0.5),
    };

    TourAnimation() {
        Animated.sequence([
            Animated.timing(this.state.height, {
                toValue: 1,
                duration: 2000,
            })
        ]).start(event => {
            if (event.finished) {
                this.TourAnimation();
            }
        });
    }

  componentDidMout() {
        this.TourAnimation();

    }

     styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff"
        },
          text: {
          fontWeight: "bold",
          fontSize: 20
        },
        view1: {
          flex: 1,
          backgroundColor: "red"
        },
        view2: {
          flex: 1,
          backgroundColor: "#c6394d"
        },
        
      });

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.view1,
                        { flex: this.state.height }

                    ]}
                >

                    <text>view1</text>
                </Animated.View>

                <Animated.View style={[styles.view2]}>
                    <text>view1</text>
                </Animated.View>

            </View>
        );
    }
}*/

