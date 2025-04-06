"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Gift, TrendingUp } from "lucide-react"
import { leaderboardService } from "@/services/leaderboard-service"

export function LeaderboardSection() {
  const [topDonors, setTopDonors] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTopDonors = async () => {
      try {
        const data = await leaderboardService.getTopDonors()
        setTopDonors(data)
      } catch (error) {
        console.error("Error fetching top donors:", error)
        // Set default empty array if there's an error
        setTopDonors([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchTopDonors()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <p>Loading leaderboard...</p>
      </div>
    )
  }

  // For demo purposes, we'll create some sample donors
  const sampleDonors = [
    {
      id: 1,
      name: "Rahul Sharma",
      donationCount: 42,
      totalItems: 156,
      avatar: "/placeholder.svg?height=100&width=100&text=RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      donationCount: 38,
      totalItems: 124,
      avatar: "/placeholder.svg?height=100&width=100&text=PP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      donationCount: 35,
      totalItems: 112,
      avatar: "/placeholder.svg?height=100&width=100&text=AK",
    },
    {
      id: 4,
      name: "Neha Singh",
      donationCount: 29,
      totalItems: 98,
      avatar: "/placeholder.svg?height=100&width=100&text=NS",
    },
    {
      id: 5,
      name: "Vikram Mehta",
      donationCount: 27,
      totalItems: 89,
      avatar: "/placeholder.svg?height=100&width=100&text=VM",
    },
  ]

  return (
    <div className="py-8">
      <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
        {/* Top 3 donors with special styling */}
        <Card className="overflow-hidden border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -top-1 -right-1">
                  <Award className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-yellow-500">
                  <img
                    src={sampleDonors[0].avatar || "/placeholder.svg"}
                    alt={sampleDonors[0].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">{sampleDonors[0].name}</h3>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Gift className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[0].donationCount} donations</span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[0].totalItems} items donated</span>
              </div>
              <div className="mt-4 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                #1 Top Donor
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -top-1 -right-1">
                  <Award className="h-6 w-6 text-gray-400" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-gray-400">
                  <img
                    src={sampleDonors[1].avatar || "/placeholder.svg"}
                    alt={sampleDonors[1].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-orange-700 dark:text-orange-300">{sampleDonors[1].name}</h3>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Gift className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[1].donationCount} donations</span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[1].totalItems} items donated</span>
              </div>
              <div className="mt-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                #2 Top Donor
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -top-1 -right-1">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-amber-700">
                  <img
                    src={sampleDonors[2].avatar || "/placeholder.svg"}
                    alt={sampleDonors[2].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-orange-700 dark:text-orange-300">{sampleDonors[2].name}</h3>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Gift className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[2].donationCount} donations</span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>{sampleDonors[2].totalItems} items donated</span>
              </div>
              <div className="mt-4 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                #3 Top Donor
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rest of the top donors */}
      <div className="mt-8 grid gap-4">
        {sampleDonors.slice(3).map((donor, index) => (
          <Card key={donor.id} className="border-orange-200 dark:border-orange-900">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                    <span className="text-sm font-medium text-orange-700 dark:text-orange-300">#{index + 4}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-orange-700 dark:text-orange-300">{donor.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {donor.donationCount} donations • {donor.totalItems} items
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                    Top Donor
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

