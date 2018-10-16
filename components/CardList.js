import React from 'react';
import { Card, Text, Button } from 'react-native-elements';

export class CardList extends React.Component {
    renderAlbums(){
    const { data, imageKey, titleKey, buttonText } = this.props;

    return data.map((item, index) => {
        return(
            <Card
                key = {index}
                title={item[titleKey]}
                image={{uri: item[imageKey]}}
                >
                <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title={buttonText} />
            </Card>
            )
        })
    }

  render() {
    return this.renderAlbums();
  }
}
