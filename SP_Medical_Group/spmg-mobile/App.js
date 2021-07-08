import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/screens/Login'


const AuthStack = createStackNavigator();

export default function Stack(){
  return(
    <View>
      <Text>hello</Text>
    </View>
  )
}
