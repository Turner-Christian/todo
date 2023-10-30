import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    const [isComplete, setIsComplete] = useState(false)

    const handleNote = () => {
        isComplete ?
            setIsComplete(false) :
            setIsComplete(true)
    }

    return (
        <TouchableOpacity onPress={handleNote}>
            <View
                style={isComplete? styles.itemComplete: styles.item}
            >
                <Text style={styles.itemText}>{item.text}</Text>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <MaterialIcons style={styles.icon} name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#3FA2F7',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemComplete: {
        padding: 16,
        marginTop: 16,
        borderColor: '#C5FFCB',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemText: {
        marginLeft: 20,
        paddingHorizontal: 5,
    },

    icon: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f7f7f7'
    },
})