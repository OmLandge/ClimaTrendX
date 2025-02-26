import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Wind, Droplet } from "lucide-react"

export function CurrentWeather() {
  return (
    <Card className="overflow-hidden bg-gradient-to-b from-teal-400 to-teal-600 text-primary-foreground dark:from-teal-200 dark:to-teal-400">
      <CardContent className="p-0">
        <div className="relative p-6 h-full">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5" />
            <h2 className="text-lg font-medium">Mumbai</h2>
          </div>
          <div className="text-sm mb-6">Today, 20 January</div>

          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-8xl font-bold mb-2">27°</div>
            <div className="text-xl">Sunny</div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5" />
              <span>Wind</span>
              <span className="font-medium">8 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              <span>Humidity</span>
              <span className="font-medium">82%</span>
            </div>
          </div>

          {/* City skyline silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20">
            <div className="w-full h-full bg-[url('/placeholder.svg?height=100&width=400')] bg-bottom bg-no-repeat"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

