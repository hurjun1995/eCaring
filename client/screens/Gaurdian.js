import React from 'react'; 
import { render } from 'react-dom';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'; 
import { Icon } from 'react-native-elements'

export const Gaurdian = ({navigation}) => {
    const [firstName, setFirstName] = React.useState(''); 
    const [lastName, setLastName] = React.useState(''); 
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [placeOfWork, setPlaceOfWork] = React.useState('');
    const [education, setEducation] = React.useState('');
    const backButton = () => { navigation.pop()};
    return(
        <View >
                <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                        <Icon name="navigate-before"/>
                </TouchableOpacity>
                <View style = {styles.container}>
                <Text style = {styles.title}>Gaurdian Profile </Text>
                <Text style = {styles.subTitle}>INFORMATION</Text>
                <TextInput 
                        style={styles.input}
                        placeholder='First Name'
                        placeholderTextColor="#ababab"
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        color = '#ABABAB'
                />
                <TextInput 
                        style={styles.input}
                        placeholder='Last Name'
                        placeholderTextColor="#ababab"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        color = '#ABABAB'
                />
                <TextInput 
                        style={styles.input}
                        placeholder='E-mail Address'
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
                <TextInput 
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor="#ababab"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        color = '#ABABAB'
                />
                <Text style = {styles.subTitle}>VERIFICATION</Text>
                <Text style = {styles.verifyExplain}> Get in contact with the long term care nurse to generate a Friend Code</Text>

                <View style = {styles.boxContainer}> 
                    <TextInput style={styles.box}/>
                    <TextInput style={styles.box}/>
                    <TextInput style={styles.box}/>
                    <TextInput style={styles.box}/>
                </View>
                <Text style={{textAlign: 'center'}}> Enter 4-Digit code above</Text>
                <TouchableOpacity style = {styles.button}>
                    <View style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Submit</Text>
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
        borderWidth: .5
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
        top: 60
    }
})