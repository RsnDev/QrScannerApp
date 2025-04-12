// screens/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SavedScreen from './SavedScreen';
import QRCodeScanner from './QRCodeScanner'; 


import { View, Text } from 'react-native';


function DummyScreen({ label }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{label}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    // <Tab.Navigator screenOptions={{ headerShown: false }}>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Records" children={() => <DummyScreen label="Records" />} />
    //   <Tab.Screen name="Share" component={ProfileScreen} />

    //   <Tab.Screen name="Saved" children={() => <DummyScreen label="Saved" />} />
    // </Tab.Navigator>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/navp.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#307BFF' : '#888',
          }}
        />
      ),
    }}
  />
  <Tab.Screen
  name="Scan"
  component={QRCodeScanner}
  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../assets/nav1.png')}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#307BFF' : '#888',
        }}
      />
    ),
  }}
/>
  <Tab.Screen
    name="Share"
    component={ProfileScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/nav2.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#307BFF' : '#888',
          }}
        />
      ),
    }}
  />
  <Tab.Screen
  name="Saved"
  component={SavedScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../assets/nav4.png')}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#307BFF' : '#888',
        }}
      />
    ),
  }}
/>

</Tab.Navigator>

  );
}
