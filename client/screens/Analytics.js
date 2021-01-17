import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export const Analytics = ({navigation, route}) => {
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#EAD9FF', '#FFE7F2', '#FFFFFF']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '40%',
                    flex: 1,
                }}
            />
            <TouchableOpacity style={{position:"absolute", left:24, top:74}} onPress={() => {navigation.pop()}}>
                <Icon name="navigate-before" color="#515C77"/>
            </TouchableOpacity>
            <Text style={{color: "#515C77", fontWeight:"500", fontSize:25, position:"absolute", top:70}}>Analytical Overview</Text>
            <View style={styles.display}>
                <ScrollView style={{padding:25}} showsVerticalScrollIndicator={false}>
                    <View style={[{width:350, height:250}, styles.box]}>
                        <Text style={{fontWeight: "600",fontSize: 12,color:"#4B4B4B", padding:4}}>Average Water Intake</Text>
                        <LineChart
                            data={{
                                labels: ["1", "2", "3", "4", "5", "6", "7"],
                                datasets: [
                                    {
                                        data: [
                                            1,
                                            0.5,
                                            2,
                                            3,
                                            1.5,
                                            1
                                        ]
                                    }
                                ]
                            }}
                            width={330} // from react-native
                            height={200}
                            yAxisSuffix="L"
                            yAxisInterval={1} // optional, defaults to 1
                            strokeWidth={10}
                            chartConfig={{
                                backgroundColor: "#FBFBFB",
                                backgroundGradientFrom: "#FBFBFB",
                                backgroundGradientTo: "#FBFBFB",
                                decimalPlaces: 1, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(0, 133, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(81, 92, 119, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "5",
                                    stroke: "#85CCEB"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 0,
                                borderRadius: 16
                            }}
                        />
                    </View>
                    <View style={[{width:350, height:250}, styles.box]}>
                        <Text style={{fontWeight: "600",fontSize: 12,color:"#4B4B4B", padding:4}}>Average Mental Health</Text>
                        <LineChart
                            data={{
                                labels: ["1", "2", "3", "4", "5", "6", "7"],
                                datasets: [
                                    {
                                        data: [
                                            3,
                                            3,
                                            2,
                                            5,
                                            4,
                                            2
                                        ]
                                    }
                                ]
                            }}
                            width={330} // from react-native
                            height={200}
                            yAxisInterval={1} // optional, defaults to 1
                            strokeWidth={10}
                            chartConfig={{
                                backgroundColor: "#FBFBFB",
                                backgroundGradientFrom: "#FBFBFB",
                                backgroundGradientTo: "#FBFBFB",
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 118, 118, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(81, 92, 119, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "5",
                                    stroke: "#85CCEB"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 0,
                                borderRadius: 16
                            }}
                        />
                    </View>
                    <View style={[{width:350, height:250}, styles.box]}>
                        <Text style={{fontWeight: "600",fontSize: 12,color:"#4B4B4B", padding:4}}>Average Pain Levels</Text>
                        <LineChart
                            data={{
                                labels: ["1", "2", "3", "4", "5", "6", "7"],
                                datasets: [
                                    {
                                        data: [
                                            2,
                                            3,
                                            5,
                                            2,
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            }}
                            width={330} // from react-native
                            height={200}
                            yAxisInterval={1} // optional, defaults to 1
                            strokeWidth={10}
                            chartConfig={{
                                backgroundColor: "#FBFBFB",
                                backgroundGradientFrom: "#FBFBFB",
                                backgroundGradientTo: "#FBFBFB",
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(45, 205, 61, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(81, 92, 119, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "5",
                                    stroke: "#85CCEB"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 0,
                                borderRadius: 16
                            }}
                        />
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
    display: {
        backgroundColor: '#fff',
        height: 999,
        width:"100%",
        position:"absolute",
        top:120,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: "center"
    },
    box:{
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
        alignItems:"center"
    }
});
