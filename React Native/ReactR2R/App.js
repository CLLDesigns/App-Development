/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import ModalSlider from './components/ModalSlider.js'
import ItineraryContent from './components/ItineraryContent.js'


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.test}>
        <ModalSlider contentWidth='280'></ModalSlider>
        <ItineraryContent></ItineraryContent>
      </View>
        // <View style={styles.viewer}>
        //   <Image source={require('./Design/Resources/BG2x.png')} style={styles.container}></Image>
        //
        //   <View style={[styles.container, {position: 'absolute', top: 0, left: 0}]}>
        //     <Image source={require('./Design/Resources/HEADER.png')} style={styles.logo}></Image>
        //     <Image responsive source={require('./Design/Resources/TAGLINE.png')} style={styles.tag}></Image>
        //   </View>
        // </View>
    );
  }
}


const styles = StyleSheet.create({
  test: {
    marginTop: 63,
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewer: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent'
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    top: 0,
    left: 0
  },
  tag: {
    backgroundColor: 'transparent'
  },
});
