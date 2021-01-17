
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../screens/Login'; 
import {AccSelect} from '../screens/AccSelect'; 
import {Gaurdian} from '../screens/Gaurdian';
import {Caregiver} from '../screens/Caregiver';
import {Patient} from '../screens/Patient'

import { DashboardStack } from "../navigation/DashboardStack";

const Stack = createStackNavigator(); 

const LogStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Login" component = {Login}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    }
                }}

            />
            <Stack.Screen name = "Select" component = {AccSelect}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    },
                    headerLeft: null
                }}
            />
             <Stack.Screen name = "Gaurdian" component = {Gaurdian}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    },
                    headerLeft: null
                }}
            />
             <Stack.Screen name = "Caregiver" component = {Caregiver}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    },
                    headerLeft: null
                }}
            />
            <Stack.Screen name = "Patient" component = {Patient}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    },
                    headerLeft: null
                }}
            />
            <Stack.Screen name = "DashboardStack" component = {DashboardStack}
                options={{
                    title:null,
                    headerStyle:{
                        backgroundColor: '#FBFBFB',
                        height:1
                    },
                    headerLeft: null
                }}
            />
        </Stack.Navigator>
    );
};

export{LogStack}
