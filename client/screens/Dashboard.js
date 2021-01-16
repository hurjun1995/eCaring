import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from '../components/Logo';
import { Avatar, Icon } from "react-native-elements";

export const Dashboard = ({navigation}) => {
    const profile = (
        <View style={styles.profile}>
            <Avatar rounded source={require("../assets/nurse2.png")} size={65} avatarStyle={{borderWidth: 3, borderColor: '#C7D6FF'}}/>
            <Text style={styles.profileText}>You will be assisting Jane today</Text>
            <View style={styles.buttonContainer}>
                <Icon reverse color="#83E1FF" size={18} name="group-add"/>
                <View style={{marginLeft: -7, marginRight:-7}}>
                    <Icon reverse color="#83E1FF" size={18} name="leaderboard"/>
                </View>
                <Icon reverse color="#83E1FF" size={18} name="chat"/>
            </View>
        </View>
    );

    const dayRow = () => {
        return (
            <View style={styles.dayRow}>
                <Text>14</Text>
                <Text>THU</Text>
                <Text>Jane is feeling great!</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#C7D6FF', '#EAD9FF', '#FFFFFF']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '30%',
                    flex: 1,
                }}
            />
            <View style={styles.logo}>
                <Logo/>
            </View>
            <Image source={require("../assets/lady2.png")} style={styles.patientImg}/>
            {profile}
            <View style={styles.textBox}>
                <Text style={{fontSize:12, fontWeight:"500", paddingBottom:3}}>Hi John, here are</Text>
                <Text style={{fontSize:25, fontWeight:"500"}}>Jane's Days</Text>
            </View>
            <TouchableOpacity style={styles.addLogButton} onPress={() => navigation.navigate('LogForm')}>
                <Icon name="add" color="#fff"/>
            </TouchableOpacity>
            <ScrollView style={{position:"absolute", top:380, width:375, height: 600}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:10}}>
                    <Text style={{width: 63, textAlign: 'center', color:'#7B7D7D', fontWeight:"600", fontSize:10}}>JANUARY</Text>
                    <View style={{flex: 1, height: 0.5, backgroundColor: '#C4C4C4'}} />
                </View>
                {dayRow()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    logo: {
        position: "absolute",
        top: 0
    },
    patientImg: {
        position: "absolute",
        width: 295,
        height: 295,
        top: 30,
        right: -155,
    },
    profile: {
        backgroundColor: '#fff',
        height: 211,
        width: 171,
        borderRadius: 27,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        position: "absolute",
        left: 30,
        top: 55,
        alignItems: "center",
        paddingTop: 29,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 26
    },
    profileText: {
        textAlign: 'center',
        width: 125,
        fontSize: 10,
        fontWeight: "500",
        lineHeight: 15,
        paddingTop: 8,
        paddingBottom: 10
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textBox: {
        position: "absolute",
        left: 30,
        top: 315

    },
    addLogButton: {
        width:65,
        height:38,
        borderRadius:19,
        backgroundColor: "#C699FF",
        justifyContent:"center",
        right:52,
        position:"absolute",
        top:325
    },
    dayRow: {
        width:360,
        height:101,
        borderBottomRightRadius:25,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        backgroundColor: '#FBFBFB',
        alignSelf: "center",
        borderLeftColor: '#C9F2FF',
        borderLeftWidth: 88
    }
});
