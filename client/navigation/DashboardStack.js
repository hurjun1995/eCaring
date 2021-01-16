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
                  title: "help me",
                  headerStyle: {
                      backgroundColor: '#C7D6FF'
                  },
                  headerTintColor: '#fff',
              }}/>
            <Stack.Screen name="LogForm" component={LogForm} />
        </Stack.Navigator>
    );
};

export { DashboardStack }
