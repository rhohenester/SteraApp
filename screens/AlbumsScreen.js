import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Card, Text, Button } from 'react-native-elements';

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

  renderAlbums(){
    const { albums } = this.state;

    return albums.map((album, index) => {
      return(
        <Card
          key = {index}
          title={album.title}
          image={{uri: album.image}}
          >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      )
    })
  }

  render() {
   

    return (
      <ScrollView style={styles.container}>
       { this.renderAlbums() }
        
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
