import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

listData = [
  {
    key: 'a'
  }
]

class ItineraryContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FlatList
      ref={(component) => {
        this.content = component;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      automaticallyAdjustContentInsets={false}
      data={listData}
      decelerationRate={0}
      renderItem={({ item: rowData }) => {
        return (
          <View></View>
        );
      }}
      >
      </FlatList>
  )}
}

const styles = StyleSheet.create({


})

export default ItineraryContent
