"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Plus, Trash2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ngoService } from "@/services/ngo-service"
import { donorService } from "@/services/donor-service"

export default function DonatePage() {
  const router = useRouter()
  const params = useParams()
  const ngoId = params.ngoId as string

  const [ngo, setNgo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [donationItems, setDonationItems] = useState([{ name: "", quantity: 1 }])

  const [donationDetails, setDonationDetails] = useState({
    deliveryMethod: "pickup",
    date: new Date(),
    time: "10:00",
    notes: "",
  })

  useEffect(() => {
    const fetchNgoDetails = async () => {
      try {
        const data = await ngoService.getNgoById(Number.parseInt(ngoId))
        setNgo(data)

        // Pre-fill with urgent needs if available
        if (data.urgentNeeds && data.urgentNeeds.length > 0) {
          setDonationItems([{ name: data.urgentNeeds[0].name, quantity: 1 }])
        }
      } catch (error) {
        console.error("Error fetching NGO details:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNgoDetails()
  }, [ngoId])

  const handleItemChange = (index: number, field: string, value: string | number) => {
    const updatedItems = [...donationItems]
    updatedItems[index] = { ...updatedItems[index], [field]: value }
    setDonationItems(updatedItems)
  }

  const addItem = () => {
    setDonationItems([...donationItems, { name: "", quantity: 1 }])
  }

  const removeItem = (index: number) => {
    if (donationItems.length > 1) {
      const updatedItems = [...donationItems]
      updatedItems.splice(index, 1)
      setDonationItems(updatedItems)
    }
  }

  const handleDetailsChange = (field: string, value: any) => {
    setDonationDetails({ ...donationDetails, [field]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const isValid = donationItems.every((item) => item.name.trim() !== "" && item.quantity > 0)

    if (!isValid) {
      alert("Please fill in all item details correctly")
      return
    }

    try {
      // Show confirmation dialog
      setShowConfirmation(true)
    } catch (error) {
      console.error("Error processing donation:", error)
    }
  }

  const confirmDonation = async () => {
    try {
      // Submit donation to backend
      await donorService.scheduleDonation({
        ngoId: Number.parseInt(ngoId),
        items: donationItems,
        ...donationDetails,
      })

      // Close dialog and redirect
      setShowConfirmation(false)
      router.push("/donor/dashboard?tab=scheduled")
    } catch (error) {
      console.error("Error confirming donation:", error)
      setShowConfirmation(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading donation form...</p>
        </main>
        <Footer />
      </div>
    )
  }

  // For demo purposes, we'll create a sample NGO
  const sampleNgo = {
    id: Number.parseInt(ngoId),
    name: "Child Education Foundation",
    description: "Supporting education for underprivileged children",
    location: "Mumbai, Maharashtra",
    urgentNeeds: [
      { name: "School Textbooks", quantity: 50 },
      { name: "Notebooks", quantity: 100 },
      { name: "School Bags", quantity: 30 },
    ],
    category: "Education",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 bg-orange-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Donate to {sampleNgo.name}</CardTitle>
                  <CardDescription>Fill out the form below to schedule your donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-orange-700 dark:text-orange-300">Items to Donate</h3>

                      {donationItems.map((item, index) => (
                        <div key={index} className="flex items-end gap-4">
                          <div className="flex-1 space-y-2">
                            <Label htmlFor={`item-name-${index}`}>Item Name</Label>
                            <Input
                              id={`item-name-${index}`}
                              value={item.name}
                              onChange={(e) => handleItemChange(index, "name", e.target.value)}
                              required
                            />
                          </div>
                          <div className="w-24 space-y-2">
                            <Label htmlFor={`item-quantity-${index}`}>Quantity</Label>
                            <Input
                              id={`item-quantity-${index}`}
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, "quantity", Number.parseInt(e.target.value))}
                              required
                            />
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(index)}
                            disabled={donationItems.length === 1}
                            className="mb-0.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      ))}

                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addItem}
                        className="mt-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Item
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-orange-700 dark:text-orange-300">Delivery Details</h3>

                      <div className="space-y-2">
                        <Label>Delivery Method</Label>
                        <RadioGroup
                          value={donationDetails.deliveryMethod}
                          onValueChange={(value) => handleDetailsChange("deliveryMethod", value)}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup" className="font-normal">
                              NGO will pick up from my address
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="self" id="self" />
                            <Label htmlFor="self" className="font-normal">
                              I will visit the NGO to donate
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal border-input"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {donationDetails.date ? format(donationDetails.date, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={donationDetails.date}
                                onSelect={(date) => handleDetailsChange("date", date)}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <Select
                            value={donationDetails.time}
                            onValueChange={(value) => handleDetailsChange("time", value)}
                          >
                            <SelectTrigger id="time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special instructions or details about your donation"
                          value={donationDetails.notes}
                          onChange={(e) => handleDetailsChange("notes", e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                    >
                      Schedule Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-orange-200 dark:border-orange-900">
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">NGO Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-orange-700 dark:text-orange-300">{sampleNgo.name}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{sampleNgo.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{sampleNgo.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-orange-700 dark:text-orange-300">Urgent Needs:</h4>
                    <ul className="space-y-1">
                      {sampleNgo.urgentNeeds.map((item, index) => (
                        <li key={index} className="flex items-center justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.quantity} needed</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Link href={`/ngos/${sampleNgo.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                      >
                        View NGO Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {donationDetails.deliveryMethod === "self" && (
                <Card className="mt-6 border-orange-200 dark:border-orange-900">
                  <CardHeader>
                    <CardTitle className="text-orange-700 dark:text-orange-300">Directions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Here's how to reach the NGO location for your donation:
                      </p>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Map will be displayed here</p>
                      </div>
                      <div className="text-sm space-y-2">
                        <p className="font-medium text-orange-700 dark:text-orange-300">Address:</p>
                        <p className="text-muted-foreground">
                          123 Charity Lane, Donation District
                          <br />
                          Mumbai, Maharashtra 400001
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-orange-700 dark:text-orange-300">Confirm Your Donation</DialogTitle>
            <DialogDescription>Please review your donation details before confirming.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Items to donate:</h4>
              <ul className="space-y-1">
                {donationItems.map((item, index) => (
                  <li key={index} className="text-sm flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} {item.quantity > 1 ? "pcs" : "pc"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Delivery details:</h4>
              <p className="text-sm">
                <span className="font-medium">Method:</span>{" "}
                {donationDetails.deliveryMethod === "pickup"
                  ? "NGO will pick up from your address"
                  : "You will visit the NGO"}
              </p>
              <p className="text-sm">
                <span className="font-medium">Date & Time:</span> {format(donationDetails.date, "PPP")} at{" "}
                {donationDetails.time.includes(":") ? donationDetails.time : `${donationDetails.time}:00`}
              </p>
              {donationDetails.notes && (
                <p className="text-sm mt-2">
                  <span className="font-medium">Notes:</span> {donationDetails.notes}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmation(false)}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
            >
              Edit Details
            </Button>
            <Button
              onClick={confirmDonation}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              Confirm Donation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

