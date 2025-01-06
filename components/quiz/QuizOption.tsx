import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizOption = ({text,selected,containerStyles}) => {
    const [isSelected,setIsSelected] = useState(selected)
  return ( 
    <TouchableOpacity
        onPress={() => setIsSelected(!isSelected)}
        className={`${isSelected?"bg-primary":"bg-white border border-2 border-primary"} flex-row w-full max-w-[300px] rounded-[5px] m-1 h-[50px] items-center p-2 justify-between ${containerStyles}`}
        >
        <Text className={`mb-[1px] ${isSelected?"text-white font-semibold":"text-primary font-bold"}`}>{text}</Text>
        <View className={`rounded-full ${isSelected?"border border-1 border-white":"border border-1 border-primary "} justify-center items-center w-[20px] h-[20px]`}>{isSelected?<Icon name="check" size={10} color="white"/>:null}</View>
    </TouchableOpacity>
  )
}

export default QuizOption