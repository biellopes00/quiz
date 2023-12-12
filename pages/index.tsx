import Question from "@/components/Question";
import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";
import { useState } from "react";


const testQuestion = new QuestionModel(1, 'melhor cor', [
  AnswerModel.wrong('verde'),
  AnswerModel.wrong('preto'),
  AnswerModel.wrong('azul'),
  AnswerModel.right('roxo')
])
export default function Home() {

  const [question, setQuestion] = useState(testQuestion)
  function onResponse(index: number){
   setQuestion( question.answerWith(index))
   console.log(index)
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question value={testQuestion} 
      onResponse={onResponse}/>

    </div>
  )

}
