import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const AddTodo = ({ todos, setTodos }) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val);
    }

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ]
            })
            setText('')
        } else {
            Alert.alert('OOPS!', 'Todos must be over 3 characters', [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ])
        }

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={(val) => changeHandler(val)}
                value={text}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='#3FA2F7' />
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    }
})