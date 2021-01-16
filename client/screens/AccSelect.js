import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'; 
import { Icon } from 'react-native-elements'


export const AccSelect = ({navigation}) => {

    const pressGaurdian = () => {navigation.navigate('Gaurdian')};
    const pressCaregiver = () => {navigation.navigate('Caregiver')};
    const backButton = () => { navigation.pop()};
    return(
        <View >
            <TouchableOpacity style={styles.backButton} onPress = {backButton}>
                <Icon name="navigate-before"/>
            </TouchableOpacity>
            <View style = {styles.container}>
                <Text style = {styles.title}>Select your credentials.</Text>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {pressGaurdian}>
                    <Text style = {styles.buttonText}>Gaurdian</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {pressCaregiver}
                    >
                    <Text style = {styles.buttonText}>Caregiver</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
        top: 50
    },
    buttonText:{
        color:'white',
        fontSize: 15, 
    },
    button:{
        backgroundColor: '#83E1FF', 
        width: 197,
        height: 38,
        marginRight: 30,
        marginLeft: 30,
        top: 275,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title:{
        position: 'absolute',
        fontSize: 12,
        lineHeight: 18,
        top:250,
    }, 
    backButton:{
        top: 60, 
        left: -170
    }
});