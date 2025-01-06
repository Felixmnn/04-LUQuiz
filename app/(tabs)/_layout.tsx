import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor:"#1f3f70"
        }
      }}>
        <Tabs.Screen
        name="explore"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color }) => <Image style={{ height:30, width:30}} tintColor={color} source={require("../../assets/Icons/Choice.png")}/>,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color }) => <Image style={{ height:30, width:30}} tintColor={color} source={require("../../assets/Icons/Progress.png")}/>,
        }}
      />
      
    </Tabs>
  );
}
