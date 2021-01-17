import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

import CaregiverService from '../api/caregiverService'
import AuthService from '../api/authService'

export const Patient = ({navigation}) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passVerify, setPassVerify] = React.useState('');
    const [placeOfWork, setPlaceOfWork] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [selAvatar1, setSelAvatar1] = React.useState(false);
    const [selAvatar2, setSelAvatar2] = React.useState(false);
    const [selAvatar3, setSelAvatar3] = React.useState(false);
    const [selAvatar4, setSelAvatar4] = React.useState(false);
    const [selAvatar5, setSelAvatar5] = React.useState(false);
    const [selAvatar6, setSelAvatar6] = React.useState(false);
    const [selAvatar7, setSelAvatar7] = React.useState(false);
    const [selAvatar8, setSelAvatar8] = React.useState(false);
    const [avatarState, setAvatarState] = React.useState(0);

    const backButton = () => { navigation.pop()};

    const signUp = () => {
        AuthService.createUser(email, password)
          .then(userCredential => {
            console.log(userCredential.user.email)
          })
          .catch(error => {
            console.log(error.message)
          })
      }

    const createCaregiver = () => {
        CaregiverService.create(firstName, lastName, placeOfWork, education)
        .then(caregiver =>{
            console.log(caregiver.toString())
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const registerUser = () => {
        if (passVerify == password) {
            signUp();
            createCaregiver();
          } else {
            console.log('passwords dont match')
          }
    }

    const changeAvatar1 = () => { setSelAvatar1(true); setAvatarState(1), console.log(avatarState)}
    const changeAvatar2 = () => { setSelAvatar2(true); setAvatarState(2), console.log(avatarState)}
    const changeAvatar3 = () => { setSelAvatar3(true); setAvatarState(3), console.log(avatarState)}
    const changeAvatar4 = () => { setSelAvatar4(true); setAvatarState(4), console.log(avatarState)}

    return(
        <View style={{backgroundColor:"#FBFBFB"}}>
            <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                <Icon name="navigate-before"/>
            </TouchableOpacity>

            <View style = {styles.container}>
                <Text style = {styles.title}>Caregiver Profile </Text>
                    <Text style = {styles.subTitle}>AVATAR</Text>

                    <View style={styles.avatarContainer}>

                        <TouchableHighlight onPress = {() => changeAvatar1()}>
                            <Image
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar1 === true ? 3 : 1,
                                    borderRadius: 100,
                                    borderColor: '#C7D6FF',
                                    width: 70,
                                    height: 70,
                                    resizeMode: 'stretch'
                                    }}
                                    source={require('../assets/nurse_icon_1.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => changeAvatar2()}>
                            <Image
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar2 === true ? 3 : 1,
                                    borderRadius: 100,
                                    borderColor: '#C7D6FF',
                                    width: 70,
                                    height: 70,
                                    resizeMode: 'stretch'
                                    }}
                                    source={require('../assets/nurse_icon_2.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => changeAvatar3()}>
                            <Image
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar3 === true ? 3 : 1,
                                    borderRadius: 100,
                                    borderColor: '#C7D6FF',
                                    width: 70,
                                    height: 70,
                                    resizeMode: 'stretch'
                                    }}
                                    source={require('../assets/nurse_icon_3.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => changeAvatar4()}>
                            <Image
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar4 === true ? 3 : 1,
                                    borderRadius: 100,
                                    borderColor: '#C7D6FF',
                                    width: 70,
                                    height: 70,
                                    resizeMode: 'stretch'
                                    }}
                                    source={require('../assets/nurse_icon_4.png')}/>
                        </TouchableHighlight>
                    </View>

                    <KeyboardAwareScrollView>
                        <Text style = {styles.subTitle}>INFORMATION</Text>
                        <TextInput
                                style={styles.input}
                                placeholder='First Name'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setFirstName(text)}
                                value={firstName}
                                color = 'black'
                        />
                        <TextInput
                                style={styles.input}
                                placeholder='Last Name'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setLastName(text)}
                                value={lastName}
                                color = 'black'
                        />
                    </KeyboardAwareScrollView>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {registerUser}>
                        <View style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>Create</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        lineHeight: 40,
        left: 27,
        top: 10,
        color: '#515C77'
    },
    subTitle:{
        fontSize: 12,
        lineHeight: 18,
        color: '#8A8A8A',
        left: 27,
        paddingVertical: 14
    },
    container:{
        backgroundColor: '#FBFBFB',
        flex: 1
    },
    input:{
        width: '85%',
        paddingLeft: 14,
        height: 38,
        left: 26,
        marginRight: 60,
        borderRadius: 9,
        marginVertical: 9,
        fontSize: 15,
        backgroundColor:"#fff",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        fontWeight:"600",
    },
    avatar:{
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#C7D6FF',
        resizeMode: 'stretch',
        width: 60,
        height: 60,
    },
    avatarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:"80%",
        left: '5%'
    },
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
        top: 450,
        backgroundColor: '#83E1FF',
        borderRadius: 19,
        left: 140,
        top: 670
    },
    backButton:{
        top: 60,
        left: -170
    },
    container:{
        top: 50
    }
})
