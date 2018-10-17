import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import * as actions from 'actions';

export default class AlbumDetailsScreen extends React.Component{
    static navigationOptions = {
        title: 'Album Details',
    };

    constructor(){
        super();
        this.state = {
            tracks: []
        }
    }

    componentDidMount(){
        const album = this.props.navigation.getParam('album', {});
        actions.getAlbumTracks(album.id).then(
        tracks => {
           this.setState({ tracks })
        }).catch( err => console.log(err))
    }
    render(){
        const album = this.props.navigation.getParam('album', {});
        return(
            <ScrollView>
                <View>
                    <Text>
                       {album.title}
                    </Text>
                </View>
            </ScrollView>
        )
    }
 
}
