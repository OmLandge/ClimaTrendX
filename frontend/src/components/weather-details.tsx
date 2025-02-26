import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, Wind, Sun } from "lucide-react"

export function WeatherDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>More details of today's weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Humidity</h3>
                <Droplet className="h-5 w-5 text-teal-500" />
              </div>
              <div className="text-2xl font-bold mb-1">
                82% <span className="text-sm font-normal text-muted-foreground">bad</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: "82%" }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>good</span>
                <span>normal</span>
                <span>bad</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Wind</h3>
                <Wind className="h-5 w-5 text-teal-500" />
              </div>
              <div className="text-2xl font-bold mb-4">8 km/h</div>
              <div className="relative h-20 w-20 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-muted"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-16 bg-teal-500 rounded-full origin-center rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-teal-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Precipitation</h3>
                <Sun className="h-5 w-5 text-teal-500" />
              </div>
              <div className="text-2xl font-bold mb-1">1.4 cm</div>
              <div className="flex h-2 space-x-1">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((value, i) => (
                  <div
                    key={i}
                    className={`h-full rounded-full ${i < 4 ? "bg-teal-500" : "bg-muted"}`}
                    style={{ width: "10%" }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

