import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProjectBanner = ({containerStyles,imageSource,projectName,projectPercentage, projectDetails, checkmark, handlePress, isLoading}) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-center m-2 p-2 rounded-[5px] ${containerStyles}`}
      disabled = {isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
      >
        {imageSource?<Image style={{ height: 60, width: 60, borderRadius: 30 }} source={imageSource} className='mr-1'/>:null}
        <View>
            <Text className='font-semibold text-xl'>{projectName?projectName:"[Project Name]"}</Text>
            <Text className='font-semibold'>{projectPercentage?projectPercentage:"[Compleation %]"}</Text>
            <Text >{projectDetails?projectDetails:"12 Bestanden | 566/800 Fragen"} </Text>
        </View>
        {checkmark?<Image style={{ height: 16, width: 16, borderRadius: 8 }} source={checkmark} className='ml-1'/>:null}
    </TouchableOpacity>
  )
}

export default ProjectBanner