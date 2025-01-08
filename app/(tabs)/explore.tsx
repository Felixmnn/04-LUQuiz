import { router } from "expo-router";
import { View,Text, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


export default function TabTwoScreen() {
  const modes = [ {name:"Bullet",source:""},
                  {name:"Blitz",source:""},
                  {name:"Quick",source:""},
                  {name:"Exam",source:""},
                  {name:"5/5",source:""},
                  {name:"10/10",source:""},
                  {name:"30/30",source:""},
                  {name:"60/60",source:""}
                ]

  const selectedProject = ["All Questions", "Problem Qeustions", "Session 1","Session 2", "Session 3"];
  return (
    <SafeAreaView className="flex-1">
      <Text className="font-bold text-2xl text-center m-3">Quiz</Text>
      <View className="h-[1px] w-full bg-primary" />
      <View className="flex-row justify-between m-2 items-center">
        <Text className="text-xl font-semibold">Mode</Text>
        <TouchableOpacity onPress={()=> router.push("../(details)/modes")}>
          <Text className="font-bold underline"> learn about modes</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={modes}
        keyExtractor={(item)=> item.name}
        numColumns={4}
        renderItem={({item})=> {
          return (
            <TouchableOpacity className="items-center justify-center ml-2 mt-2">
              <View className="h-[60px] w-[60px] bg-gray-500"></View>
              <Text className="font-semibold">{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Text className="text-xl font-semibold m-2">Question Bucket</Text>
      <View className="flex-row flex-wrap mb-2">
        <FlatList
          data={selectedProject}
          keyExtractor={(item) => item}

          renderItem={({item})=> {
            return (
              <View className="p-2 ml-2 mt-2 bg-red-400 rounded-[5px]">
                <Text >{item}</Text>
              </View>
            )
          } }
          contentContainerStyle={{
            flexDirection: 'row', 
            flexWrap: 'wrap', 
          }}
        />
      </View>
    </SafeAreaView>
  )
};
