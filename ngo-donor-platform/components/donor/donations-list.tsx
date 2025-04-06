"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { donorService } from "@/services/donor-service"
import Link from "next/link"
import { Calendar, Gift, MapPin } from "lucide-react"

export function DonationsList() {
  const [donations, setDonations] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await donorService.getDonations()
        setDonations(data)
      } catch (error) {
        console.error("Error fetching donations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDonations()
  }, [])

  if (isLoading) {
    return <p>Loading donations...</p>
  }

  if (donations.length === 0) {
    return (
      <Card className="border-orange-200 dark:border-orange-900">
        <CardHeader>
          <CardTitle className="text-orange-700 dark:text-orange-300">No donations yet</CardTitle>
          <CardDescription>
            You haven't made any donations yet. Start supporting NGOs by donating items they need.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/ngos">
            <Button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">
              Browse NGOs
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  // For demo purposes, we'll create some sample donations
  const sampleDonations = [
    {
      id: 1,
      date: "2023-04-15",
      ngo: {
        id: 1,
        name: "Child Education Foundation",
      },
      items: [
        { name: "School Textbooks", quantity: 10 },
        { name: "Notebooks", quantity: 20 },
        { name: "School Bags", quantity: 5 },
      ],
      deliveryMethod: "pickup",
      status: "completed",
    },
    {
      id: 2,
      date: "2023-03-22",
      ngo: {
        id: 2,
        name: "Food for All",
      },
      items: [
        { name: "Rice", quantity: 25 },
        { name: "Pulses", quantity: 10 },
      ],
      deliveryMethod: "self",
      status: "completed",
    },
    {
      id: 3,
      date: "2023-02-10",
      ngo: {
        id: 3,
        name: "Rural Healthcare Initiative",
      },
      items: [
        { name: "First Aid Kits", quantity: 5 },
        { name: "Blankets", quantity: 10 },
        { name: "Medicines", quantity: 20 },
      ],
      deliveryMethod: "pickup",
      status: "completed",
    },
  ]

  return (
    <div className="space-y-4">
      {sampleDonations.map((donation) => (
        <Card key={donation.id} className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-medium text-orange-700 dark:text-orange-300">{donation.ngo.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Donated on: {new Date(donation.date).toLocaleDateString()}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {donation.deliveryMethod === "pickup" ? "Picked up from your address" : "You visited the NGO"}
                  </span>
                </div>
                <div className="mt-2">
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  >
                    {donation.status}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="ml-2 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                  >
                    <Gift className="mr-1 h-3 w-3" />
                    {donation.items.length} items
                  </Badge>
                </div>
              </div>
              <div>
                <Link href={`/ngos/${donation.ngo.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                  >
                    View NGO
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Donated items:</h4>
              <ul className="space-y-1">
                {donation.items.map((item, index) => (
                  <li key={index} className="text-sm flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} {typeof item.quantity === "number" && item.quantity > 1 ? "pcs" : "pc"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

