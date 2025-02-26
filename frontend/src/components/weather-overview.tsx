import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Wind } from "lucide-react"

interface WeatherOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WeatherOverview({ className, ...props }: WeatherOverviewProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Thermometer className="h-12 w-12 text-primary mb-4" />
              <div className="text-4xl font-bold">27°C</div>
              <p className="text-sm text-muted-foreground mt-2">Temperature</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <div className="text-4xl font-bold">82%</div>
              <p className="text-sm text-muted-foreground mt-2">Humidity</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Wind className="h-12 w-12 text-primary mb-4" />
              <div className="text-4xl font-bold">8km/h</div>
              <p className="text-sm text-muted-foreground mt-2">Wind Speed</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

