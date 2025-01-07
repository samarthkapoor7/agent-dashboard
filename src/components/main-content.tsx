'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Upload } from 'lucide-react'

export function MainContent() {
  const [files, setFiles] = useState<File[]>([])

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...droppedFiles])
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="h-full px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Sales Agent</h1>
          <p className="text-sm text-muted-foreground">Last modified: Jan 15, 2023</p>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="basic">Basic Setting</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="talk">Talk to the Agent</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Voice Settings</h2>
              <div className="bg-secondary/30 p-4 rounded-md">
                Preview content here
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Phone Numbers</h2>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Number:</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <Button>Purchase New Number</Button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">Prompt Settings</h2>
              <Textarea 
                placeholder="Define agent behavior..."
                className="min-h-[100px]"
              />
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">Knowledge Base</h2>
              <div 
                className="border-2 border-dashed rounded-lg p-8 text-center"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
              >
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p>Drag and drop files here or click to upload</p>
                </div>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between mt-4 p-2 bg-secondary/30 rounded">
                    <span>{file.name}</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Download</Button>
                      <Button variant="ghost" size="sm">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="basic">Basic settings content</TabsContent>
          <TabsContent value="workflow">Workflow content</TabsContent>
          <TabsContent value="talk">Talk to agent content</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

