import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { CardList } from '../components/CardList';
import * as actions from '../actions';

export default class AlbumScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor(){
    super();

    this.state = {
      albums: []
    }

    actions.searchTracks('ladygaga').then(albums => this.setState({albums}));
  }


  render() {
   const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList 
          data={albums} 
          imageKey={'cover_big'} 
          titleKey={'title'}
          buttonText= "See the detail"
        />
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
