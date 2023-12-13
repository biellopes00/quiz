
import Quiz from "@/components/Quiz";
import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";
import { useEffect, useState } from "react";


const testQuestion = new QuestionModel(1, 'melhor cor', [
  AnswerModel.wrong('verde'),
  AnswerModel.wrong('preto'),
  AnswerModel.wrong('azul'),
  AnswerModel.right('roxo')
])

const BASE_URL = 'http://localhost:3000/api'
export default function Home() {

  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [question, setQuestion] = useState(testQuestion)

  async function loadingIdQuiz() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsId = await resp.json()
    setQuestionsId(questionsId)
  }

  async function loadingQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const questionsId = await resp.json()
    setQuestionsId(questionsId)
  }

  useEffect(() => {
    loadingIdQuiz()
  }, [])

  function questionAnswered(question: QuestionModel) {

  }

  function nextStep() {

  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Quiz
        question={question}
        lastQuestion={false}
        questionAnswered={questionAnswered}
        nextStep={nextStep}
      />

    </div>
  )

}
