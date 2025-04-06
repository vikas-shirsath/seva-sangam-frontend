import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Settings } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
  user: any
  stats: {
    totalDonations: number
    pendingDonations: number
    totalDonors: number
  }
}

export function NgoDashboardHeader({ user, stats }: DashboardHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-orange-700 dark:text-orange-300">
            Welcome, {user?.name || "Organization"}
          </h1>
          <p className="text-muted-foreground">Manage your donations and urgent needs</p>
        </div>
        <div className="mt-4 flex space-x-2 md:mt-0">
          <Link href="/ngo/profile">
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </Link>
          <Link href="/ngo/settings">
            <Button
              size="sm"
              className="h-9 bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.totalDonations}</span>
              <span className="text-xs text-muted-foreground">Total Donations</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.pendingDonations}</span>
              <span className="text-xs text-muted-foreground">Pending Donations</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.totalDonors}</span>
              <span className="text-xs text-muted-foreground">Total Donors</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

