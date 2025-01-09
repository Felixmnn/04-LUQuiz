import { View, Text } from 'react-native'
import React, { useState } from 'react'
import questions from "../../assets/questions/10Questions.json"
import Sitzung_5_Foederalismus from "../../assets/questions/Einführungsvorlesung Das Politische System Deutschlands.json"
import CustomButton from '@/components/gui/CustomButton'
import RenderQuestion from '@/components/quiz/RenderQuestion'
import RenderResults from '@/components/quiz/RenderResults'
import QuestionNavigation from '@/components/quiz/QuestionNavigation'
import QuestionDetails from '@/components/quiz/QuestionDetails'
import QuizHeader from '@/components/quiz/QuizHeader'
import Answers from '@/components/quiz/Answers'
import { useLocalSearchParams } from 'expo-router'


const activequiz = () => {
    const { data } = useLocalSearchParams();
    const exampleQuestion = data ? JSON.parse(data) : null;

    const quizFragen = exampleQuestion ? exampleQuestion : questions.questions
    const questionsLength = quizFragen.length
    const dauer = null
    const examMode = false
    const [ fragenAbgeschlossen, setFragenAbgeschlossen ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ answers, setAnswer ] = useState([])
    const [ answersShown, setAnsersShown ] = useState(true)

    function restartGame () {
        setFragenAbgeschlossen(false)
        setAnswer([])
        setCurrentQuestion(0)
    }
    

 
  return (
    <View className='flex-1'>
        {
            !fragenAbgeschlossen   ?
                <View className='flex-1'>
                    <QuizHeader questionCount={questionsLength} questionsAnswered={currentQuestion +1} compleationBarWidht={300} />
                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-xl font-bold mb-5 max-w-[600px] text-center'>{quizFragen[currentQuestion].frage}</Text>
                            <RenderQuestion question= {quizFragen[currentQuestion]} 
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
                            {
                                !answersShown? 
                                    <Answers answers = {quizFragen[currentQuestion]}/>
                                :
                                    null
                            }
                    </View>
                    { !examMode ? 
                            <QuestionDetails 
                                            question={quizFragen[currentQuestion]} 
                                            finishQuiz={setFragenAbgeschlossen}
                                            showAnswers = {setAnsersShown}
                                            shownAnsers = {answersShown}
                                            /> : null}

                                            
                </View>
                                :
                            <RenderResults  answers={answers} 
                                            questions={quizFragen} 
                                            restartGame={() => restartGame()}
                                            />
        }
    </View>
  )
}

export default activequiz