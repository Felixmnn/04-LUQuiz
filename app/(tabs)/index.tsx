import { View,Text, TouchableOpacity } from 'react-native';
import  CustomButton  from "@/components/gui/CustomButton"
import ProfileHeader from '@/components/gui/ProfileHeader';
import ProjectBanner from '@/components/gui/ProjectBanner';
import ProjectModule from '@/components/gui/ProjectModule';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizOption from '@/components/quiz/QuizOption';


export default function HomeScreen() {
  const currentTime = new Date()
  return (
    <View className=' items-center justify-center flex-1'>
        <Text className='text-white text-3xl'>Tab One</Text>
        <CustomButton title={"Hello World"}/>
        <ProfileHeader name={"Test Nutzer"} imageSource={require("../../assets/images/splash.png")} />
        <ProjectBanner imageSource={require("../../assets/images/splash.png")} containerStyles={"bg-red-500"} />
        <ProjectModule containerStyles={"bg-green-400"}/>
        <QuizHeader timeLimit={60} questionCount={10} questionsAnswered={2} startTime={currentTime} compleationBarWidht={200}/>
        <QuizOption selected={false} text={"Ich bin eine Antwort"}/>
    </View>
)};
