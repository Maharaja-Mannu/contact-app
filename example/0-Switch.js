import React from 'react'
import { View, Button, } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

class ScreenComponentOne extends React.Component {
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    alignItem: 'center',
                    justifyContent: 'center',
                    borderWidth: 25,
                    borderColor: 'teal',
                }}>
                <Button title="Go to screen two" onPress={() => {
                    this.props.navigation.navigate('RouteNameTwo')
                }} />
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItem: 'center',
                    justifyContent: 'center',
                    borderWidth: 25,
                    borderColor: 'Orange',
                }}>
                <Button title="Go to screen one" onPress={() => {
                    this.props.navigation.navigate('RouteNameOne')
                }}/>
            </View>
        )
    }
}


const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo
})

export default class App extends React.Component {
    render() {
        return <AppNavigator />
    }
}