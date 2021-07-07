import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

export const Home = ({navigation}) => {
    const data = useSelector((state) => state.name)
    const titleName = (data) => {
        if(data === 'User' || data === ''){
            return ''
        } else {
            return `Hello, ${data}!`
        }
    }
    return(
            <View style={styles.content}> 
                <View style={styles.info}>
                    <Text style={styles.title}>{titleName(data)}</Text>
                    <Ionicons name="logo-react" size={170} color="#0fbe3b" />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#000'
    },
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
    image: {
        height: 170,
        width: 186
    }
})