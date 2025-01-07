import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'

export function VoiceAgentData() {
  const metrics = [
    {
      title: "Total Conversations",
      value: "500",
      change: "+14%",
    },
    {
      title: "Average Duration",
      value: "3:00",
      change: "+8%",
    },
    {
      title: "Success Rate",
      value: "85%",
      change: "+12%",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8",
      change: "+5%",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Agent Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="space-y-2">
              <p className="text-sm text-muted-foreground">{metric.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="h-4 w-4" />
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

