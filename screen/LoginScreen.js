import React from 'react'
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import {login} from '../api'
export default class LoginScreen extends React.Component {

    state = {
        username: '',
        password: '',

    }

    handleUsernameUpdate = username => {
        this.setState({username})
    }

    handlePasswordUpdate = password => {
        this.setState({password})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.state.err}</Text>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameUpdate}
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordUpdate}
                    secureTextEntry
                    />
                <Button title="Login" color='purple' onPress={ this._login } />
            </View>

        )
    }

    _login =  async () => {
        try {
            const success = await login(this.state.username, this.state.password)
            this.props.navigation.navigate('Main')
        } catch(err) {
            const errMessage = err.message
            this.setState({err: errMessage})
        }       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 6
    },
    text: {
        fontSize: 20
    },
    error: {
        textAlign: 'center',
        color: 'red',
    }, 
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,

    },
})