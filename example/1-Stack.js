import React from 'react'
import { View,Text, Button, } from 'react-native'
import { createStackNavigator } from 'react-navigation'

function randomNumber() {
    return Math.floor(Math.random() * 10)
}

class ScreenComponentOne extends React.Component {

    static navigationOptions = {
        headerTitle: 'Screen the first',
        headerTintColor: 'teal',
        

    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'teal'
                }}>
                <Button 
                    title="Go to screen two" 
                    onPress={() => {
                        this.props.navigation.navigate('RouteNameTwo')
                    }}
                    color='black'
                />
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    static navigationOptions = ({navigation}) => {

        return {
            headerTitle: 'Screen the second',
            headerTintColor: 'orange',
            headerRight: <Button title="Press me" 
                onPress={() => navigation.navigate('RouteNameThree', {number: 11})} 
            />
        }
        

    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'orange'
                }}>
                <Button title="Go to screen three" onPress={() => {
                    this.props.navigation.navigate('RouteNameThree', {
                        number: randomNumber()
                    })
                }} />
            </View>
        )
    }
}

class ScreenComponentThree extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Number: ${navigation.getParam('number')}`

        }
        
    }

    
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'purple'
                }}>
                <Text style={{fontSize: 25}}>{this.props.navigation.getParam('number')}</Text>
                
                <Button title="New Number" onPress={() => {
                    this.props.navigation.setParams({number:randomNumber()})
                }} />
                <Button title="Go back" onPress={() => {
                    this.props.navigation.goBack()
                }} />
            </View>
        )
    }
}


const AppNavigator = createStackNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
    "RouteNameThree": ScreenComponentThree
})

export default class App extends React.Component {
    render() {
        return <AppNavigator />
    }
}