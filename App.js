import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Demo from './screen/Demo'
import Signup from './screen/Signup'
import Login from './screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="Demo" component={Demo} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
       
      </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default App

const styles = StyleSheet.create({})