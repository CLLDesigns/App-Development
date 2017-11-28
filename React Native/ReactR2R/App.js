/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import ModalSlider from './components/ModalSlider.js'
import ItineraryContentSlider from './components/ItineraryContentSlider.js'


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.handleSwipe = this.handleSwipe.bind(this)
  }

  handleSwipe(passedIndex) {
    this.ic.setState({
      index: passedIndex
    })
  }

  render() {
    return (
      <View style={styles.test}>
        <ModalSlider contentWidth='280' handleSwipe={this.handleSwipe}></ModalSlider>
        <ItineraryContentSlider
          ref={component => this.ic = component}
        ></ItineraryContentSlider>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  test: {
    marginTop: 63,
    flexDirection: 'column',
  },
});
