import type React from "react"
import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background items-center">
      <div className="container flex-1 gap-12 p-4 md:p-6 2xl:p-8">
        <div className={cn("flex-1 space-y-4", className)} {...props}>
          {children}
        </div>
      </div>
    </div>
  )
}

