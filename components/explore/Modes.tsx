import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

const Modes = ({modes,selectedMode,setSelectedMode}) => {
  return (
    <View className=' w-full max-w-[500px]'> 
        <View className="flex-row justify-between m-2 items-center ">
            <Text className="text-xl font-semibold">Modes:</Text>
            <TouchableOpacity onPress={()=> router.push("../(details)/modes")}>
                <Text className="font-bold underline"> learn about modes</Text>
            </TouchableOpacity>
        </View>
          <FlatList
              data={modes}
              keyExtractor={(item)=> item.name}
              renderItem={({item})=> {
                return (
                  <TouchableOpacity className={`items-center justify-center p-1 m-1 rounded-[5px] border border-2 border-white ${item.name == selectedMode ? "bg-blue-200 border-blue-300 " : "bg-gray-300 border-gray-400"}`}
                                    onPress={()=> { item.name !== selectedMode ?  setSelectedMode(item.name) : setSelectedMode(null)}}
                                      >
                    <View className="h-[60px] w-[60px] bg-gray-500"></View>
                    <Text className="font-semibold">{item.name}</Text>
                  </TouchableOpacity>
                )
              }}
              contentContainerStyle={{
                flexDirection: 'row', 
                flexWrap: 'wrap', 
              }}
            />
    </View>
  )
}

export default Modes