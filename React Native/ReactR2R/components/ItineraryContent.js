import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  Modal
} from 'react-native';
import ICTransit from './ICTransit.js'

class ItineraryContent extends React.Component {
  constructor(props) {
    super(props)

    // States:
    // Type: location | transit
    this.state = {
      modalVisible: false,
      type: this.props.type,
      name: "John Doe",
      flight: "QA674",
      seat: "30F",
      class: "Economy",
      date: "28/11/2017",
      boarding: "8:00am"
    }
  }

  render() {
    if (this.state.type == "location") {
      return (
        <ScrollView>
          <View>
            <Text>Hotel</Text>
            <Text>this.state.hotel</Text>
          </View>
        </ScrollView>
      )
    } else if (this.state.type == "transit") {
      return (
        <ICTransit
          name={this.state.name}
          flight={this.state.flight}
          seat={this.state.seat}
          class={this.state.class}
          date={this.state.date}
          boarding={this.state.boarding}
          eticket={require("../Design/Users/Resources/Bitmap.png")}
        >
        </ICTransit>
      )
    }
  }
}

export default ItineraryContent
