"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { authService } from "@/services/auth-service"
import { NgoDashboardHeader } from "@/components/ngo/dashboard-header"
import { DonationsList } from "@/components/ngo/donations-list"
import { UrgentNeedsList } from "@/components/ngo/urgent-needs-list"

export default function NgoDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    totalDonations: 0,
    pendingDonations: 0,
    totalDonors: 0,
  })

  useEffect(() => {
    const currentUser = authService.getCurrentUser()

    if (!currentUser || currentUser.role !== "ngo") {
      router.push("/login")
      return
    }

    setUser(currentUser)

    const fetchDashboardData = async () => {
      try {
        // This would be replaced with actual API call
        // const dashboardData = await ngoService.getDashboardData()

        // Mock data for demo
        const dashboardData = {
          stats: {
            totalDonations: 42,
            pendingDonations: 5,
            totalDonors: 28,
          },
        }

        setStats(dashboardData.stats)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading dashboard...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-6 bg-orange-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <NgoDashboardHeader user={user} stats={stats} />

          <Tabs defaultValue="donations" className="mt-6">
            <TabsList>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="urgent-needs">Urgent Needs</TabsTrigger>
              <TabsTrigger value="visitors">Profile Visitors</TabsTrigger>
            </TabsList>
            <TabsContent value="donations" className="mt-6">
              <DonationsList />
            </TabsContent>
            <TabsContent value="urgent-needs" className="mt-6">
              <UrgentNeedsList />
            </TabsContent>
            <TabsContent value="visitors" className="mt-6">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Profile Visitors</CardTitle>
                  <CardDescription>See who has viewed your NGO profile recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center dark:bg-orange-900">
                            <Users className="h-5 w-5 text-orange-700 dark:text-orange-300" />
                          </div>
                          <div>
                            <p className="font-medium text-orange-700 dark:text-orange-300">Visitor {i}</p>
                            <p className="text-sm text-muted-foreground">
                              Viewed your profile {i === 1 ? "today" : i === 2 ? "yesterday" : `${i} days ago`}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                        >
                          {i === 1 || i === 3 ? "Potential Donor" : "Visitor"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

