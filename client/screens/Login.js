import React from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native'; 


export const Login = ({navigation}) => {
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');

    const pressHandler = () => {
        navigation.navigate('Select')
    }

    return(
        <View style = {styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#ababab"
                onChangeText={(text) => setEmail(text)}
                value={email}
                color = '#ABABAB'
            />

            <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#ababab"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    color = '#ABABAB'
            />

            <TouchableOpacity style = {styles.button}>
                <View style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Log In</Text>
                </View>
            </TouchableOpacity>

                
            <Text style = {styles.footer}>Don't have an account?</Text>
            <TouchableOpacity 
                onPress={pressHandler}>
                <Text style = {styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}; 

const styles = StyleSheet.create({
    buttonText:{
        color:'white',
        fontSize: 15,
        lineHeight: 40
    },

    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    button:{
        position:'absolute',
        width: 130,
        height: 38,
        left: 142,
        top: 450,
        backgroundColor: '#83E1FF', 
        borderRadius: 19
    },
    input:{
        width: '85%',
        paddingLeft: 14,
        height: 38,
        left: 26,
        top: 306,
        marginRight: 60,
        marginVertical: 13,
        borderRadius: 9,
        borderColor: 'grey', 
        borderWidth: .5
    },  


    footer:{
        position: 'absolute',
        top: 600,
        fontSize: 12,
        left: 142,

    },
    signUpText:{
        top: 500,
        fontSize: 17,
        color: '#83E1FF',
        textDecorationLine: 'underline',
        left: 179,
    }

}); 
