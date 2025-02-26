import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "@/components/search"
import { Card } from "@/components/ui/card"
import { Cloud } from "lucide-react"
import { useState } from "react"

export function DashboardHeader() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Format date as "Saturday, 20 January 2024"
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  // Format time as "7:32 AM"
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  return (
    <Card className="flex items-center justify-between flex-row p-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Cloud className="h-7 w-7 text-teal-600" />
          <h1 className="text-xl font-semibold">ClimaTrend<span className="text-teal-600">X</span></h1>
        </div>
        <div className="hidden md:block border-l pl-4 ml-2">
          <div className="text-lg font-semibold">{formattedTime}</div>
          <div className="text-sm text-muted-foreground">{formattedDate}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search />
        <ModeToggle />
      </div>
    </Card>
  )
}

