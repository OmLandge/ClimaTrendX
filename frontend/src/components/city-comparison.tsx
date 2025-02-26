import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Wind, Droplet, Cloud } from "lucide-react"

const cityData = [
  {
    name: "Mumbai",
    temp: 27,
    condition: "Sunny",
    wind: 8,
    humidity: 82,
  },
  {
    name: "Delhi",
    temp: 18,
    condition: "Cloudy",
    wind: 4,
    humidity: 90,
  },
  {
    name: "Bangalore",
    temp: 24,
    condition: "Partly Cloudy",
    wind: 3,
    humidity: 85,
  },
  {
    name: "Chennai",
    temp: 30,
    condition: "Sunny",
    wind: 6,
    humidity: 80,
  },
]

export function CityComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Cities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cityData.map((city, i) => (
          <Card key={i} className="bg-muted/50">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-medium">{city.name}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Wind className="h-3 w-3" />
                      <span>{city.wind} km/h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Droplet className="h-3 w-3" />
                      <span>{city.humidity}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">{city.temp}°</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

