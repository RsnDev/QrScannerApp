import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import BottomTabs from './screens/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login">
          {({navigation}) => (
            <LoginScreen onLogin={() => navigation.replace('MainTabs')} />
          )}
        </Stack.Screen>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
