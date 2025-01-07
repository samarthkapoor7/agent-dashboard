'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronDown, LayoutDashboard, Users, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <div className="w-64 border-r bg-background">
      <div className="flex h-full flex-col">
        <div className="p-4">
          <Button className="w-full" variant="default">
            + Create New Agent
          </Button>
        </div>
        
        <nav className="flex-1 space-y-1 p-2">
          <Link 
            href="/overview"
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md",
              pathname === '/overview' ? 'bg-secondary' : 'hover:bg-secondary/50'
            )}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </Link>
          
          <div>
            <div className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary/50">
              <Users className="mr-2 h-4 w-4" />
              Agents
              <ChevronDown className="ml-auto h-4 w-4" />
            </div>
            <div className="pl-8 space-y-1">
              <Link 
                href="/agents/voice"
                className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary/50"
              >
                Voice Agents
              </Link>
              <Link 
                href="/agents/chat"
                className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary/50"
              >
                Chat Bots
              </Link>
              <Link 
                href="/agents/outreach"
                className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary/50"
              >
                Outreach Bots
              </Link>
            </div>
          </div>
          
          <Link 
            href="/settings"
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md",
              pathname === '/settings' ? 'bg-secondary' : 'hover:bg-secondary/50'
            )}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </nav>
        
        <div className="border-t p-4">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

