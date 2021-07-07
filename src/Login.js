import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { setData } from './AsyncStoraGe/setData';
import { useDispatch } from 'react-redux';
import { rename } from './store/actions';

export const Login = ({navigation}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const user = '12345'

    const obj = {
        username: 'Admin',
        password: '12345'
    }

    const obj1 = {
        username: name,
        password: password
    }

    function login() {
        if(JSON.stringify(obj) === JSON.stringify(obj1)){
           return setData(user, obj1)
        } else {
            return alert('Не верный пороль или имя')
        }
    }

    const dispatch = useDispatch()
    dispatch(rename(name))
    return(
            <View style={styles.content}> 
                <View style={styles.container}>
                    <EvilIcons name="user" size={170} color="#0fbe3b" />
                    <View style={styles.inputs}>
                        <TextInput 
                        style={styles.input}
                        placeholder={'Name'}
                        value={name}
                        onChangeText={text => setName(text)}
                        />
                        <TextInput 
                        style={styles.input}
                        placeholder={'Password'}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        />
                    </View> 
                    <TouchableOpacity 
                    onPress={() => login() & navigation.navigate('Login')}
                    style={styles.buttons}>
                        <Text style={styles.text}>Вход</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputs: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: 1,
        width: '90%'
    },
    info: {
        height: '90%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        height: '10%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopColor: '#0fbe3b',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttons: {
        width: '90%',
        backgroundColor: '#0fbe3b',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})