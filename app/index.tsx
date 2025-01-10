import { View, Text, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Router } from 'expo-router'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";



const index = () => {
  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=> {
    async function getKeys() {
      const allsKeys = await AsyncStorage.getAllKeys()
      console.log(allsKeys)
    }
    getKeys()
    setIsLoading(false)
  },[])


  return (
    <View className='items-center justify-center flex-1'>
      {
        isLoading ? 
          <ActivityIndicator size="large" color="#1f3f70" />
        :
          <TouchableOpacity onPress={()=> router.push("/home")} className="bg-primary p-2 rounded-[5px] w-[150px] items-center">
            <Text className='text-xl font-bold text-white'>Get Started</Text>
          </TouchableOpacity>
      }
      
    </View>
  )
}

export default index