import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'

const index = () => {
  return (
    <View>
      <TouchableOpacity onPress={()=> router.push("/home")}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index