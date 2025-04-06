"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function DonationsList() {
  const [donations, setDonations] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // This would be replaced with actual API call
        // const data = await ngoService.getDonations()
        
        // Mock data for demo
        const data = [
          {
            id: 1,
            donor: {
              id: 1,
              name: "Rahul Sharma",
              phone: "+919876543210",
              email: "rahul@example.com"
            },
            date: "2023-05-15T10:00:00",
            items: [
              { name: "School Textbooks", quantity: 10 },
              { name: "Notebooks", quantity: 20 },
              { name: "School Bags", quantity: 5 }
            ],
            deliveryMethod: "pickup",
            status: "pending"
          },
          {
            id: 2,
            donor: {
              id: 2,
              name: "Priya Patel",
              phone: "+919876543211",
              email: "priya@example.com"
            },
            date: "2023-05-20T14:00:00",
            items: [
              { name: "Rice", quantity: 25 },
              { name: "Pulses", quantity: 10 }
            ],
            deliveryMethod: "self",
            status: "confirmed"
          },
          {
            id: 3,
            donor: {
              id: 3,
              name: "Amit Kumar",
              phone: "+919876543212",
              email: "amit@example.com"
            },
            date: "2023-04-10T11:00:00",
            items: [
              { name: "First Aid Kits", quantity: 5 },
              { name: "Blankets", quantity: 10 },
              { name: "Medicines", quantity: 20 }
            ],
            deliveryMethod: "pickup",
            status: "completed"
          }
        ]
        
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
            You haven't received any donations yet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Update your profile and urgent needs to attract donors.
          </p>
          <Link href="/ngo/profile">
            <Button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">
              Update Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  // Group donations by status
  const pendingDonations = donations.filter(d => d.status === "pending")
  const confirmedDonations = donations.filter(d => d.status === "confirmed")
  const completedDonations = donations.filter(d => d.status === "completed")

  return (
    <div className="space-y-6">
      {pendingDonations.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-4 text-orange-700 dark:text-orange-300">Pending Donations</h3>
          <div className="space-y-4">
            {pendingDonations.map((donation) => (
              <Card key={donation.id} className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-orange-700 dark:text-orange-300">{donation.donor.name}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Scheduled for: {new Date(donation.date).toLocaleString()}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{donation.deliveryMethod === "pickup" ? "Pickup from donor's address" : "Donor will visit your location"}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                          {donation.status}
                \

