import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Screen1',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title='Navigate to Screen Links' onPress={()=> {this.props.navigation.navigate('Links')}} /> 
        <Button title='Go back' onPress={()=> {this.props.navigation.pop()}} /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
