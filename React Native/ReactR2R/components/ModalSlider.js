import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  FlatList
} from 'react-native';
import ModalSliderBox from './ModalSliderBox.js'

const deviceWidth = Dimensions.get('window').width;

const listData = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "location",
    key: "a"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "location",
    key: "b"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "location",
    key: "c"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "location",
    key: "d"
  }
]

// Find the closest snap location given a current offset
const findClosestOffset = (intervals, current) => {
  for (var i = 0; i < intervals.length-1; i++) {
    var min = intervals[i];
    var max = intervals[i+1];
    if (current < min) {
      return min;
    } else if (current > max) {
      if (i == intervals.length-2) {
        return max;
      }
    } else {
      var minDiff = Math.abs(current - min);
      var maxDiff = Math.abs(current - max);
      if (minDiff < maxDiff) {
        return min;
      } else {
        return max;
      }
    }
  }
}

class ModalSlider extends React.Component {
  intervals = [0];

  constructor(props) {
    super(props)

    this.state = {
      firstAndLast: 0,
      gap: 0,
      contentWidth: 0,
      newWidth: 0
    };

    // create spacing given content width
    this.state.contentWidth = props.contentWidth;
    this.state.firstAndLast = ((deviceWidth - this.state.contentWidth) / 2);
    this.state.gap = (this.state.firstAndLast / 2);
    this.state.newWidth = ((this.state.contentWidth*listData.length) + (this.state.gap*(listData.length-1)) + (this.state.firstAndLast*2));

    // Set scroll intervals
    for (var i = 1; i < listData.length; i++) {
      this.intervals.push((+this.state.firstAndLast + +this.state.contentWidth - +this.state.gap)*i);
    }

    // Function binds
    this.onPress = this.onPress.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
  }

  onScrollEnd(e) {
    const currentOffset = e.nativeEvent.contentOffset.x;
    this.refs.flatlist.scrollToOffset({offset: findClosestOffset(this.intervals, currentOffset), animated: true});
  }

  onPress() {
    // May need to adjust height of modal depending on ModalSliderBox content.
  }

  render() {
    return (
      <View>
        <FlatList
        ref="flatlist"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.container, {width: this.state.newWidth, paddingLeft: this.state.firstAndLast, paddingRight: this.state.firstAndLast}]}
        automaticallyAdjustContentInsets={false}
        data={listData}
        onScrollBeginDrag={this.onScrollStart}
        onScrollEndDrag={this.onScrollEnd}
        decelerationRate={0}
        renderItem={({ item: rowData }) => {
          return (
            <ModalSliderBox
              style={styles.box}
              type={rowData.title}
            >
            </ModalSliderBox>
          );
        }}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 260,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  }
})

export default ModalSlider
