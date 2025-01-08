import { View,Text, TouchableOpacity, SafeAreaView,FlatList } from 'react-native';
import  CustomButton  from "@/components/gui/CustomButton"
import ProfileHeader from '@/components/gui/ProfileHeader';
import ProjectBanner from '@/components/gui/ProjectBanner';
import ProjectModule from '@/components/gui/ProjectModule';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizOption from '@/components/quiz/QuizOption';
import { router } from "expo-router";


export default function HomeScreen() {

// Setze die Ausgabe für NativeWind auf "native"

  const currentTime = new Date()
  const exampleData = ["Einfürhung System Deutschland","Vergleichende Politikwisscenschaften","Einführung in Forschungsdesign"]
  return (
    <SafeAreaView className=' items-between justify-start flex-1'>
        <View className='bg-primary rounded-bl-[5px] p-2'>
          <ProfileHeader name={"Danie Marinez"} imageSource={require("../../assets/images/splash.png")} handlePress={()=> router.push("/profile")}/>
          <CustomButton title={"Start a new Quiz"} containerStyles={"bg-white max-w-[200px] items-center"} textStyles={"text-black text-gray-700 "} handlePress={()=> router.push("/activequiz")}/>
        </View>
          <View className='flex-row justify-between m-2 items-center'>
            <Text className='font-semibold m-2 text-xl'>Our Quizzes</Text>
            <TouchableOpacity onPress={()=> router.push("/allquizzes")}>
                      <Text className="font-bold underline"> show all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
              data={exampleData}
              keyExtractor={(item) =>  item}
              numColumns={2}
              renderItem={ ({item}) => {
                return (
                  <TouchableOpacity 
                    className='flex-wrap max-w-[150px] p-2 bg-[#fff] mx-2 mt-2 rounded-[5px]'
                    activeOpacity={0.7}
                    >
                    <Text >{item}</Text>
                  </TouchableOpacity>
                )
              }
                
              }
            />

          <View className='m-2'>
            <Text className='font-semibold text-xl'>Your Current Projects</Text>
            <ProjectBanner  imageSource={require("../../assets/images/splash.png")} 
                            containerStyles={"bg-red-500 max-w-[300px] mt-2"} 
                            backgroundColor={'rgba(59, 246, 59, 0.5)'}
                            projectName={"System Deutschland"}
                            projectPercentage={"65% abgeschlossen"}
                            />
            <ProjectBanner  imageSource={require("../../assets/images/splash.png")} 
                            containerStyles={"bg-green-300 max-w-[300px] mt-2" }
                            backgroundColor={'rgba(202, 90, 26, 0.5)'} 
                            projectName={"Forschungsdesign"}
                            projectPercentage={"35% abgeschlossen"}
                            />
            </View>
    </SafeAreaView>
)};
