import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
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

    const data = [
        {
            mentalHealth: 3,
            month: "january",
            dayNum: "15",
            dayStr: "FRI",
            id:1
        },
        {
            mentalHealth: 4,
            month: "january",
            dayNum: "14",
            dayStr: "THU",
            id:2
        },
        {
            mentalHealth: 5,
            month: "january",
            dayNum: "13",
            dayStr: "WED",
            id:3
        },
        {
            mentalHealth: 1,
            month: "january",
            dayNum: "12",
            dayStr: "TUE",
            id:4
        },
        {
            mentalHealth: 5,
            month: "january",
            dayNum: "11",
            dayStr: "MON",
            id:5
        }
    ];

    const mentalHealth = (num) => {
        let hearts = [];
        for(let i=0; i<num; i++){
            hearts.push(
                <Icon name="favorite" color="#FF7676"/>
            )
        }
        let message = [];
        if(num === 1) message.push(<Text style={styles.healthText}>Jane is feeling sad.</Text>);
        else if(num === 2) message.push(<Text style={styles.healthText}>Jane is feeling okay.</Text>);
        else if(num === 3) message.push(<Text style={styles.healthText}>Jane is feeling good.</Text>);
        else if(num === 4) message.push(<Text style={styles.healthText}>Jane is feeling great!</Text>);
        else message.push(<Text style={styles.healthText}>Jane is feeling amazing!</Text>);
        return(
            <View style={{position: "absolute", top:30, left:21}}>
                {message}
                <View style={styles.hearts}>
                    {hearts}
                </View>
            </View>
        );
    };

    const dayRow = data ? (data.map( log => (
            <View style={styles.dayRow} key={log.id}>
                <View style={styles.date}>
                    <Text style={styles.dayNum}>{log.dayNum}</Text>
                    <Text style={styles.dayStr}>{log.dayStr}</Text>
                </View>
                {mentalHealth(log.mentalHealth)}
                <TouchableOpacity style={{position:"absolute", right:18, top:40}}>
                    <Icon name="navigate-next"/>
                </TouchableOpacity>
            </View>
        ))
    ) : (<View/>);

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
            <SafeAreaView style={styles.container}>
                <ScrollView style={{position:"absolute", top:380, width:375, height: 600}} showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:10}}>
                        <Text style={{width: 63, textAlign: 'center', color:'#7B7D7D', fontWeight:"600", fontSize:10}}>JANUARY</Text>
                        <View style={{flex: 1, height: 0.5, backgroundColor: '#C4C4C4'}} />
                    </View>
                    {dayRow}
                    <View style={{height: 154}}/>
                </ScrollView>
            </SafeAreaView>
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
        overflow: "visible",
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
        borderLeftWidth: 88,
        marginBottom: 10,
    },
    date: {
        paddingTop: 20,
        position: "absolute",
        left: -60,
        alignItems: "center"
    },
    dayNum: {
        fontWeight: "600",
        fontSize: 30,
    },
    dayStr: {
        fontWeight: "600",
        fontSize:15
    },
    healthText: {
        fontWeight: "400",
        fontSize:12,
        paddingBottom: 4
    },
    hearts: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
