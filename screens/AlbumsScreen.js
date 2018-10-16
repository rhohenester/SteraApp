import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { CardList } from '../components/CardList';

export default class AlbumScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor(){
    super();

    this.state = {
      albums: [
        {
          title: 'Awakened',
          image: 'https://i1.wp.com/www.metalinjection.net/wp-content/uploads/2012/09/As-I-Lay-Dying-Awakened1.jpg?fit=700%2C700'
        },
        {
          title: 'Awakened',
          image: 'https://i1.wp.com/www.metalinjection.net/wp-content/uploads/2012/09/As-I-Lay-Dying-Awakened1.jpg?fit=700%2C700'
        },
        {
          title: 'Awakened',
          image: 'https://i1.wp.com/www.metalinjection.net/wp-content/uploads/2012/09/As-I-Lay-Dying-Awakened1.jpg?fit=700%2C700'
        }
      ]
    }
  }


  render() {
   const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList 
          data={albums} 
          imageKey={'image'} 
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
