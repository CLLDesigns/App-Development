import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

// Props
// color - string
// content - string
class NewButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: this.props.color,
      content: this.props.content,
    }
  }

  render() {
    const passedColour = {
      backgroundColor: this.state.color
    };

    return (
      <TouchableOpacity style={[styles.button, passedColour]} activeOpacity={0.5} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.state.content}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a54cfa",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: "white"
  }
})

export default NewButton
