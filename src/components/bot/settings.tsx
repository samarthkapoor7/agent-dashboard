'use client'

import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export function BotSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Basic Settings</h1>
        <p className="text-sm text-muted-foreground">Train Your Bot</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Target Audience</Label>
          <Textarea placeholder="Describe your target audience..." />
        </div>

        <div className="space-y-2">
          <Label>Problem to Solve</Label>
          <Textarea placeholder="What problem does your solution address?" />
        </div>

        <div className="space-y-2">
          <Label>How Will You Solve It</Label>
          <Textarea placeholder="Describe your solution approach..." />
        </div>

        <div className="space-y-2">
          <Label>Difference Between You and Others</Label>
          <Textarea placeholder="What makes your solution unique?" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Targeting Keywords and Subreddits</h2>
          <div className="flex items-center gap-2 mt-2">
            <Label htmlFor="auto-replies">Auto Replies</Label>
            <Switch id="auto-replies" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Keywords</Label>
          <div className="flex flex-wrap gap-2">
            <Badge>marketing</Badge>
            <Badge>automation</Badge>
            <Badge>socialmedia</Badge>
            <Input placeholder="Add custom keyword..." className="w-40" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Subreddits</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="marketing" />
              <label htmlFor="marketing">r/marketing</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="socialmedia" />
              <label htmlFor="socialmedia">r/socialmedia</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="digitalmarketing" />
              <label htmlFor="digitalmarketing">r/digitalmarketing</label>
            </div>
            <Input placeholder="Search subreddits..." />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Bot Profile</h2>
        <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground">Combined Karma</p>
            <p className="text-2xl font-semibold">142</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Post Karma</p>
            <p className="text-2xl font-semibold">89</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Marketing Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Keywords/Subreddits</th>
                <th className="text-left p-2">r/marketing</th>
                <th className="text-left p-2">r/socialmedia</th>
                <th className="text-left p-2">r/digitalmarketing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">marketing</td>
                <td className="p-2">45</td>
                <td className="p-2">32</td>
                <td className="p-2">29</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">automation</td>
                <td className="p-2">23</td>
                <td className="p-2">18</td>
                <td className="p-2">15</td>
              </tr>
              <tr>
                <td className="p-2">social media</td>
                <td className="p-2">67</td>
                <td className="p-2">59</td>
                <td className="p-2">41</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

