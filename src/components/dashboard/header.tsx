import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-64 rounded-md border border-input bg-background pl-8 pr-3 text-sm"
          />
        </div>
        <Button variant="default">+ Create New Agent</Button>
      </div>
    </div>
  )
}

