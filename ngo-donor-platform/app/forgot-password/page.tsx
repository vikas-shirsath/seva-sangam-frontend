"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [donorEmail, setDonorEmail] = useState("")
  const [ngoEmail, setNgoEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleDonorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      // This would be replaced with actual API call
      // await authService.forgotPasswordDonor(donorEmail)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSuccessMessage("Password reset instructions have been sent to your email.")
      setDonorEmail("")
    } catch (error) {
      setErrorMessage("Failed to process your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNgoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      // This would be replaced with actual API call
      // await authService.forgotPasswordNgo(ngoEmail)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSuccessMessage("Password reset instructions have been sent to your email.")
      setNgoEmail("")
    } catch (error) {
      setErrorMessage("Failed to process your request. Please try again.")
    } finally {
      setIsSubmitting(false)
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
                  <CardTitle className="text-orange-700 dark:text-orange-300">Forgot Password</CardTitle>
                  <CardDescription>Enter your email to reset your donor account password</CardDescription>
                </CardHeader>
                <form onSubmit={handleDonorSubmit}>
                  <CardContent className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 text-sm flex items-center gap-2 text-white bg-red-500 rounded-md">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    {successMessage && (
                      <div className="p-3 text-sm flex items-center gap-2 text-white bg-green-500 rounded-md">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{successMessage}</span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email</Label>
                      <Input
                        id="donor-email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Reset Password"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Remember your password?{" "}
                      <Link
                        href="/login"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Back to login
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="ngo">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Forgot Password</CardTitle>
                  <CardDescription>Enter your email to reset your NGO account password</CardDescription>
                </CardHeader>
                <form onSubmit={handleNgoSubmit}>
                  <CardContent className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 text-sm flex items-center gap-2 text-white bg-red-500 rounded-md">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    {successMessage && (
                      <div className="p-3 text-sm flex items-center gap-2 text-white bg-green-500 rounded-md">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{successMessage}</span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="ngo-email">Email</Label>
                      <Input
                        id="ngo-email"
                        type="email"
                        placeholder="organization@example.com"
                        required
                        value={ngoEmail}
                        onChange={(e) => setNgoEmail(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Reset Password"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Remember your password?{" "}
                      <Link
                        href="/login"
                        className="text-orange-600 underline-offset-4 hover:underline dark:text-orange-400"
                      >
                        Back to login
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

