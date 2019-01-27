import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.header}>Dove or Not</Text>
        </View>
        <View style={styles.actions}>
          <TouchableHighlight
            underlayColor="#ffffff"
            style={styles.startButton}
            onPress={() => this.props.navigation.navigate("Game")}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    flex: 4,
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    fontSize: 50,
    textAlign: "center"
  },
  actions: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  startButton: {
    height: 60,
    width: "50%",
    backgroundColor: "#3333ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  buttonText: {
    color: "#eeffff",
    textAlign: "center",
    fontSize: 30
  }
});

export default Home;
