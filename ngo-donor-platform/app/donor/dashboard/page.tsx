"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Gift, MapPin, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { authService } from "@/services/auth-service"
import { donorService } from "@/services/donor-service"
import { DonorDashboardHeader } from "@/components/donor/dashboard-header"
import { DonationsList } from "@/components/donor/donations-list"
import { NgoList } from "@/components/donor/ngo-list"

export default function DonorDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [stats, setStats] = useState({
    totalDonated: 0,
    ngosSupported: 0,
  })

  useEffect(() => {
    const currentUser = authService.getCurrentUser()

    if (!currentUser || currentUser.role !== "donor") {
      router.push("/login")
      return
    }

    setUser(currentUser)

    const fetchDashboardData = async () => {
      try {
        const dashboardData = await donorService.getDashboardData()
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
          <DonorDashboardHeader user={user} stats={stats} />

          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for NGOs, items to donate..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="ngos" className="mt-6">
            <TabsList>
              <TabsTrigger value="ngos">NGOs</TabsTrigger>
              <TabsTrigger value="donations">My Donations</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Donations</TabsTrigger>
            </TabsList>
            <TabsContent value="ngos" className="mt-6">
              <NgoList searchQuery={searchQuery} />
            </TabsContent>
            <TabsContent value="donations" className="mt-6">
              <DonationsList />
            </TabsContent>
            <TabsContent value="scheduled" className="mt-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-700 dark:text-orange-300">Upcoming Donations</CardTitle>
                    <CardDescription>Your scheduled donations that are pending pickup or delivery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-orange-700 dark:text-orange-300">
                              Child Education Foundation
                            </h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Scheduled for: 15 May 2023, 10:00 AM</span>
                            </div>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>Pickup from your address</span>
                            </div>
                            <div className="mt-2">
                              <Badge
                                variant="outline"
                                className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                              >
                                <Gift className="mr-1 h-3 w-3" />3 items
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                            >
                              View Details
                            </Button>
                            <Button variant="destructive" size="sm">
                              Cancel
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-2">Items to be donated:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm flex justify-between">
                              <span>School Textbooks</span>
                              <span>10 pcs</span>
                            </li>
                            <li className="text-sm flex justify-between">
                              <span>Notebooks</span>
                              <span>20 pcs</span>
                            </li>
                            <li className="text-sm flex justify-between">
                              <span>School Bags</span>
                              <span>5 pcs</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-orange-700 dark:text-orange-300">Food for All</h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Scheduled for: 20 May 2023, 2:00 PM</span>
                            </div>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>You will visit the NGO</span>
                            </div>
                            <div className="mt-2">
                              <Badge
                                variant="outline"
                                className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                              >
                                <Gift className="mr-1 h-3 w-3" />2 items
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                            >
                              View Details
                            </Button>
                            <Button variant="destructive" size="sm">
                              Cancel
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-2">Items to be donated:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm flex justify-between">
                              <span>Rice</span>
                              <span>25 kg</span>
                            </li>
                            <li className="text-sm flex justify-between">
                              <span>Pulses</span>
                              <span>10 kg</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

