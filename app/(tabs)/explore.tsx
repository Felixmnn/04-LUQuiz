import Modes from "@/components/explore/Modes";
import QuestionBucket from "@/components/explore/QuestionBucket";
import YourPorjects from "@/components/explore/YourPorjects";
import CustomButton from "@/components/gui/CustomButton";
import ProjectBanner from "@/components/gui/ProjectBanner";
import { router } from "expo-router";
import { useState } from "react";
import { View,Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SystemDeutschlands from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"



export default function TabTwoScreen() {
  const modes = [ {name:"Bullet",source:"", question:5, duration:60},
                  {name:"Blitz",source:"", question:10, duration:300},
                  {name:"Quick",source:"", question:20, duration:900},
                  {name:"Exam",source:"", question:40, duration:2700},
                  {name:"5/5",source:"", question:5, duration:null},
                  {name:"10/10",source:"", question:10, duration:null},
                  {name:"30/30",source:"", question:30, duration:null},
                  {name:"60/60",source:"", question:60, duration:null}
                ]
  //Async Storage gets projets
  const projects = [{ projectName:"System Deutschland", 
                      projectPercentage: 1, 
                      projectQuestionLog:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      projectPassedQuizes:0,
                      projectSource:"../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json",
                      projectKategorys:["Sitzung_10_Grundgesetzänderung", "Sitzung_2_Verfassungssystem", "Sitzung_3_Exekutive_2","Sitzung_4_Legislative","Sitzung_5_Foederalismus","Sitzung_6_Verfassungsgericht","Sitzung_7_Wahlsystem","Sitzung_8_Parteiensystem","Sitzung_9_Interessengruppen"],
                      projectFilters:["All Questions", "BadQuestion", "Multiple Choice", "SingleChoice", "Leicht", "Mittel", "Schwer", "Faktensweissen", "Verständniswissen", ">1 Miuntet", "1-3 Minuten", ">3 Minuten"],
                      ProjectBanner:""
                    },{ projectName:"Vergleichenede Politikwissenschaft", 
                      projectPercentage: 65, 
                      projectQuestionLog:[0,-2,2,1,21,2-4,3,5,2],
                      projectPassedQuizes:1,
                      projectsource:"", question:1, duration:60,
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
  const [selectedDuration , setSelectedDuration] = useState(null)
  const [questionNumer , setQuestionNumer] = useState(null)
  const [questionBucket, setQuestionBucket] = useState([])
  const [filterBucket, setFilterBucket] = useState([])

  
  function changeQuestionBucket (newEntry) {
    if (Array.isArray(questionBucket) && questionBucket.length > 0){
      
      if (questionBucket.includes(newEntry)){
          const filteredQuestions = questionBucket.filter(question => question !== newEntry)
          setQuestionBucket(filteredQuestions)
        } else {
          setQuestionBucket([...questionBucket,newEntry])
        } 
      
      }
      else {
        setQuestionBucket([newEntry])
      }
  }
  function changeFilterBucket (newEntry) {
    if (Array.isArray(filterBucket) && filterBucket.length > 0){
      if (newEntry == "All Questions" && !filterBucket.includes(newEntry) ){
        setFilterBucket(["All Questions"])
      } else {
        if (filterBucket.includes(newEntry)){
          const filteredQuestions = filterBucket.filter(filter => filter !== newEntry)
          setFilterBucket(filteredQuestions)
        } else {
          setFilterBucket([...filterBucket,newEntry])
        } 
      }
      }
      else {
        setFilterBucket([newEntry])
      }
  }


  function generateQuiz (){
    const questions = []
    if (questionBucket.length < 1){
      console.log("Bro du hast keine Fragen Ausgewählt")
    } else if (questionNumer == null){
      console.log("Bro du hast keine FragenAnzahl Ausgewählt")
    } else
      {
        const project = SystemDeutschlands
        for (let j = 0; j <= questionBucket.length -1; j++ )  {  
          for (let i = 0; i < Math.floor(questionNumer/questionBucket.length); i++ ){
            const random = Math.floor(Math.random() * (project[questionBucket[j]].length));
            questions.push(project[questionBucket[j]][random])
          }
        }
        while (questions.length !== questionNumer){
          const i = Math.floor(Math.random() * (questionBucket.length - 0 + 1));
          const j = Math.floor(Math.random() * (project[questionBucket[i]].length - 0 + 1));
          questions.push(project[questionBucket[i]][j])
        }
      console.log("Fragen Bucket",questions)
      console.log(filterBucket)
    }
    if (false){
      router.push({
        pathname: '/activequiz',
        params: { data: JSON.stringify(questionBucket) },
      })
    }
  }




  return (
    <SafeAreaView className="flex-1 items-center">
            <Text className="text-white font-bold text-2xl text-center w-full p-3 bg-primary">Quiz</Text>
            <View className="h-[1px] w-full bg-primary" />
      <ScrollView className="w-full">
        <View className="w-full items-center my-5">
      <YourPorjects setSelectedProject={changeProject} 
                    selecetedProject={selecetedProject} 
                    project={projects[selecetedProject]}
                    />
      <Modes  modes={modes} 
              selectedMode={selectedMode} 
              setSelectedMode={setSelectedMode}
              setselectNumber = {setQuestionNumer}
              setSelectedDuration = {setSelectedDuration}
              />
      <QuestionBucket selectedProject={projects[selecetedProject].projectKategorys} 
                      changeQuestionBucket={changeQuestionBucket} 
                      questionBucket= {questionBucket}
                      typeSet = {"Question Bucket"}
                      />
      <QuestionBucket selectedProject={projects[selecetedProject].projectFilters} 
                      changeQuestionBucket={changeFilterBucket} 
                      questionBucket= {filterBucket}
                      typeSet = {"Question Filters"}
                      />
      <CustomButton title={"Start Quiz"}
                    handlePress={()=> console.log(generateQuiz ())}
                    /*
                    handlePress={()=> router.push({
                                        pathname: '/activequiz',
                                        params: { data: JSON.stringify(generateQuiz()) },
                                      })}
                    */
                    />
          </View>
        </ScrollView>
    </SafeAreaView>
  )
};
