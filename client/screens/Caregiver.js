import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Image} from 'react-native'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

import CaregiverService from '../api/caregiverService'
import AuthService from '../api/authService'

export const Caregiver = ({navigation}) => {
    const [firstName, setFirstName] = React.useState(''); 
    const [lastName, setLastName] = React.useState(''); 
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [passVerify, setPassVerify] = React.useState(''); 
    const [placeOfWork, setPlaceOfWork] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [selAvatar, setSelAvatar ] = React.useState(false);

    const authService = new AuthService()

    const backButton = () => { navigation.pop()};    

    const signUp = () => {
        authService.createUser(email, password)
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
    const changeStyle = () => {
        if (selAvatar) {
            setSelAvatar(false)
        } else {
            setSelAvatar(true)
        }
    }



    return(
        <View>
            <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                <Icon name="navigate-before"/>
            </TouchableOpacity>

            <View style = {styles.container}>
                <Text style = {styles.title}>Caregiver Profile </Text>
                    <Text style = {styles.subTitle}>AVATAR</Text>

                    <View style={styles.avatarContainer}>

                        <TouchableHighlight onPress = {() => setSelAvatar(true)}>
                            <Image 
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar === true ? 3 : 1, 
                                    borderRadius: 100, 
                                    borderColor: '#C7D6FF'}} 
                                    source={require('../assets/nurse4.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => setSelAvatar(true)}>
                            <Image 
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar === true ? 3 : 1, 
                                    borderRadius: 100, 
                                    borderColor: '#C7D6FF'}} 
                                    source={require('../assets/nurse4.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => setSelAvatar(true)}>
                            <Image 
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar === true ? 3 : 1, 
                                    borderRadius: 100, 
                                    borderColor: '#C7D6FF'}} 
                                    source={require('../assets/nurse4.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight onPress = {() => setSelAvatar(true)}>
                            <Image 
                                style={styles.avatar} style = {
                                    {borderWidth: selAvatar === true ? 3 : 1, 
                                    borderRadius: 100, 
                                    borderColor: '#C7D6FF'}} 
                                    source={require('../assets/nurse4.png')}/>
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
                        <TextInput 
                                style={styles.input}
                                placeholder='E-mail'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                color = 'black'
                        />
                        <TextInput 
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                secureTextEntry={true}
                                color = 'black'
                        />
                        <TextInput 
                                style={styles.input}
                                placeholder='Confirm Password'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setPassVerify(text)}
                                value={passVerify}
                                secureTextEntry={true}
                                color = 'black'
                        />
                        <Text style = {styles.subTitle}>VERIFICATION</Text>
                        <TextInput 
                                style={styles.input}
                                placeholder='Place of Work'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setPlaceOfWork(text)}
                                value={placeOfWork}
                                color = 'black'
                        />

                        <TextInput 
                                style={styles.input}
                                placeholder='Education'
                                placeholderTextColor="#ababab"
                                onChangeText={(text) => setEducation(text)}
                                value={education}
                                color = 'black'
                        />
                    </KeyboardAwareScrollView>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {registerUser}>
                        <View style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>Log In</Text>
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
        borderColor: 'grey', 
        borderWidth: .5,
        fontSize: 15 
    },
    avatar:{
        paddingHorizontal: 20,
        borderWidth: 1, 
        borderRadius: 100,
        borderColor: '#C7D6FF',
        resizeMode: 'stretch',
        width: 60,
        height: 60
    },
    avatarPressed:{
        paddingHorizontal: 20,
        borderWidth: 6, 
        borderColor: 'black',
        borderRadius: 100,
        borderColor: '#C7D6FF',
        resizeMode: 'stretch',
        width: 60,
        height: 60
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