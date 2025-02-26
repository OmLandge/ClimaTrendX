import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Cloud, CloudRain, Sun } from "lucide-react"

const forecastData = [
  { day: "Sat", date: "20 Jan", temp: 15, icon: Sun },
  { day: "Sun", date: "21 Jan", temp: 17, icon: CloudRain },
  { day: "Mon", date: "22 Jan", temp: 17, icon: CloudRain },
  { day: "Tue", date: "23 Jan", temp: 17, icon: CloudRain },
  { day: "Wed", date: "24 Jan", temp: 17, icon: Cloud },
  { day: "Thu", date: "25 Jan", temp: 17, icon: Sun },
  { day: "Fri", date: "26 Jan", temp: 17, icon: Cloud },
  { day: "Sat", date: "27 Jan", temp: 17, icon: Cloud },
  { day: "Sun", date: "28 Jan", temp: 17, icon: Cloud },
]

export function ForecastCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Next 10 Days</CardTitle>
        <div className="flex items-center gap-1">
          <button className="rounded-full p-1 hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-full p-1 hover:bg-muted">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {forecastData.slice(0, 5).map((day, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex flex-col">
                <div className="font-medium">{day.day}</div>
                <div className="text-sm text-muted-foreground">{day.date}</div>
              </div>
              <day.icon className="h-6 w-6 text-primary" />
              <div className="text-lg font-bold">{day.temp}°</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

