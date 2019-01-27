import React, { Component } from "react";
import { StyleSheet, View, Alert, Text, Image } from "react-native";
import Controls from "../components/Controls";
import Score from "../components/Score";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correct: 0,
      incorrect: 0,
      activeItem: {
        isDove: true
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Score
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.doveImage}
            source={require("../images/dove.jpg")}
          />
        </View>
        <View style={styles.controlsContainer}>
          <Controls onTrue={this.onDovePress} onFalse={this.onFalsePress} />
        </View>
      </View>
    );
  }
  onFalsePress = () => {
    if (this.state.activeItem.isDove) {
      this.setState({ incorrect: this.state.incorrect + 1 });
    } else {
      this.setState({ correct: this.state.correct + 1 });
    }
  };
  onDovePress = () => {
    if (this.state.activeItem.isDove) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scoreContainer: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  imageContainer: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center"
  },
  doveImage: {
    height: "100%"
  },
  controlsContainer: {
    flex: 2
  }
});
export default Game;
