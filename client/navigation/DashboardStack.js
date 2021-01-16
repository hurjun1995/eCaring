import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";
import { LogForm } from "../screens/LogForm";
import { FriendCode } from "../screens/FriendCode";

const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
              options={{
                  title: null,
                  headerStyle: {
                      backgroundColor: '#C7D6FF',
                      height: 0
                  },
              }}/>
            <Stack.Screen name="LogForm" component={LogForm}
              options={{
                  title: null,
                  headerStyle: {
                      backgroundColor: '#fff',
                      height: 0
                  },
                  headerLeft: null
              }}/>
            <Stack.Screen name="FriendCode" component={FriendCode}
                          options={{
                              title: null,
                              headerStyle: {
                                  backgroundColor: '#fff',
                                  height: 0
                              },
                              headerLeft: null
                          }}/>
        </Stack.Navigator>
    );
};

export { DashboardStack }
