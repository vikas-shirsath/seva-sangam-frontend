"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { authService } from "@/services/auth-service"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [donorCredentials, setDonorCredentials] = useState({
    email: "",
    password: "",
  })

  const [ngoCredentials, setNgoCredentials] = useState({
    email: "",
    password: "",
  })

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorCredentials({
      ...donorCredentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleNgoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNgoCredentials({
      ...ngoCredentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleDonorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await authService.loginDonor(donorCredentials)
      router.push("/donor/dashboard")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleNgoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await authService.loginNgo(ngoCredentials)
      router.push("/ngo/dashboard")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 bg-orange-50 dark:bg-gray-900">
        <div className="container max-w-md px-4 md:px-6">
          <Tabs defaultValue="donor" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="donor">Donor</TabsTrigger>
              <TabsTrigger value="ngo">NGO</TabsTrigger>
            </TabsList>
            <TabsContent value="donor">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Donor Login</CardTitle>
                  <CardDescription>Enter your credentials to access your donor account</CardDescription>
                </CardHeader>
                <form onSubmit={handleDonorSubmit}>
                  <CardContent className="space-y-4">
                    {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email</Label>
                      <Input
                        id="donor-email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        value={donorCredentials.email}
                        onChange={handleDonorChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="donor-password">Password</Label>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="donor-password"
                        name="password"
                        type="password"
                        required
                        value={donorCredentials.password}
                        onChange={handleDonorChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/register?type=donor"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Sign up
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="ngo">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">NGO Login</CardTitle>
                  <CardDescription>Enter your credentials to access your NGO account</CardDescription>
                </CardHeader>
                <form onSubmit={handleNgoSubmit}>
                  <CardContent className="space-y-4">
                    {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}
                    <div className="space-y-2">
                      <Label htmlFor="ngo-email">Email</Label>
                      <Input
                        id="ngo-email"
                        name="email"
                        type="email"
                        placeholder="organization@example.com"
                        required
                        value={ngoCredentials.email}
                        onChange={handleNgoChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ngo-password">Password</Label>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="ngo-password"
                        name="password"
                        type="password"
                        required
                        value={ngoCredentials.password}
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
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/register?type=ngo"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Sign up
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

