"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { projectService } from "@/services/project-service"

export function ProjectsList() {
  const [projects, setProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getRecommendedProjects()
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
      ngo: {
        id: 1,
        name: "Water for All",
      },
      goalAmount: 10000,
      raisedAmount: 7500,
      category: "Water",
      endDate: "2023-12-31",
    },
    {
      id: 2,
      name: "Education for Children",
      description: "Supporting education for underprivileged children",
      ngo: {
        id: 2,
        name: "Education First",
      },
      goalAmount: 15000,
      raisedAmount: 9000,
      category: "Education",
      endDate: "2023-11-30",
    },
    {
      id: 3,
      name: "Medical Supplies for Clinics",
      description: "Providing essential medical supplies to rural clinics",
      ngo: {
        id: 3,
        name: "Health Access",
      },
      goalAmount: 8000,
      raisedAmount: 3000,
      category: "Healthcare",
      endDate: "2023-10-15",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sampleProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.name)}`}
              alt={project.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{project.category}</Badge>
              <span className="text-xs text-muted-foreground">
                Ends: {new Date(project.endDate).toLocaleDateString()}
              </span>
            </div>
            <h3 className="mt-2 font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-sm">
                <span>${project.raisedAmount} raised</span>
                <span>${project.goalAmount} goal</span>
              </div>
              <Progress value={(project.raisedAmount / project.goalAmount) * 100} className="mt-2" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">By {project.ngo.name}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex w-full gap-2">
              <Link href={`/projects/${project.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
              <Link href={`/donate/${project.id}`} className="flex-1">
                <Button className="w-full">Donate</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

