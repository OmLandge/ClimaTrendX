import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const hourlyData = [
  { time: "Now", temp: 27, icon: Sun, precipitation: 23 },
  { time: "11:00", temp: 28, icon: Sun, precipitation: 29 },
  { time: "12:00", temp: 28, icon: Cloud, precipitation: 58 },
  { time: "13:00", temp: 29, icon: Cloud, precipitation: 76 },
  { time: "14:00", temp: 30, icon: Sun, precipitation: 33 },
  { time: "15:00", temp: 29, icon: CloudRain, precipitation: 20 },
  { time: "16:00", temp: 29, icon: CloudRain, precipitation: 73 },
  { time: "17:00", temp: 28, icon: Sun, precipitation: 49 },
]

const chartData = hourlyData.map((item) => ({
  time: item.time,
  temperature: item.temp,
  precipitation: item.precipitation,
}))

export function HourlyForecast() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Upcoming hours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between">
            {hourlyData.map((hour, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-sm font-medium">{hour.time}</div>
                <hour.icon className="my-2 h-6 w-6 text-primary" />
                <div className="text-sm font-bold">{hour.temp}°</div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[120px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--gradient-from)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--gradient-to)" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip labelClassName="text-black" />
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="var(--gradient-from)"
                fillOpacity={1}
                fill="url(#colorTemp)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between mt-2">
          {hourlyData.map((hour, i) => (
            <div key={i} className="text-xs text-center">
              {hour.precipitation}%
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

