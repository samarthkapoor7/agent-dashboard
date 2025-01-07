import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  
  export function AgentOverview() {
    const agents = [
      {
        name: 'Voice Agent Pro',
        status: 'Not Assigned',
        date: '2024-01-07',
        amount: '$299.99',
      },
      {
        name: 'Voice Agent Plus',
        status: 'Not Assigned',
        date: '2024-01-07',
        amount: '$199.99',
      },
      {
        name: 'Voice Agent Basic',
        status: 'Not Assigned',
        date: '2024-01-07',
        amount: '$99.99',
      },
    ]
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Agent Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow key={agent.name}>
                  <TableCell>{agent.name}</TableCell>
                  <TableCell>{agent.status}</TableCell>
                  <TableCell>{agent.date}</TableCell>
                  <TableCell className="text-right">{agent.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
  
  