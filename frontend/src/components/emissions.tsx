import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface EmissionsData {
  co2: number
  ch4: number
  n2o: number
  timestamp: string
}

interface EmissionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Emissions({ className, ...props }: EmissionsProps) {
  const [data, setData] = useState<EmissionsData[]>([])
  const [city, setCity] = useState("mumbai")

  useEffect(() => {
    async function fetchEmissions() {
      try {
        const response = await fetch(`/api/emissions/${city}`)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error("Error fetching emissions data:", error)
      }
    }

    fetchEmissions()
  }, [city])

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Emissions Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="co2" fill="#8884d8" name="CO2" />
              <Bar dataKey="ch4" fill="#82ca9d" name="CH4" />
              <Bar dataKey="n2o" fill="#ffc658" name="N2O" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

