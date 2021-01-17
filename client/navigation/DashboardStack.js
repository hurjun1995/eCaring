import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";
import { LogForm } from "../screens/LogForm";
import { FriendCode } from "../screens/FriendCode";
import { LogDisplay } from "../screens/LogDisplay";
import { Analytics } from "../screens/Analytics";

const Stack = createStackNavigator();

const DashboardStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
              initialParams={{data: props.data}}
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
                  headerLeft: null,
                  gesturesEnabled: false
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
            <Stack.Screen name="LogDisplay" component={LogDisplay}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  backgroundColor: '#fff',
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Analytics" component={Analytics}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  backgroundColor: '#fff',
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { DashboardStack }
