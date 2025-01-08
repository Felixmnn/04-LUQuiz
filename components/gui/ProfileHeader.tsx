import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ProfileHeader = ({name,welcomeMessage,imageSource , handlePress, isLoading, textStyle}) => {
  return (
    <TouchableOpacity 
        className='flex-row m-2'
        disabled = {isLoading}
        activeOpacity={0.7}
        onPress={handlePress}
        >
        <View className='h-[40px] w-[40px] rounded-full mr-1 bg-red-900'>
            {imageSource?<Image style={{ height: 40, width: 40, borderRadius: 20 }} source={imageSource}  /> : null}
        </View>
        <View >
            <Text className='font-semibold text-white'>{welcomeMessage?welcomeMessage:"Welcome"}</Text>
            <Text className='text-white'>{name?name:"[Name]"}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProfileHeader