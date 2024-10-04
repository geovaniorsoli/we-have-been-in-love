"use client"
import { ConfettiButton } from "@/components/ui/confetti";
import SparklesText from "@/components/ui/sparkles-text"

export default function Index() {
  const currentDate = new Date()
  const initialDate = new Date(2024, 3, 3)

  const calculateDateDifference = (startDate: Date, endDate: Date) => {
    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = (endDate.getMonth() + 2) - startDate.getMonth()
    let days = endDate.getDate() - startDate.getDate()
    return { years, months, days}
  }

  const { years, months, days} = calculateDateDifference(initialDate, currentDate)

  const theDate = new Date(3).getDate
  // if(currentDate == theDate){

  // }
  return (
    <>
      <div className="container">
        <h1 className="clock">
          <SparklesText text="testo" />
          {years} anos {months} meses {days} dias 

          <ConfettiButton> teste </ConfettiButton>
        </h1>
      </div>
    </>
  )
}
