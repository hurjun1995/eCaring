import React, {Fragment}  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import GuardianService from '../api/guardianService'
import AuthService from '../api/authService'

export const Gaurdian = ({navigation}) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passVerify, setPassVerify] = React.useState('');
    const [friendCode, setFriendCode] = React.useState('');
    const backButton = () => { navigation.pop()};

    const createGuardian = async () => {
        try {
          const guardian = await GuardianService.create(firstName, lastName, parseInt(friendCode))
          setMessage(guardian.toString())
        } catch (error) {
          setMessage(error.message)
        }
    }

    const signUp = () => {
        AuthService.createUser(email, password)
          .then(userCredential => {
            console.log(userCredential.user.email)
          })
          .catch(error => {
            console.log(error.message)
          })
      }


    const registerUser = () => {
        if (passVerify == password) {
            signUp(); 
            createGuardian();
            } else {
                console.log('passwords dont match')
            }
    }

    return(
        <View style={{backgroundColor:"#FBFBFB", height:"100%"}}>
                <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                        <Icon name="navigate-before"/>
                </TouchableOpacity>
                <View style = {styles.container}>
                    <Text style = {styles.title}>Gaurdian Profile </Text>
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
                                    placeholder='E-mail Address'
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
                                    secureTextEntry={true}
                                    value={password}
                                    color = 'black'
                            />
                            <TextInput
                                    style={styles.input}
                                    placeholder='Confirm Password'
                                    placeholderTextColor="#ababab"
                                    onChangeText={(text) => setPassVerify(text)}
                                    secureTextEntry={true}
                                    value={passVerify}
                                    color = 'black'
                            />
                            <Text style = {styles.subTitle}>VERIFICATION</Text>
                            <Text style = {styles.verifyExplain}> Get in contact with the long term care nurse to generate a Friend Code</Text>
                            <TextInput
                                    style={styles.Code}
                                    placeholder='Enter Friend Code'
                                    placeholderTextColor="#ababab"
                                    onChangeText={(text) => setFriendCode(text)}
                                    keyboardType="number-pad"
                                    value={friendCode}
                                    color = 'black'
                            />
                            <Text style={{textAlign: 'center'}}> Enter 4-Digit code above</Text>
                            {/* <SafeAreaView style={styles.root}>
                                <CodeField
                                    ref={ref}
                                    {...props}
                                    value={friendCode}
                                    onChangeText={setFriendCode}
                                    cellCount={4}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({index, symbol, isFocused}) => (
                                        <Fragment key={index}>
                                            <Text
                                            key={`value-${index}`}
                                            onLayout={getCellOnLayoutHandler(index)}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        </Fragment>
                                    )}

                                />
                            </SafeAreaView> */}


                        </KeyboardAwareScrollView>

                </View>
                <TouchableOpacity style = {styles.button} onPress={registerUser}>
                        <View style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>Submit</Text>
                        </View>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        lineHeight: 40,
        left: 27,
        color: '#515C77'
    },cell: {
        width: 25,
        height: 30,
        lineHeight: 28,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#00000030',
        textAlign: 'center',
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
        fontWeight:"600"
    },
    buttonText:{
        color:'white',
        fontSize: 15,
        lineHeight: 40,
        fontWeight:"600"
    },

    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    button:{
        position:'absolute',
        width: 130,
        height: 38,
        top: 400,
        backgroundColor: '#83E1FF',
        borderRadius: 19,
        left: 140,
        top: 620
    },
    verifyExplain:{
        textAlign: 'center',
        paddingHorizontal: 30,
        fontSize: 12
    },
    box:{
        width: 70,
        paddingLeft: 14,
        height: 90,
        borderRadius: 9,
        marginVertical: 9,
        borderColor: 'grey',
        borderWidth: .5,
        fontSize: 40,
        textAlign: 'center',
        borderBottomWidth: 2,
        paddingRight: 20

    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:"80%",
        left: '5%',
    },
    backButton:{
        top: 60,
        left: -170
    },
    container:{
        top: 70
    },
    Code:{
        width: '45%',
        paddingLeft: 14,
        height: 38,
        left: 120,
        marginRight: 60,
        borderRadius: 9,
        marginVertical: 9,
        borderColor: 'grey',
        borderWidth: .5,
        textAlign: 'center'
    }
})
