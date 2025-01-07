import { DashboardHeader } from '@/components/dashboard/header'
import { PerformanceMetrics } from '@/components/dashboard/performance-metrics'
import { AgentOverview } from '@/components/dashboard/agent-overview'
import { VoiceAgentData } from '@/components/dashboard/voice-agent-data'
import { OutreachData } from '@/components/dashboard/outreach-data'
import { OutreachMessages } from '@/components/dashboard/outreach-messages'
import { OutreachBotTable } from '@/components/dashboard/outreach-bot-table'

export default function OverviewPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <DashboardHeader />
      <PerformanceMetrics />
      <AgentOverview />
      <VoiceAgentData />
      <OutreachData />
      <OutreachMessages />
      <OutreachBotTable />
    </div>
  )
}

