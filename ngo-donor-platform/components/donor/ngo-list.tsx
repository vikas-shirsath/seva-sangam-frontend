"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, AlertTriangle } from "lucide-react"
import { ngoService } from "@/services/ngo-service"

interface NgoListProps {
  searchQuery: string
}

export function NgoList({ searchQuery }: NgoListProps) {
  const [ngos, setNgos] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const data = await ngoService.getAllNgos()
        setNgos(data)
      } catch (error) {
        console.error("Error fetching NGOs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNgos()
  }, [])

  if (isLoading) {
    return <p>Loading NGOs...</p>
  }

  // For demo purposes, we'll create some sample NGOs
  const sampleNgos = [
    {
      id: 1,
      name: "Child Education Foundation",
      description: "Supporting education for underprivileged children",
      location: "Mumbai, Maharashtra",
      urgentNeeds: [
        { name: "School Textbooks", quantity: 50 },
        { name: "Notebooks", quantity: 100 },
        { name: "School Bags", quantity: 30 },
      ],
      urgencyLevel: "high",
      category: "Education",
    },
    {
      id: 2,
      name: "Rural Healthcare Initiative",
      description: "Providing healthcare services to rural communities",
      location: "Pune, Maharashtra",
      urgentNeeds: [
        { name: "First Aid Kits", quantity: 20 },
        { name: "Blankets", quantity: 40 },
        { name: "Medicines", quantity: 100 },
      ],
      urgencyLevel: "medium",
      category: "Healthcare",
    },
    {
      id: 3,
      name: "Food for All",
      description: "Fighting hunger by providing food to those in need",
      location: "Delhi, NCR",
      urgentNeeds: [
        { name: "Rice (kg)", quantity: 200 },
        { name: "Pulses (kg)", quantity: 100 },
        { name: "Cooking Oil (L)", quantity: 50 },
      ],
      urgencyLevel: "high",
      category: "Food",
    },
    {
      id: 4,
      name: "Women Empowerment Trust",
      description: "Empowering women through skill development and education",
      location: "Bangalore, Karnataka",
      urgentNeeds: [
        { name: "Sewing Machines", quantity: 10 },
        { name: "Fabric (meters)", quantity: 200 },
        { name: "Sewing Kits", quantity: 25 },
      ],
      urgencyLevel: "medium",
      category: "Women Empowerment",
    },
  ]

  // Filter NGOs based on search query
  const filteredNgos = searchQuery
    ? sampleNgos.filter(
        (ngo) =>
          ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ngo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ngo.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ngo.urgentNeeds.some((need) => need.name.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : sampleNgos

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredNgos.map((ngo) => (
        <Card key={ngo.id} className="border-orange-200 dark:border-orange-900">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-orange-700 dark:text-orange-300">{ngo.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{ngo.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{ngo.description}</p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                >
                  {ngo.category}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-orange-700 dark:text-orange-300">Urgent Needs:</h4>
                  {ngo.urgencyLevel === "high" && (
                    <Badge variant="outline" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Urgent
                    </Badge>
                  )}
                </div>
                <ul className="space-y-1">
                  {ngo.urgentNeeds.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-center justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.quantity} needed</span>
                    </li>
                  ))}
                  {ngo.urgentNeeds.length > 3 && (
                    <li className="text-sm text-muted-foreground">+ {ngo.urgentNeeds.length - 3} more items needed</li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-2">
                <Link href={`/ngos/${ngo.id}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:text-orange-400 dark:hover:text-orange-300 dark:hover:bg-orange-950"
                  >
                    View Details
                  </Button>
                </Link>
                <Link href={`/donate/${ngo.id}`}>
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
  )
}

