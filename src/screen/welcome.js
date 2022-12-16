import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.jpg'

const welcome = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern} />
            <Text style={styles.head}>hii</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    patternbg: {
        position:'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    head: {
        fontSize: '30',
        color: 'white',
    }

})
export default welcome;