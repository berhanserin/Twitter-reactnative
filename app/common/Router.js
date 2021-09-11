import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './../components/LoginPage';
import RegisterPage from './../components/RegisterPage';
import * as React from 'react';

const HomeStack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Login" component={LoginPage} />
        <HomeStack.Screen name="Register" component={RegisterPage} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
