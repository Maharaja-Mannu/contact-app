import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.contact}>
                <Text style={styles.text}>You are currently logged out</Text>
                <Button title="Press to login" onPress={ this._login } />
            </View>

        )
    }

    _login = () => {
        this.props.navigation.navigate('Main')
        // navigate to main navigator
    }
}

const styles = StyleSheet.create({
    contact: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})