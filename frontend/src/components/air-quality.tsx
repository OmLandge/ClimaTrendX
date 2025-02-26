import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind } from "lucide-react"

interface AirQualityData {
  aqi: number
  mainPollutant: string
  quality: string
}

interface AirQualityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AirQuality({ className, ...props }: AirQualityProps) {
  const [data, setData] = useState<AirQualityData | null>(null)
  const [city, setCity] = useState("mumbai")

  useEffect(() => {
    async function fetchAirQuality() {
      try {
        const response = await fetch(`/api/airquality/${city}`)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error("Error fetching air quality data:", error)
      }
    }

    fetchAirQuality()
  }, [city])

  if (!data) {
    return (
      <Card className={className}>
        <CardContent>Loading...</CardContent>
      </Card>
    )
  }

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Air Quality Index</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-6">
          <Wind className="h-16 w-16 text-primary mb-4" />
          <div className="text-5xl font-bold mb-2">{data.aqi}</div>
          <div className="text-xl font-semibold mb-2">{data.quality}</div>
          <p className="text-sm text-muted-foreground">Main Pollutant: {data.mainPollutant}</p>
        </div>
      </CardContent>
    </Card>
  )
}

