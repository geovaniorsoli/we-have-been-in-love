"use client"
import Confetti, { ConfettiButton } from "@/components/ui/confetti"
import SparklesText from "@/components/ui/sparkles-text"
import RetroGrid from "@/components/ui/retro-grid"
import { useEffect, useRef } from "react"

export default function Index() {
  const currentDate = new Date()
  const initialDate = new Date(2024, 3, 3)

  const calculateDateDifference = (startDate: Date, endDate: Date) => {
    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = (endDate.getMonth() + 2) - startDate.getMonth()
    let days = endDate.getDate() - startDate.getDate()
    return { years, months, days }
  }

  const { years, months, days } = calculateDateDifference(initialDate, currentDate)

  const isSpecialDay = currentDate.getDate() === 3

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <p>
          we have been in <span className="text-red-500"> love </span> for
        </p>
        <SparklesText
          className={`clock ${isSpecialDay ? "text-red-500" : ""
            }`}
          text={`${years} year ${months} month ${days} day`}
        />
        <RetroGrid />

        {isSpecialDay ? (
          <ConfettiButton className="mt-3"> Celebrate 🎉 </ConfettiButton>
        ) : null}

      </div>



    </>
  )
}

