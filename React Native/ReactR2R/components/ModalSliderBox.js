import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  PanResponder,
  TouchableWithoutFeedback
} from 'react-native';

const getDirection = ({ moveX, moveY, dx, dy}) => {
  const draggedDown = dy > 30;
  const draggedUp = dy < -30;
  const draggedLeft = dx < -30;
  const draggedRight = dx > 30;
  let dragDirection = '';

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += 'dragged down '
    if (draggedUp) dragDirection +=  'dragged up ';
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += 'dragged left '
    if (draggedRight) dragDirection +=  'dragged right ';
  }

  if (dragDirection) return dragDirection;
}

class ModalSliderBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: props.type,
      weather: props.weather,
      transit: props.transit,
      feedback: 'start'
    };

    if (this.state.type == 'location') {
      this.state.feedback = 'feedback'
    }

    if (this.state.weather == 'transit') {

    }

    if (this.state.transit == 'location') {

    }

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      feedback: "Tap"
    })
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder:(evt, gestureState) => !!getDirection(gestureState),
      onPanResponderMove: (evt, gestureState) => {
        const drag = getDirection(gestureState);
        this.setState({
          feedback: drag,
        })
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
  }

  render() {
    return (
      <View {...this._panResponder.panHandlers}> 
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.container}>
            <Image source={require('../Design/Users/Resources/Rectangle.png')} style={styles.bg}></Image>
            <Text style={styles.nobg}>{this.state.feedback}</Text>
          </View>
        </TouchableWithoutFeedback>
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
