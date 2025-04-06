"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ngoService } from "@/services/ngo-service"

export function ProjectsList() {
  const [projects, setProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await ngoService.getProjects()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (isLoading) {
    return <p>Loading projects...</p>
  }

  // For demo purposes, we'll create some sample projects
  const sampleProjects = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Providing clean water to rural communities in need",
      goalAmount: 10000,
      raisedAmount: 7500,
      category: "Water",
      status: "active",
      endDate: "2023-12-31",
    },
    {
      id: 2,
      name: "Education for Children",
      description: "Supporting education for underprivileged children",
      goalAmount: 15000,
      raisedAmount: 9000,
      category: "Education",
      status: "active",
      endDate: "2023-11-30",
    },
    {
      id: 3,
      name: "Medical Supplies for Clinics",
      description: "Providing essential medical supplies to rural clinics",
      goalAmount: 8000,
      raisedAmount: 3000,
      category: "Healthcare",
      status: "active",
      endDate: "2023-10-15",
    },
  ]

  return (
    <div className="grid gap-4">
      {sampleProjects.map((project) => (
        <Card key={project.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge variant={project.status === "active" ? "default" : "outline"}>{project.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>${project.raisedAmount} raised</span>
                    <span>${project.goalAmount} goal</span>
                  </div>
                  <Progress value={(project.raisedAmount / project.goalAmount) * 100} className="mt-1" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 md:mt-0 md:flex-col lg:flex-row">
                <Link href={`/ngo/projects/${project.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                <Link href={`/ngo/projects/${project.id}/edit`}>
                  <Button size="sm">Edit</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

