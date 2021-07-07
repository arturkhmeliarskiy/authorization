import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const News = ({navigation}) => {
     
    return(
            <View style={styles.content}> 
                <View style={styles.info}>
                    <Ionicons name="ios-newspaper-outline" size={170} color="#0fbe3b" />
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
    image: {
        height: 170,
        width: 186
    }
})