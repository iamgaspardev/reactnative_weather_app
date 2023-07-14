import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BackScreen from './pages/backshare';
import SearchScreen from './pages/searchScreen';
import HomeScreen from './pages/homescreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={false}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#174b96',
        },
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#0000ff', 
        },
        activeTintColor: '#ff8c00', 
        inactiveTintColor :'#fff'
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Back"
        component={BackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-undo" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
