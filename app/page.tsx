"use client"
import { ConfettiButton } from "@/components/ui/confetti"
import SparklesText from "@/components/ui/sparkles-text"
import RetroGrid from "@/components/ui/retro-grid"
import { useEffect, useState } from "react"

interface Difference {
  years: number,
  months: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

export default function Index() {
  const [difference, setDifference] = useState<Difference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const currentDate = new Date()
  const initialDate = new Date('2024-03-03T00:00:00')

  function calculateDateDifference(dataInicial: Date): Difference {
    const dataAtual = new Date()

    let diferenca = dataAtual.getTime() - dataInicial.getTime()

    let seconds = Math.floor(diferenca / 1000)
    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60

    let hours = Math.floor(minutes / 60)
    minutes = minutes % 60

    let days = Math.floor(hours / 24)
    hours = hours % 24

    let months = Math.floor(days / 30)
    days = days % 30

    let years = Math.floor(months / 12)
    months = months % 12

    return { years, months, days, hours, minutes, seconds }
  }

  const isSpecialDay = currentDate.getDate() === 3

  useEffect(() => {
    setInterval(() => {
      console.log(calculateDateDifference(initialDate))
      const dif = calculateDateDifference(initialDate)
      setDifference(dif)
    }, 1000)
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p>
        we have been in <span className="text-red-500"> love </span> for
      </p>
      <SparklesText
        className={`date f1 ${isSpecialDay ? "text-red-500" : ""
          }`}
        text={`${difference.years} year ${difference.months} month ${difference.days} day`}
      />
      <SparklesText
        className={`clock f2 ${isSpecialDay ? "text-red-500" : ""
          }`}
        text={`${difference.hours} hour ${difference.minutes} minutes ${difference.seconds} seconds`}
      />
      <RetroGrid />

      {isSpecialDay ? (
        <ConfettiButton className="mt-3"> Celebrate 🎉 </ConfettiButton>
      ) : null}
    </div>
  )
}

