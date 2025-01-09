import Modes from "@/components/explore/Modes";
import QuestionBucket from "@/components/explore/QuestionBucket";
import YourPorjects from "@/components/explore/YourPorjects";
import CustomButton from "@/components/gui/CustomButton";
import ProjectBanner from "@/components/gui/ProjectBanner";
import { router } from "expo-router";
import { useState } from "react";
import { View,Text, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SystemDeutschlands from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"



export default function TabTwoScreen() {
  const modes = [ {name:"Bullet",source:"", question:1, duration:60},
                  {name:"Blitz",source:"", question:1, duration:60},
                  {name:"Quick",source:"", question:1, duration:60},
                  {name:"Exam",source:"", question:1, duration:60},
                  {name:"5/5",source:"", question:1, duration:60},
                  {name:"10/10",source:"", question:1, duration:60},
                  {name:"30/30",source:"", question:1, duration:60},
                  {name:"60/60",source:"", question:1, duration:60}
                ]
  //Async Storage gets projets
  const projects = [{ projectName:"System Deutschland", 
                      projectPercentage: 1, 
                      projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      projectPassedQuizes:0,
                      projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
                      projectKategorys:["All Questions", "AnsweredQuestions", "BadQuestion","Sitzung_10_Grundgesetzänderung", "Sitzung_2_Verfassungssystem", "Sitzung_3_Exekutive_2","Sitzung_4_Legislative","Sitzung_5_Foederalismus","Sitzung_6_Verfassungsgericht","Sitzung_7_Wahlsystem","Sitzung_8_Parteiensystem","Sitzung_9_Interessengruppen"],
                      ProjectBanner:""
                    },{ projectName:"Vergleichenede Politikwissenschaft", 
                      projectPercentage: 65, 
                      projectQuestionLog:[0,-2,2,1,21,2-4,3,5,2],
                      projectPassedQuizes:1,
                      projectsource:"", question:1, duration:60,
                      projectKategorys:["All Questions", "Sitzung_5_Foederalismus", "BadQuestion"],
                      ProjectBanner:""
                    },{ projectName:"Einführung in Forschungsdesign", 
                      projectPercentage: 65, 
                      projectQuestionLog:[0,0,-2,1,-1,2-4,3,5,2],
                      projectPassedQuizes:1,
                      projectsource:"", question:1, duration:60,
                      projectKategorys:["All Questions", "Sitzung_5_Foederalismus", "AnsweredQuestions", "BadQuestion"],
                      ProjectBanner:""
                    }
                  ]
  const [selecetedProject, setSelectedProject] = useState(0)
    function changeProject (value){
      if (selecetedProject == projects.length -1  && value == +1){
        setSelectedProject(0)
      } else if (selecetedProject == 0 && value == -1 ) {
        setSelectedProject(projects.length -1)
      } else {
        setSelectedProject(selecetedProject + value)
      }
  }


  const [selectedMode , setSelectedMode] = useState(null)
  const [questionBucket, setQuestionBucket] = useState([])
  
  function changeQuestionBucket (newEntry) {
    if (Array.isArray(questionBucket) && questionBucket.length > 0){
      if (newEntry == "All Questions" && !questionBucket.includes(newEntry) ){
        setQuestionBucket(["All Questions"])
      } else {
        if (questionBucket.includes(newEntry)){
          const filteredQuestions = questionBucket.filter(question => question !== newEntry)
          setQuestionBucket(filteredQuestions)
        } else {
          setQuestionBucket([...questionBucket,newEntry])
        } 
      }
      }
      else {
        setQuestionBucket([newEntry])
      }
  }

  function generateQuiz (){
    const questionNumber = 10
    const questionDuration = null
    const project = SystemDeutschlands
    const sources = questionBucket
    const questions = []
    const sourceKey = sources[0]
    for (let i = 1; i <= 10; i++) {
      questions.push(project[sourceKey][i]);  //Vorher habe ich das noch so gemacht: project.Sitzung_10_Grundgesetzänderung[i]
    }
    console.log (questions)
    return questions
  }

  return (
    <SafeAreaView className="flex-1 items-center">
      <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Quiz</Text>
      <View className="h-[1px] w-full bg-primary" />
      <Text className="font-bold text-xl">Select a Project:</Text>
      <YourPorjects setSelectedProject={changeProject} 
                    selecetedProject={selecetedProject} 
                    project={projects[selecetedProject]}
                    />
      <Modes  modes={modes} 
              selectedMode={selectedMode} 
              setSelectedMode={setSelectedMode}/>
      <QuestionBucket selectedProject={projects[selecetedProject].projectKategorys} 
                      changeQuestionBucket={changeQuestionBucket} 
                      questionBucket= {questionBucket}/>
      <CustomButton title={"Start Quiz"}
                    handlePress={()=> router.push({
                                        pathname: '/activequiz',
                                        params: { data: JSON.stringify(generateQuiz()) },
                                      })}
                    />
    </SafeAreaView>
  )
};
