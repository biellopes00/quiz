
import Quiz from "@/components/Quiz";
import QuestionModel from "@/model/question";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";



const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter();
  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswers, setRightAnswers] = useState<number>(0)

  async function loadingIdQuiz() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsId = await resp.json()
    setQuestionsId(questionsId)
  }

  async function loadingQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createFromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadingIdQuiz()
  }, [])

  useEffect(() => {
    questionsId.length > 0 && loadingQuestion(questionsId[0])
  }, [questionsId])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const right = questionAnswered.rightAnswer
    setRightAnswers(rightAnswers + (right ? 1 : 0))
  }

  function nextQuestionId() {
    const nextIndex = questionsId.indexOf(question?.id || -1) + 1 // Use -1 como valor padrão se question for undefined
    return nextIndex < questionsId.length ? questionsId[nextIndex] : undefined
  }

  function nextStep() {
    const nextId = nextQuestionId()
    nextId ? nextQuestion(nextId) : finish()
  }

  function nextQuestion(nextId: number) {
    loadingQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsId.length,
        right: rightAnswers
      }

    })

  }

  return question ?
    <Quiz
      question={question}
      lastQuestion={nextQuestionId() === undefined}
      questionAnswered={questionAnswered}
      nextStep={nextStep} />
    : false
}
