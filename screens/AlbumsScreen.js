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

    actions.searchTracks('ladygaga').then(albums => this.setState({ albums }));
  }

  /* componentDidMount() {
    // This warning only appears when 'connections' item is empty
    return actions.searchTracks('ladygaga').then((albums) => {
      this.setState({albums});
    }).catch(error => {
      console.log(error);
    })
  } */


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
