"\"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function UrgentNeedsList() {
  const [urgentNeeds, setUrgentNeeds] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [needsInput, setNeedsInput] = useState("")

  useEffect(() => {
    const fetchUrgentNeeds = async () => {
      try {
        // This would be replaced with actual API call
        // const data = await ngoService.getUrgentNeeds()

        // Mock data for demo
        const data = [
          { name: "School Textbooks", quantity: 50 },
          { name: "Notebooks", quantity: 100 },
          { name: "School Bags", quantity: 30 },
        ]

        setUrgentNeeds(data)
      } catch (error) {
        console.error("Error fetching urgent needs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUrgentNeeds()
  }, [])

  const handleEditClick = () => {
    setIsEditing(true)
    // Pre-populate the textarea with existing needs
    setNeedsInput(urgentNeeds.map((item) => `${item.name} (${item.quantity})`).join("\n"))
  }

  const handleCancelClick = () => {
    setIsEditing(false)
  }

  const handleSaveClick = async () => {
    try {
      // Parse the textarea input into an array of urgent needs
      const parsedNeeds = needsInput.split("\n").map((line) => {
        const parts = line.split("(")
        const name = parts[0].trim()
        const quantity = Number.parseInt(parts[1]?.replace(")", "")?.trim() || "0") // Extract quantity within parentheses

        return { name, quantity }
      })

      // Call the API to update urgent needs
      // await ngoService.updateUrgentNeeds(parsedNeeds)

      // Mock success
      setUrgentNeeds(parsedNeeds)
      setIsEditing(false)
    } catch (error) {
      console.error("Error updating urgent needs:", error)
      alert("Failed to update urgent needs. Please try again.")
    }
  }

  if (isLoading) {
    return <p>Loading urgent needs...</p>
  }

  return (
    <Card className="border-orange-200 dark:border-orange-900">
      <CardHeader>
        <CardTitle className="text-orange-700 dark:text-orange-300">Urgent Needs</CardTitle>
        <CardDescription>Update the list of items your organization urgently needs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="space-y-4">
            <Label htmlFor="urgent-needs">Enter urgent needs (one item per line, e.g., School Textbooks (50))</Label>
            <Textarea
              id="urgent-needs"
              value={needsInput}
              onChange={(e) => setNeedsInput(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button onClick={handleSaveClick}>Save</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {urgentNeeds.length > 0 ? (
              <ul className="list-disc pl-5">
                {urgentNeeds.map((item, index) => (
                  <li key={index}>
                    {item.name} ({item.quantity})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No urgent needs specified.</p>
            )}
            <Button variant="outline" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

