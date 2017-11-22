import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
listData = [
  {
    title: "a",
    key: 'a'
  },
  {
    title: "b",
    key: 'b'
  },
  {
    title: "c",
    key: 'c'
  }
]


class ItineraryContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  // Once state is updated:
  // Ensure the correct itinerary slide is present.
  componentDidUpdate() {
    this._content.scrollToOffset({offset: (+this.state.index*deviceWidth), animated: true})
  }

  render() {
    return (
      <View>
        <FlatList
        ref={component => this._content = component}
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={false}
        data={listData}
        decelerationRate={0}
        renderItem={({ item: rowData }) => {
          return (
            <View style={[{backgroundColor: 'blue', width: deviceWidth-10}]}>
              <Text>{rowData.title}</Text>
            </View>
          );
        }}
        >
        </FlatList>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    width: (deviceWidth*listData.length),
    justifyContent: 'space-between'
  }
})

export default ItineraryContent
