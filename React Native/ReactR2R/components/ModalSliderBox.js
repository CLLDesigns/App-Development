import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class ModalSliderBox extends React.Component {
  constructor(props) {
    super(props)

    this.attr = {
      type: props.type,
      weather: props.weather,
      transit: props.transit,
      test: 'blarg'
    };

    if (this.attr.type == 'location') {
      this.attr.test = 'fucked up'
    }

    if (this.attr.weather == 'transit') {

    }

    if (this.attr.transit == 'location') {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nobg}>{this.attr.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 238,
    width: 282,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderRadius: 20
  },
  nobg: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

export default ModalSliderBox
