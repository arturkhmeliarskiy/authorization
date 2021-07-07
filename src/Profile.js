import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { clearData } from './AsyncStoraGe/clearData ';

export const Profile = ({navigation}) => {
    const user = '12345'
    return(
            <View style={styles.content}> 
            <View style={styles.info}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <EvilIcons name="user" size={240} color="#0fbe3b" />
                </TouchableOpacity>   
                <TouchableOpacity 
                onPress={() => clearData(user)}
                style={styles.button}>
                    <Text style={{color: '#fff'}}>Выход</Text>
                </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    info: {
        height: '100%',
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
    button: {
        height: 30,
        width: 90,
        backgroundColor: '#0fbe3b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})