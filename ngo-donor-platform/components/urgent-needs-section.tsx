"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowRight } from "lucide-react"
import { ngoService } from "@/services/ngo-service"

export function UrgentNeedsSection() {
  const [urgentNeeds, setUrgentNeeds] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUrgentNeeds = async () => {
      try {
        const data = await ngoService.getUrgentNeeds()
        setUrgentNeeds(data)
      } catch (error) {
        console.error("Error fetching urgent needs:", error)
        // Set default empty array if there's an error
        setUrgentNeeds([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchUrgentNeeds()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <p>Loading urgent needs...</p>
      </div>
    )
  }

  // For demo purposes, we'll create some sample urgent needs
  const sampleUrgentNeeds = [
    {
      id: 1,
      ngo: {
        id: 1,
        name: "Child Education Foundation",
        location: "Mumbai, Maharashtra",
      },
      items: [
        { name: "School Textbooks", quantity: 50 },
        { name: "Notebooks", quantity: 100 },
        { name: "School Bags", quantity: 30 },
      ],
      urgencyLevel: "high",
    },
    {
      id: 2,
      ngo: {
        id: 2,
        name: "Rural Healthcare Initiative",
        location: "Pune, Maharashtra",
      },
      items: [
        { name: "First Aid Kits", quantity: 20 },
        { name: "Blankets", quantity: 40 },
        { name: "Medicines", quantity: 100 },
      ],
      urgencyLevel: "medium",
    },
    {
      id: 3,
      ngo: {
        id: 3,
        name: "Food for All",
        location: "Delhi, NCR",
      },
      items: [
        { name: "Rice (kg)", quantity: 200 },
        { name: "Pulses (kg)", quantity: 100 },
        { name: "Cooking Oil (L)", quantity: 50 },
      ],
      urgencyLevel: "high",
    },
    {
      id: 4,
      ngo: {
        id: 4,
        name: "Women Empowerment Trust",
        location: "Bangalore, Karnataka",
      },
      items: [
        { name: "Sewing Machines", quantity: 10 },
        { name: "Fabric (meters)", quantity: 200 },
        { name: "Sewing Kits", quantity: 25 },
      ],
      urgencyLevel: "medium",
    },
  ]

  return (
    <div className="py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {sampleUrgentNeeds.map((need) => (
          <Card key={need.id} className="border-orange-200 dark:border-orange-900">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-orange-700 dark:text-orange-300">{need.ngo.name}</h3>
                    <p className="text-sm text-muted-foreground">{need.ngo.location}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`
                      ${
                        need.urgencyLevel === "high"
                          ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                      }
                    `}
                  >
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    {need.urgencyLevel === "high" ? "Urgent" : "Needed Soon"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-orange-700 dark:text-orange-300">Items Needed:</h4>
                  <ul className="space-y-1">
                    {need.items.map((item, index) => (
                      <li key={index} className="flex items-center justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-medium">{item.quantity} needed</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <Link href={`/ngos/${need.ngo.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:text-orange-400 dark:hover:text-orange-300 dark:hover:bg-orange-950"
                    >
                      View NGO
                    </Button>
                  </Link>
                  <Link href={`/donate/${need.ngo.id}`}>
                    <Button
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                    >
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

