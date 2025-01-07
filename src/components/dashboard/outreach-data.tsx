import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OutreachData() {
  const metrics = [
    {
      title: "Messages Sent",
      value: "100",
      change: "+18%",
    },
    {
      title: "Response Rate",
      value: "500",
      change: "-14%",
    },
    {
      title: "Conversion Rate",
      value: "$20",
      change: "-7.5%",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outreach Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.title} className="space-y-1">
              <p className="text-sm text-muted-foreground">{metric.title}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change} from last period
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

