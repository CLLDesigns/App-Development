import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  PanResponder,
  TouchableWithoutFeedback
} from 'react-native';

class ModalSliderBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: props.type,
      weather: props.weather,
      transit: props.transit,
      transitTime: props.transitTime,
      feedback: 'start'
    };

    if (this.state.type == 'location') {
      this.state.feedback = 'feedback'
    }

    if (this.state.weather == 'transit') {

    }

    if (this.state.transit == 'location') {

    }
  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.container}>
          <Image source={require('../Design/Users/Resources/Rectangle.png')} style={styles.bg}></Image>
          <Text style={styles.nobg}>{this.state.feedback}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 235,
    width: 280,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nobg: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  bg: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
})

export default ModalSliderBox
