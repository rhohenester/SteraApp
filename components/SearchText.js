import React from 'react';
import { Text, Stylesheet } from 'react-native';
import { FormLabel, FormInput, Button, FormValidation, Divider } from 'react-native-elements';

export class SearchText extends React.Component {

    constructor(){
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.input.focus();
    }

    onSubmitSearch(){
        const { SubmitSearch } = this.props;
        SubmitSearch(this.state.value)
    }

    onChange(value){
        this.setState({value});
    }


    render(){
        return (
            <React.Fragment>
                <FormLabel containerStyle={styles.center}>Search an artist</FormLabel>
                <FormInput ref={input => this.input = input} onChangeText={(event) => this.onChange(event) }/>
                <FormValidationMessage></FormValidationMessage>
                <Button title='Search' onPress={() => this.onSubmitSearch()}/>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        alignImages: 'center'
    }
})