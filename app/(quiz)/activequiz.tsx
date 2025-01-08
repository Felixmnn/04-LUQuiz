import { View, Text } from 'react-native'
import React, { useState } from 'react'
import questions from "../../assets/questions/10Questions.json"
import CustomButton from '@/components/gui/CustomButton'
import RenderQuestion from '@/components/quiz/RenderQuestion'
import RenderResults from '@/components/quiz/RenderResults'
import QuestionNavigation from '@/components/quiz/QuestionNavigation'
import QuestionDetails from '@/components/quiz/QuestionDetails'
import QuizHeader from '@/components/quiz/QuizHeader'


const activequiz = () => {
    
    const questionsLength = questions.questions.length
    const dauer = null
    const examMode = false
    const [ fragenAbgeschlossen, setFragenAbgeschlossen ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ answers, setAnswer ] = useState([])
    

 
  return (
    <View className='flex-1'>
        {
            !fragenAbgeschlossen   ?
                <View className='flex-1'>
                    <QuizHeader questionCount={questionsLength} questionsAnswered={currentQuestion +1} compleationBarWidht={300} />
                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-2xl font-bold mb-5'>{questions.questions[currentQuestion].frage}</Text>
                            <RenderQuestion question= {questions.questions[currentQuestion]} 
                                            addAnswer={setAnswer}
                                            answers = {answers}
                                            questionIndex = {currentQuestion}
                                            />
                            <QuestionNavigation
                                            finishQuiz={setFragenAbgeschlossen} 
                                            questionsLength={questionsLength}
                                            currentQuestion = {currentQuestion}
                                            changeQuestion = {setCurrentQuestion}
                                            />
                    </View>
                    { !examMode ? <QuestionDetails question={questions.questions[currentQuestion]}/> : null}
                </View>
                                :
                <RenderResults answers={answers} questions={questions}/>
        }
    </View>
  )
}

export default activequiz