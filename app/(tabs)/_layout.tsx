import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY,
    }}>
        <Tabs.Screen name='my_trips' options={{
          tabBarLabel:'My Trip',
          tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color} />,
        }} />

        <Tabs.Screen name='discover' options={{
          tabBarLabel:'Discover',
          tabBarIcon:({color})=><Entypo name="globe" size={24} color={color} />,
        }}/>

        <Tabs.Screen name='profile' options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><FontAwesome5 name="user-circle" size={24} color={color} />,
        }}/>

    </Tabs>
  )
}