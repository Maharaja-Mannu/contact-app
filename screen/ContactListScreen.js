import React from 'react'
import {StyleSheet, View, Button, } from 'react-native'
import ContactsList from '../ContactsList';

export default class ContactListScreen extends React.Component {
    
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Contacts',
        headerStyle: {
            backgroundColor: 'seagreen',
            paddingRight: 6,
        },
        headerRight: <Button title="Add" onPress={() => {navigation.navigate('AddContact')}} color='green'/>,
        headerTintColor: 'white'

    })
    state = {
        showContacts: true,
    }

    render() {
        return (
            <View style={styles.container}>
                
                {this.state.showContacts ? (
                    <ContactsList
                        contacts={this.props.screenProps.contacts}
                        onSelectContact={ contact => {
                            this.props.navigation.navigate('ContactDetail', {
                                phone: contact.phone,
                                name: contact.name
                            })
                        }}
                    />
                ) : null
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    }
});