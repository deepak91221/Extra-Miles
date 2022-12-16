import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native' 

function Index()
{
    return(
        <View style={styles.login}>
            <Text style={styles.baseText}>EXTRA MILES</Text>

            <Text>DOOR TO DOOR SERVICE</Text>
            
            <View style={styles.css}>
            <Text style={styles.base}>SIGN UP</Text>
            </View>
            <View style={styles.kmp}>
                <Text>Enter your number</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.ops}>
                <Text style={styles.ppt}>enter the OPT</Text>
                <TextInput style={styles.input}></TextInput>

            </View>
        </View>
        
        
    )
}
const styles=StyleSheet.create({
    login:{
        backgroundColor:'#BCE6FF',
        flex:'1',
        textAlign:'center',
        marginTop:20,
        
    },
    input:{
        borderWidth:2,
        height: 4,
        padding:10,
        borderRadius:8,
        backgroundColor: '#e7e7e7',
        marginLeft:30,

    },
    baseText:{
        fontWeight:'bold',
    },
    css:{
        marginTop:10,
    },
    css:{
    
        fontWeight:'bold',
        marginTop:30,
        fontSize:30,
    },
    base:{
        fontWeight:'bold',
        fontSize:40,
    },
    kmp:{
        marginRight:200,
        marginTop:70,
        
        
    },
    ops:{  marginRight:200,
        marginTop:70,
    },
    ppt:{
        marginLeft:1,
    }

 
})

export default Index;