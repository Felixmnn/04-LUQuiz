import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../gui/CustomButton'
import { router } from 'expo-router'

const QuestionDetails = ({question}) => {
  return (
    <View className='flex-row justify-between'>
      <CustomButton title={"Source"} containerStyles={"h-[20px] py-0 px-1"} handlePress={()=> router.push("/source")}/>
      <CustomButton title={"Report"} containerStyles={"h-[20px] py-0 px-1"} handlePress={()=> router.push("/report")}/>
    </View>
  )
}

export default QuestionDetails