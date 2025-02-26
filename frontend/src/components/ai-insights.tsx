import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp } from "lucide-react"

interface AiData {
  trends: {
    title: string
    description: string
  }[]
  recommendations: string[]
}

interface AiInsightsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AiInsights({ className, ...props }: AiInsightsProps) {
  const [data, setData] = useState<AiData | null>(null)
  const [city, setCity] = useState("mumbai")

  useEffect(() => {
    async function fetchAiInsights() {
      try {
        const [trendsRes, recommendationsRes] = await Promise.all([
          fetch(`/api/ai/trends/${city}`),
          fetch(`/api/ai/recommendations/${city}`),
        ])
        const trends = await trendsRes.json()
        const recommendations = await recommendationsRes.json()
        setData({ trends, recommendations })
      } catch (error) {
        console.error("Error fetching AI insights:", error)
      }
    }

    fetchAiInsights()
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
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4" />
                Climate Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.trends.map((trend, i) => (
                  <li key={i}>
                    <h4 className="font-semibold">{trend.title}</h4>
                    <p className="text-sm text-muted-foreground">{trend.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="h-4 w-4" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.recommendations.map((recommendation, i) => (
                  <li key={i} className="text-sm">
                    {recommendation}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

