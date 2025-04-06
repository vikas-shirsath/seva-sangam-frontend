import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Search } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
  user: any
  stats: {
    totalDonated: number
    ngosSupported: number
  }
}

export function DonorDashboardHeader({ user, stats }: DashboardHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-orange-700 dark:text-orange-300">
            Welcome, {user?.name || "Donor"}
          </h1>
          <p className="text-muted-foreground">Here's your donation dashboard</p>
        </div>
        <div className="mt-4 flex space-x-2 md:mt-0">
          <Link href="/ngos">
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
            >
              <Search className="mr-2 h-4 w-4" />
              Find NGOs
            </Button>
          </Link>
          <Link href="/donate">
            <Button
              size="sm"
              className="h-9 bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              <Gift className="mr-2 h-4 w-4" />
              Donate Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.totalDonated}</span>
              <span className="text-xs text-muted-foreground">Total Items Donated</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.ngosSupported}</span>
              <span className="text-xs text-muted-foreground">NGOs Supported</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

