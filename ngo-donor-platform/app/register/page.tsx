"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { authService } from "@/services/auth-service"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("donor")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [donorData, setDonorData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  })

  const [ngoData, setNgoData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
    website: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    registrationNumber: "",
    urgentNeeds: "",
  })

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "ngo" || type === "donor") {
      setActiveTab(type)
    }
  }, [searchParams])

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorData({
      ...donorData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNgoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNgoData({
      ...ngoData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDonorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (donorData.password !== donorData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await authService.registerDonor(donorData)
      router.push("/donor/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleNgoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (ngoData.password !== ngoData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await authService.registerNgo(ngoData)
      router.push("/ngo/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-orange-50 dark:bg-gray-900">
        <div className="w-full max-w-4xl px-4 md:px-6 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="donor">Donor Registration</TabsTrigger>
              <TabsTrigger value="ngo">NGO Registration</TabsTrigger>
            </TabsList>
            <TabsContent value="donor">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Donor Registration</CardTitle>
                  <CardDescription>Create an account to start donating items to NGOs in need</CardDescription>
                </CardHeader>
                <form onSubmit={handleDonorSubmit}>
                  <CardContent className="space-y-4">
                    {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="donor-name">Full Name</Label>
                        <Input
                          id="donor-name"
                          name="name"
                          required
                          value={donorData.name}
                          onChange={handleDonorChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-email">Email</Label>
                        <Input
                          id="donor-email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          required
                          value={donorData.email}
                          onChange={handleDonorChange}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="donor-password">Password</Label>
                        <Input
                          id="donor-password"
                          name="password"
                          type="password"
                          required
                          value={donorData.password}
                          onChange={handleDonorChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-confirm-password">Confirm Password</Label>
                        <Input
                          id="donor-confirm-password"
                          name="confirmPassword"
                          type="password"
                          required
                          value={donorData.confirmPassword}
                          onChange={handleDonorChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="donor-phone">Phone Number</Label>
                      <Input
                        id="donor-phone"
                        name="phone"
                        type="tel"
                        required
                        value={donorData.phone}
                        onChange={handleDonorChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="donor-address">Address</Label>
                      <Textarea
                        id="donor-address"
                        name="address"
                        required
                        value={donorData.address}
                        onChange={handleDonorChange}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="donor-city">City</Label>
                        <Input
                          id="donor-city"
                          name="city"
                          required
                          value={donorData.city}
                          onChange={handleDonorChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-state">State</Label>
                        <Input
                          id="donor-state"
                          name="state"
                          required
                          value={donorData.state}
                          onChange={handleDonorChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-pincode">PIN Code</Label>
                        <Input
                          id="donor-pincode"
                          name="pincode"
                          required
                          value={donorData.pincode}
                          onChange={handleDonorChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Log in
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="ngo">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">NGO Registration</CardTitle>
                  <CardDescription>Create an account for your organization to receive donations</CardDescription>
                </CardHeader>
                <form onSubmit={handleNgoSubmit}>
                  <CardContent className="space-y-4">
                    {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ngo-name">Organization Name</Label>
                        <Input id="ngo-name" name="name" required value={ngoData.name} onChange={handleNgoChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-email">Email</Label>
                        <Input
                          id="ngo-email"
                          name="email"
                          type="email"
                          placeholder="organization@example.com"
                          required
                          value={ngoData.email}
                          onChange={handleNgoChange}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ngo-password">Password</Label>
                        <Input
                          id="ngo-password"
                          name="password"
                          type="password"
                          required
                          value={ngoData.password}
                          onChange={handleNgoChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-confirm-password">Confirm Password</Label>
                        <Input
                          id="ngo-confirm-password"
                          name="confirmPassword"
                          type="password"
                          required
                          value={ngoData.confirmPassword}
                          onChange={handleNgoChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ngo-description">Organization Description</Label>
                      <Textarea
                        id="ngo-description"
                        name="description"
                        placeholder="Tell us about your organization's mission and work"
                        required
                        value={ngoData.description}
                        onChange={handleNgoChange}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ngo-website">Website (optional)</Label>
                        <Input
                          id="ngo-website"
                          name="website"
                          type="url"
                          placeholder="https://www.example.org"
                          value={ngoData.website}
                          onChange={handleNgoChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-phone">Phone Number</Label>
                        <Input
                          id="ngo-phone"
                          name="phone"
                          type="tel"
                          required
                          value={ngoData.phone}
                          onChange={handleNgoChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ngo-address">Address</Label>
                      <Textarea
                        id="ngo-address"
                        name="address"
                        required
                        value={ngoData.address}
                        onChange={handleNgoChange}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="ngo-city">City</Label>
                        <Input id="ngo-city" name="city" required value={ngoData.city} onChange={handleNgoChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-state">State</Label>
                        <Input id="ngo-state" name="state" required value={ngoData.state} onChange={handleNgoChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngo-pincode">PIN Code</Label>
                        <Input
                          id="ngo-pincode"
                          name="pincode"
                          required
                          value={ngoData.pincode}
                          onChange={handleNgoChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ngo-registration">Registration Number</Label>
                      <Input
                        id="ngo-registration"
                        name="registrationNumber"
                        required
                        value={ngoData.registrationNumber}
                        onChange={handleNgoChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ngo-urgent-needs">Urgent Needs</Label>
                      <Textarea
                        id="ngo-urgent-needs"
                        name="urgentNeeds"
                        placeholder="List items your organization urgently needs (e.g., '50 blankets, 100 notebooks, 20 first aid kits')"
                        required
                        value={ngoData.urgentNeeds}
                        onChange={handleNgoChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Log in
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

