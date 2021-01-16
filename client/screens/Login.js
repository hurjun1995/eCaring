import React from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'; 

export const Login = () => {
    const [value, onChangeText] = React.useState('Email'); 

    return(
        <View style = {styles.container}>
            <View> 
                </View>
                <TextInput 
                    placeholder = "E-mail"
                    style = {styles.input} 
                    placeholderTextColor="#ABABAB"
                />
                
                <TextInput 
                    style = {styles.input} 
                    onChangeText = {text => onChangeText(text)}
                    value = {value}
                />

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                
                <Text style = {styles.footer}>Don't have an account?</Text>
                <TouchableOpacity style = {styles.signUp}>
                    <Text style = {styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
        </View>
    )
}; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    buttonText:{
        color:'white',
        fontSize: 15, 
    },
    button:{
        backgroundColor: '#83E1FF', 
        width: 130,
        height: 40,
        marginRight: 30,
        marginLeft: 30,
        top: 400,
        borderRadius: 20,
        alignItems: 'center', 
        justifyContent: 'center',

    },
    input:{
        width: 329,
        height: 38,
        left: 26,
        margin: 13,
        borderWidth: 1,
        shadowOffset:{width:0, height: 10,},
        shadowColor: 'black', 
        shadowOpacity: .5,
    },  

    shadow:{
        shadowOffset:{width: 10, height: 10,},
        shadowColor: 'black', 
        shadowOpacity: .5,
    },
    header:{
        width: '100%', 
        height: 90, 
        padding: 36, 
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black', 
        fontSize: 18
    },
    footer:{
        marginTop: 500
    },
    signUpText:{
        textDecorationLine: 'underline',
        color: '#83E1FF',
        paddingTop: 10,
        fontSize: 17
    }

}); 
