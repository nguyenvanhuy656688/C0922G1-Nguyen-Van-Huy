export interface Quiz {
  category:string
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers:string[]
  answer:string
  time:number
  statusAnswer:string
}
