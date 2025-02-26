import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CurrentWeather } from "@/components/current-weather"
import { HourlyForecast } from "@/components/hourly-forecast"
import { WeatherDetails } from "@/components/weather-details"
import { CityComparison } from "@/components/city-comparison"
import { WeatherTrends } from "@/components/weather-trends"
import { ForecastCard } from "@/components/forecast-card"

function App() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-3">
          <CurrentWeather />
        </div>
        <div className="col-span-full lg:col-span-4 space-y-4">
          <HourlyForecast />
          <WeatherDetails />
        </div>
        <div className="col-span-full lg:col-span-3">
          <CityComparison />
        </div>
        <div className="col-span-full lg:col-span-4 space-y-4">
          <WeatherTrends />
          <ForecastCard />
        </div>
      </div>
    </DashboardShell>
  )
}

export default App
