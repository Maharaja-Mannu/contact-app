import React from 'react'
import {StyleSheet, Button, TextInput, View, KeyboardAvoidingView} from 'react-native'
import propTypes from 'prop-types'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        minWidth: 100,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,

    },

})

export default class AddContactFrom extends React.Component {
    static propTypes = {
        addContact: propTypes.func,

    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,

    }
    getHandler = key =>  val => {
        this.setState({[key]: val})
    }

    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
            this.setState({ phone })
        }
        
    }

    validateForm = () => {
        const names = this.state.name.split(' ')
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0] && names[1]) {
            return this.setState({isFormValid: true})
        } else {
            return this.setState({isFormValid: false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.getHandler('name')}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.handlePhoneChange}
                    keyboardType="numeric"
                    placeholder="Phone"
                />
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </KeyboardAvoidingView>
            
        )
    }
}