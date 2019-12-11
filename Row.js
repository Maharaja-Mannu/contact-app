import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
})

const Row = props => (
    <TouchableOpacity style={styles.row} onPress={() => {
        props.onSelectContact(props)
    }}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </TouchableOpacity>
)

export default Row