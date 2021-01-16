import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";
import { LogForm } from "../screens/LogForm";

const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
              options={{
                  title: null,
                  headerStyle: {
                      backgroundColor: '#C7D6FF',
                      height: 60
                  },
              }}/>
            <Stack.Screen name="LogForm" component={LogForm}
              options={{
                  title: null,
                  headerStyle: {
                      backgroundColor: '#fff',
                      height: 60
                  },
                  headerLeft: null
              }}/>
        </Stack.Navigator>
    );
};

export { DashboardStack }
