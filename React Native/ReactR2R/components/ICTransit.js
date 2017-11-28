import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Text,
  Dimensions
} from 'react-native';
import NewButton from './NewButton.js';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

// Itinerary Content Slide specific to Transit information.
class ICTransit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      name: this.props.name,
      flight: this.props.flight,
      seat: this.props.seat,
      class: this.props.class,
      date: this.props.date,
      boarding: this.props.boarding
    }

    this.showModal = this.showModal.bind(this);
  }

  // Toggle the visibility of the E-Ticket modal.
  showModal(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return(
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.modal}>
            <Image source={this.props.eticket}></Image>
            <NewButton color="#a54cfa" content="Done" onPress={() => this.showModal(false)}></NewButton>
          </View>
        </Modal>
        <View>
          <Text style={styles.titles}>Passenger</Text>
          <Text style={styles.content}>{this.state.name}</Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.titles}>Flight</Text>
            <Text style={styles.content}>{this.state.flight}</Text>
          </View>
          <View>
            <Text style={styles.titles}>Seat</Text>
            <Text style={styles.content}>{this.state.seat}</Text>
          </View>
          <View>
            <Text style={styles.titles}>Class</Text>
            <Text style={styles.content}>{this.state.class}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.titles}>Date</Text>
            <Text style={styles.content}>{this.state.date}</Text>
          </View>
          <View>
            <Text style={styles.titles}>Estimated Boarding Time</Text>
            <Text style={styles.content}>{this.state.boarding}</Text>
          </View>
        </View>
        <NewButton color="#a54cfa" content="Show E-Ticket" onPress={() => this.showModal(true)}></NewButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignSelf: "stretch",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: (deviceWidth-40),
    paddingTop: 8
  },
  titles: {
    fontSize: 14,
    color: "rgba(47,48,70,60)",
    fontFamily: "avenir",
    fontWeight: "100",
    letterSpacing: 1
  },
  content: {
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "avenir",
    color: "#2F3046"
  },
  modal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: deviceHeight,
    padding: 20
  }
})

export default ICTransit
