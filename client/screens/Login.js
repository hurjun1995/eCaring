import React from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native'; 
import AuthService from '../api/authService'

export const Login = ({navigation}) => {
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');

    const pressHandler = () => {
        navigation.navigate('Select')
    }

    const signIn = () => {
        AuthService.signIn(email, password)
          .then(userCredential => {
            console.log('success')
          })
          .catch(error => {
            console.log(error.message)
          })
      }

    return(
        <View style = {styles.container}>

            <Image style={styles.logo} source={require('../assets/eCaring_logo-09.png')}/>
            <TextInput 
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#ababab"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#ababab"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
            />

            <TouchableOpacity 
                style = {styles.button}
                onPress={signIn}
                >
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
        lineHeight: 35,
        left: 43
    },

    button:{
        position:'absolute',
        width: 130,
        height: 38,
        left: 142,
        top: 500,
        backgroundColor: '#83E1FF', 
        borderRadius: 19
    },
    input:{
        width: '85%',
        paddingLeft: 14,
        height: 38,
        left: 26,
        top: 286,
        marginRight: 60,
        marginVertical: 13,
        borderRadius: 9,
        borderColor: 'grey', 
        borderWidth: .5,
        color: 'black'
    },  


    footer:{
        position: 'absolute',
        top: 700,
        fontSize: 15,
        left: 130,

    },
    signUpText:{
        top: 540,
        fontSize: 20,
        color: '#83E1FF',
        textDecorationLine: 'underline',
        left: 170,
    },
    logo:{
        width: 70,
        height: 65,
        resizeMode: 'stretch',
        left: 165,
        top: 280
    }

}); 
