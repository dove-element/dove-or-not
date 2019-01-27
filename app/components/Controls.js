import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#eecccc"
          onPress={() => this.props.onFalse()}
          style={styles.falseButton}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#cceecc"
          onPress={() => this.props.onTrue()}
          style={styles.doveButton}
        >
          <Text style={styles.buttonText}>D</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffee",
    borderTopWidth: 2,
    borderTopColor: "#cccccc"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 40,
    width: 80,
    textAlign: "center",
    lineHeight: 80,
    height: 80
  },
  falseButton: {
    height: 82,
    width: 82,
    borderRadius: 42,
    backgroundColor: "#ff0000",
    borderWidth: 2,
    borderColor: "#cc0000"
  },
  doveButton: {
    height: 82,
    width: 82,
    borderRadius: 42,
    backgroundColor: "#00ff00",
    borderWidth: 2,
    borderColor: "#00cc00"
  }
});

Controls.propTypes = {
  onTrue: PropTypes.func.isRequired,
  onFalse: PropTypes.func.isRequired
};

export default Controls;
