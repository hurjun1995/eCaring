import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 


export const AccSelect = ({navigation}) => {

    const pressGaurdian = () => {navigation.navigate('Gaurdian')} 
    const pressCaregiver = () => {navigation.navigate('Caregiver')}

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Select your credentials</Text>

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
    )
}; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FBFBFB'
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
    }

});