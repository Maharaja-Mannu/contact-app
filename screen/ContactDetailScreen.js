import React from 'react'
import {View, Text, Button } from 'react-native'


export default class ContactDetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
    })
    render() {
        return (
            <View style={{flex:1, alignItems: 'center',paddingVertical: 20}}>
                <Text>{this.props.navigation.getParam('phone')}</Text>
                {/* <Button title="Go to Random Contact" onPress={() => _goToRandom() }/> */}
            </View>
        )
    }
    _goToRandom = () => {
        const contacts = this.props.screenProps.contacts;
        const phone = this.props.navigation.getParam('phone');
        let randomContact;
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random() * contacts.length)
            if (contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex]
            }
        }

        this.props.navigation.push('ContactDetail', {
            name: randomContact.name,
            phone: randomContact.phone
        })
    }
}