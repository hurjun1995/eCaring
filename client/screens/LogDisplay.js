import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export const LogDisplay = ({navigation, route}) => {
    const log = route?.params?.log;

    const getDate = () => {
        const month = log.key.toLocaleString('default', { month: 'long' });
        const day = log.key.getDate();
        const year = log.key.getFullYear();
        return(
            <Text style={{fontWeight:"600", fontSize:12, color:"#ABABAB", textAlign:"center", paddingBottom:16}}>{month} {day}, {year}</Text>
        );
    };

    const meals = log.value.foodIntake;
    const medicines = log.value.medicine;

    const takenMeds = medicines ? (medicines.map( meds => (
            <View style={[{backgroundColor:'#fff', borderColor:"#C7D6FF", borderLeftWidth:2, borderRightWidth:2, borderBottomWidth:2, borderTopWidth:72}, styles.vitalBox]} key={meds.name}>
                <Text style={[{width:50, paddingTop:5, position:"absolute", top:-54}, styles.medicineText]}>{meds.name}</Text>
                <Text style={styles.medicineDosage}>{meds.dosage} mg</Text>
            </View>
        ))
    ): <View/>;

    const mentalHealth = () => {
        let filledHearts = [];
        for(let i=0; i<log.value.mentalHealth; i++){
            filledHearts.push(
                <Icon name="favorite" color="#FF7676" key={i} size={35}/>
            )
        }
        let message = [];
        if(log.value.mentalHealth === 1) message.push(<Text style={styles.healthText}>Jane is feeling sad.</Text>);
        else if(log.value.mentalHealth === 2) message.push(<Text style={styles.healthText}>Jane is feeling okay.</Text>);
        else if(log.value.mentalHealth === 3) message.push(<Text style={styles.healthText}>Jane is feeling good.</Text>);
        else if(log.value.mentalHealth === 4) message.push(<Text style={styles.healthText}>Jane is feeling great!</Text>);
        else message.push(<Text style={styles.healthText}>Jane is feeling amazing!</Text>);
        let hearts = [filledHearts];
        for(let i=5; i>filledHearts.length; i--){
            hearts.push(
                <Icon name="favorite-border" color="#FF7676" key={i} size={35}/>
            )
        }
        return(
            <View style={{position:"absolute", alignSelf:"center", bottom:36}}>
                <View style={styles.hearts}>
                    {hearts}
                </View>
                {message}
            </View>
        );
    };

    const painLevel = () => {
        let filledFaces = [];
        for(let i=0; i<log.value.painLevel; i++){
            filledFaces.push(
                <Image source={require('../assets/pain.png')} style={{width:31, height:31}} key={i}/>
            )
        }
        let message = [];
        if(log.value.painLevel === 1) message.push(<Text style={styles.healthText}>Small aches.</Text>);
        else if(log.value.painLevel === 2) message.push(<Text style={styles.healthText}>Light pain.</Text>);
        else if(log.value.painLevel === 3) message.push(<Text style={styles.healthText}>Moderate pain.</Text>);
        else if(log.value.painLevel === 4) message.push(<Text style={styles.healthText}>Severe pain.</Text>);
        else message.push(<Text style={styles.healthText}>Excruciating pain.</Text>);
        let pain = [filledFaces];
        for(let i=5; i>filledFaces.length; i--){
            pain.push(
                <Image source={require('../assets/emptyPain.png')} style={{width:31, height:31}} key={i}/>
            )
        }
        return(
            <View style={{position:"absolute", alignSelf:"center", bottom:36}}>
                <View style={styles.hearts}>
                    {pain}
                </View>
                {message}
            </View>
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
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:"center"}}>
                        <View style={[styles.box, {width:165, height:118, marginRight:20}]}>
                            <View style={styles.icon}>
                                <Icon name="local-drink" color={"#81BBFF"} size={35}/>
                            </View>
                            <Text style={styles.title}>Water</Text>
                            <Text style={styles.title}>Intake</Text>
                            <Text style={styles.info}>{log.value.hydration} L</Text>
                        </View>
                        <View style={[styles.box, {width:165, height:118}]}>
                            <View style={styles.icon}>
                                <Image source={require('../assets/vital.png')} style={{width:31, height:31}}/>
                            </View>
                            <Text style={styles.title}>Vital</Text>
                            <Text style={styles.title}>Signs</Text>
                            <Text style={styles.info}>{log.value.vitals}</Text>
                        </View>
                    </View>

                    <View style={[styles.box, {width:350, height:161, marginRight:20}]}>
                        <View style={styles.icon}>
                            <Icon name="restaurant" color={"#FF9D43"} size={33}/>
                        </View>
                        <Text style={styles.title}>Food</Text>
                        <Text style={styles.title}>Intake</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Text style={[{color: meals.includes("Breakfast") ? "#4B4B4B" : "#E6E6E6"}, styles.foodText]}>Breakfast</Text>
                            <Text style={[{color: meals.includes("Lunch") ? "#4B4B4B" : "#E6E6E6"}, styles.foodText]}>Lunch</Text>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Text style={[{color: meals.includes("Dinner") ? "#4B4B4B" : "#E6E6E6"}, styles.foodText]}>Dinner</Text>
                            <Text style={[{color: meals.includes("Snack") ? "#4B4B4B" : "#E6E6E6"}, styles.foodText]}>Snack</Text>
                        </View>
                    </View>

                    <View style={[styles.box, {width:350, height:176, marginRight:20}]}>
                        <View style={styles.icon}>
                            <Image source={require('../assets/pill.png')} style={{width:31, height:31}}/>
                        </View>
                        <Text style={styles.title}>Medicine</Text>
                        <Text style={styles.title}>Intake</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {takenMeds}
                        </ScrollView>
                    </View>

                    <View style={[styles.box, {width:350, height:161, marginRight:20}]}>
                        <View style={styles.icon}>
                            <Icon name="favorite" color={"#FF7676"} size={35}/>
                        </View>
                        <View style={{position: "absolute", left:18, top:18}}>
                            <Text style={styles.title}>Mental</Text>
                            <Text style={styles.title}>Health</Text>
                        </View>
                        {mentalHealth()}
                    </View>

                    <View style={[styles.box, {width:350, height:161, marginRight:20}]}>
                        <View style={styles.icon}>
                            <Image source={require('../assets/pain.png')} style={{width:31, height:31}}/>
                        </View>
                        <View style={{position: "absolute", left:18, top:18}}>
                            <Text style={styles.title}>Pain</Text>
                            <Text style={styles.title}>Levels</Text>
                        </View>
                        {painLevel()}
                    </View>

                    <View style={[styles.box, {width:350, height:130, marginRight:20}]}>
                        <View style={styles.icon}>
                            <Icon name="grade" color={"#FFD465"} size={33}/>
                        </View>
                        <View style={{position: "absolute", left:18, top:18}}>
                            <Text style={styles.title}>Special</Text>
                            <Text style={styles.title}>Notes</Text>
                        </View>
                        <Text style={styles.note}>{log.value.notes}</Text>
                    </View>
                    <View style={{height:280}}/>
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
            height: 4,
        },
        shadowOpacity: 0.25,
        padding:18,
        marginBottom:18,
        justifyContent:"center",
    },
    title: {
        fontSize:12,
        fontWeight:"400",
        color:"#4B4B4B",
        paddingBottom:2
    },
    info: {
        fontSize:25,
        fontWeight:"600",
        color:"#4B4B4B",
        paddingTop:13
    },
    icon: {
        position:"absolute",
        right: 16,
        top:16
    },
    foodText: {
        fontSize:25,
        fontWeight:"600",
        paddingTop:13,
        marginRight:40
    },
    medicineText: {
        fontWeight:"600",
        fontSize:10,
        textAlign:"center",
        color:"#6067A9"
    },
    medicineDosage: {
        fontSize:8,
        fontWeight:"600",
        color:"#8D9ABA",
        position:"absolute",
        bottom: 20
    },
    vitalBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width:75,
        height:92,
        borderRadius: 19,
        marginRight: 11,
        marginTop:10
    },
    healthText: {
        fontWeight: "600",
        fontSize:12,
        color:"#4B4B4B",
        textAlign: "center",
        paddingTop:11
    },
    hearts: {
        alignSelf:"center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: 200
    },
    note: {
        fontWeight:"600",
        fontSize:15,
        color:"#4B4B4B",
        paddingTop:22
    }
});

