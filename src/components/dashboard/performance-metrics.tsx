import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, ArrowDownRight, Users, MessageSquare, Target } from 'lucide-react'

export function PerformanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Performance</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-2xl font-bold">89.12%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground">-2% from last month</p>
            </div>
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

