import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '..screen/login';
import Signup from '../screen/signup';
import Welcome from "../screen/welcome";
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}