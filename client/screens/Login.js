import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import AuthService from '../api/authService'

export const Login = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const pressHandler = () => {
        navigation.navigate('Select')
    }

    const toDash = () => {
        navigation.navigate('DashboardStack')
    }

    const signIn = () => {
        AuthService.signIn(email, password)
          .then(userCredential => {
            toDash()
            console.log('success')
          })
          .catch(error => {
            console.log(error.message)
          })
      }

    return(
        <View style = {styles.container}>

            <Image source={require('../assets/lady4.png')} style={{position: "absolute",
                width: 200,
                height: 210,
                top: 90,
                left: 125,}}/>
            <Image source={require('../assets/man1.png')} style={{position: "absolute",
                width: 200,
                height: 210,
                top: 90,
                right: 0,}}/>
            <Image style={styles.logo} source={require('../assets/eCaring_logo-09.png')}/>
            <View style={styles.inputBox}>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#ababab"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            </View>

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
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
    },
    buttonText:{
        color:'white',
        fontSize: 15,
        lineHeight: 35,
        left: 43,
        fontWeight:"600"
    },

    button:{
        position:'absolute',
        width: 130,
        height: 38,
        top: 535,
        backgroundColor: '#83E1FF',
        borderRadius: 19,
        alignSelf: "center"
    },
    input:{
        width: '85%',
        paddingLeft: 14,
        height: 38,
        left: 26,
        top: 320,
        marginRight: 60,
        marginVertical: 13,
        borderRadius: 9,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        fontWeight:"600",
        fontSize:15
    },


    footer:{
        position: 'absolute',
        top: 700,
        fontSize: 12,
        color:"#4B4B4B",
        fontWeight:"400",
        alignSelf:"center"
    },
    signUpText:{
        top: 535,
        fontSize: 17,
        color: '#83E1FF',
        textDecorationLine: 'underline',
        alignSelf:"center",
        fontWeight:"600"
    },
    logo:{
        width: 65,
        height: 65,
        top: 310,
        alignSelf: "center"
    }

});
