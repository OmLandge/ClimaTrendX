import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Sun, Moon } from "lucide-react"

const trendData = [
  { time: "8 AM", temp: 13 },
  { time: "9 AM", temp: 14 },
  { time: "10 AM", temp: 15 },
  { time: "11 AM", temp: 16 },
  { time: "12 PM", temp: 16 },
  { time: "1 PM", temp: 15 },
  { time: "2 PM", temp: 14 },
  { time: "3 PM", temp: 13 },
  { time: "4 PM", temp: 12 },
  { time: "5 PM", temp: 11 },
  { time: "6 PM", temp: 10 },
  { time: "7 PM", temp: 10 },
]

export function WeatherTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip labelClassName="text-black" />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="var(--gradient-from)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="text-sm">Sunrise</div>
            <div className="flex items-center gap-1">
              <Sun className="h-4 w-4 text-primary" />
              <span className="font-medium">6:30 AM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm">Sunset</div>
            <div className="flex items-center gap-1">
              <Moon className="h-4 w-4 text-primary" />
              <span className="font-medium">5:30 PM</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

