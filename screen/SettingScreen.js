import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
                name="ios-options"
                size={25}
                color={tintColor}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Setting Screen </Text>
                
            </View>

        )
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})