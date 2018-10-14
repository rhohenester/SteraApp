import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

export default class AlbunsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>I am Albuns Screen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
