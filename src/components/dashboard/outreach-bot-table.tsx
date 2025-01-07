import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  
  export function OutreachBotTable() {
    const bots = [
      {
        name: 'Sales Bot',
        messages: 1234,
        responses: 890,
        conversions: 123,
        revenue: '$4,567',
      },
      {
        name: 'Lead Bot',
        messages: 5678,
        responses: 4321,
        conversions: 234,
        revenue: '$8,901',
      },
      {
        name: 'Email Bot',
        messages: 9012,
        responses: 7890,
        conversions: 345,
        revenue: '$12,345',
      },
    ]
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Outreach Bot</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Messages</TableHead>
                <TableHead>Responses</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bots.map((bot) => (
                <TableRow key={bot.name}>
                  <TableCell>{bot.name}</TableCell>
                  <TableCell>{bot.messages}</TableCell>
                  <TableCell>{bot.responses}</TableCell>
                  <TableCell>{bot.conversions}</TableCell>
                  <TableCell className="text-right">{bot.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
  
  