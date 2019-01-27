import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

class Score extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Correct: {this.props.correct}</Text>
        <Text>Wrong: {this.props.incorrect}</Text>
      </View>
    );
  }
}

Score.propTypes = {
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired
};
styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffee",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc"
  }
});
export default Score;
