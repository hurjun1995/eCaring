import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export const LogDisplay = ({navigation, route}) => {
    const log = route?.params?.log;

    const getDate = () => {
        const month = log.key.toLocaleString('default', { month: 'long' });
        const day = log.key.getDate();
        const year = log.key.getFullYear();
        return(
            <Text style={{fontWeight:"600", fontSize:12, color:"#ABABAB", textAlign:"center"}}>{month} {day}, {year}</Text>
        );
    };

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#EAD9FF', '#C9F2FF', '#FFFFFF']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '40%',
                    flex: 1,
                }}
            />
            <TouchableOpacity style={{position:"absolute", left:24, top:66}} onPress={() => {navigation.pop()}}>
                <Icon name="navigate-before" color="#515C77"/>
            </TouchableOpacity>
            <Text style={{color: "#515C77", fontWeight:"500", fontSize:20, position:"absolute", top:70}}>Jane's Wellness</Text>
            <View style={styles.logDisplay}>
                <ScrollView style={{padding:31}} showsVerticalScrollIndicator={false}>
                    {getDate()}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    logDisplay: {
        backgroundColor: '#fff',
        height: 999,
        width:"100%",
        position:"absolute",
        top:120,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    box: {
        backgroundColor: "#FBFBFB",
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});

