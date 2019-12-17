import React, {Component} from 'react'
import {SectionList, Text} from 'react-native'
import propTypes from 'prop-types'
import Row from './Row'

const renderSectionHeader = obj => <Text style={{fontWeight: 'bold'}}>{obj.section.title}</Text>

const ContactsList = props => {
    
    const renderItem = obj => <Row {...(obj.item)} onSelectContact={contact => props.onSelectContact(contact)}/>

    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
            
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
            keyExtractor={(item, index) => index}
        />
    )
}

ContactsList.propTypes = {
    renderItem: propTypes.func,
    renderSectionHeader: propTypes.func,
    contacts: propTypes.array,

}

export default ContactsList