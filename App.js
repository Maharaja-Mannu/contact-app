// import Example from './example/0-Switch'
// export default Example;

import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import AddContactScreen from './screen/AddContactScreen';
import ContactListScreen from './screen/ContactListScreen';
import ContactDetailScreen from './screen/ContactDetailScreen';
import LoginScreen from './screen/LoginScreen'
import SettingScreen from './screen/SettingScreen'
import contacts from './contacts'
import {Ionicons } from 'react-native-vector-icons'
import {fetchUsers} from './api'


const ContactTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetail: ContactDetailScreen,
}, {
  initialRouteName: 'ContactList',
})

ContactTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-contacts"
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createBottomTabNavigator({
  Contact: ContactTab,
  Setting: SettingScreen,
},{
  tabBarOptions: {
    activeTintColor: 'seagreen',
  }
})

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen
}, {
  initialRouteName: 'Main',
})

export default class App extends React.Component {
  state = {
    contacts
  }

  // using api
  // componentDidMount() {
  //   this.getUsers()
  // }

  // getUsers = async () => {
  //   const results = await fetchUsers()
  //   this.setState({contacts: results})
  // }
  
  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact]}))
  }

  render() {
    return <AppNavigator screenProps={{contacts: this.state.contacts, addContact: this.addContact}}/>
  }
}
