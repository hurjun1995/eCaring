import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Image} from 'react-native'; 
import { Icon } from 'react-native-elements'


export const Caregiver = ({navigation}) => {
    const [firstName, setFirstName] = React.useState(''); 
    const [lastName, setLastName] = React.useState(''); 
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [placeOfWork, setPlaceOfWork] = React.useState('');
    const [education, setEducation] = React.useState('');
    const backButton = () => { navigation.pop()};

    return(
        <View>
            <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                <Icon name="navigate-before"/>
            </TouchableOpacity>

            <View style = {styles.container}>
                <Text style = {styles.title}>Caregiver Profile </Text>
                    <Text style = {styles.subTitle}>AVATAR</Text>

                    <View style={styles.avatarContainer}>
                        <TouchableHighlight>
                            <Image style={styles.avatar} source={require('../assets/nurse_1.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <Image style={styles.avatar} source={require('../assets/nurse_1.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <Image style={styles.avatar} source={require('../assets/nurse_1.png')}/>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <Image style={styles.avatar} source={require('../assets/nurse_1.png')}/>
                        </TouchableHighlight>
                    </View>
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
                    <TextInput 
                            style={styles.input}
                            placeholder='Confirm Password'
                            placeholderTextColor="#ababab"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            color = '#ABABAB'
                    />
                    <Text style = {styles.subTitle}>VERIFICATION</Text>
                    <TextInput 
                            style={styles.input}
                            placeholder='Place of Work'
                            placeholderTextColor="#ababab"
                            onChangeText={(text) => setEducation(text)}
                            value={placeOfWork}
                            color = '#ABABAB'
                    />
                    <TextInput 
                            style={styles.input}
                            placeholder='Education'
                            placeholderTextColor="#ababab"
                            onChangeText={(text) => setPassword(text)}
                            value={education}
                            color = '#ABABAB'
                    />
                    <TouchableOpacity style = {styles.button}>
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
        borderWidth: .5
    },
    avatar:{
        paddingHorizontal: 20,
        borderWidth: 1, 
        borderColor: 'black',
        borderRadius: 100,
        borderColor: '#C7D6FF',
        
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