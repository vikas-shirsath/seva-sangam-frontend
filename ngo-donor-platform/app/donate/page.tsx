import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Gift, Search, MapPin, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-700 dark:text-orange-300">
                  Make a Difference Today
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your donations can transform lives. Choose how you want to contribute and support causes that matter
                  to you.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#donate-by-ngo">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-orange-600 hover:bg-orange-700">
                      Donate by NGO
                    </Button>
                  </Link>
                  <Link href="#donate-by-item">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                    >
                      Donate by Item
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative lg:pl-6">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src="/placeholder.svg?height=550&width=750&text=Donation+Image"
                      width={750}
                      height={550}
                      alt="People donating items to NGO"
                      className="aspect-video object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="by-ngo" className="w-full" id="donate-by-ngo">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                    Donation Options
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Choose how you'd like to make your donation
                  </p>
                </div>
              </div>

              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="by-ngo">Donate by NGO</TabsTrigger>
                <TabsTrigger value="by-item" id="donate-by-item">
                  Donate by Item
                </TabsTrigger>
              </TabsList>

              <TabsContent value="by-ngo">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Sample NGOs */}
                  {[
                    {
                      id: 1,
                      name: "Child Education Foundation",
                      description: "Supporting education for underprivileged children",
                      location: "Mumbai, Maharashtra",
                      category: "Education",
                    },
                    {
                      id: 2,
                      name: "Rural Healthcare Initiative",
                      description: "Providing healthcare services to rural communities",
                      location: "Pune, Maharashtra",
                      category: "Healthcare",
                    },
                    {
                      id: 3,
                      name: "Food for All",
                      description: "Fighting hunger by providing food to those in need",
                      location: "Delhi, NCR",
                      category: "Food",
                    },
                    {
                      id: 4,
                      name: "Women Empowerment Trust",
                      description: "Empowering women through skill development and education",
                      location: "Bangalore, Karnataka",
                      category: "Women Empowerment",
                    },
                    {
                      id: 5,
                      name: "Green Earth Initiative",
                      description: "Working towards environmental conservation and sustainability",
                      location: "Chennai, Tamil Nadu",
                      category: "Environment",
                    },
                    {
                      id: 6,
                      name: "Elderly Care Society",
                      description: "Providing care and support to senior citizens",
                      location: "Hyderabad, Telangana",
                      category: "Healthcare",
                    },
                  ].map((ngo) => (
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
              </TabsContent>

              <TabsContent value="by-item">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Sample Items */}
                  {[
                    {
                      id: 1,
                      name: "School Supplies",
                      description: "Notebooks, textbooks, pens, pencils, and other educational materials",
                      ngos: 12,
                      urgencyLevel: "high",
                    },
                    {
                      id: 2,
                      name: "Food Items",
                      description: "Rice, pulses, cooking oil, and other non-perishable food items",
                      ngos: 8,
                      urgencyLevel: "high",
                    },
                    {
                      id: 3,
                      name: "Clothing",
                      description: "New or gently used clothing for all ages and genders",
                      ngos: 15,
                      urgencyLevel: "medium",
                    },
                    {
                      id: 4,
                      name: "Medical Supplies",
                      description: "First aid kits, medicines, and other healthcare items",
                      ngos: 6,
                      urgencyLevel: "high",
                    },
                    {
                      id: 5,
                      name: "Blankets & Bedding",
                      description: "Blankets, bed sheets, pillows, and other bedding materials",
                      ngos: 9,
                      urgencyLevel: "medium",
                    },
                    {
                      id: 6,
                      name: "Toys & Games",
                      description: "Educational toys, board games, and other recreational items for children",
                      ngos: 7,
                      urgencyLevel: "low",
                    },
                  ].map((item) => (
                    <Card key={item.id} className="border-orange-200 dark:border-orange-900">
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-orange-700 dark:text-orange-300">{item.name}</h3>
                              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            {item.urgencyLevel === "high" && (
                              <Badge
                                variant="outline"
                                className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                              >
                                <AlertTriangle className="mr-1 h-3 w-3" />
                                Urgent
                              </Badge>
                            )}
                          </div>

                          <div className="pt-2">
                            <p className="text-sm text-muted-foreground">
                              <Gift className="inline-block mr-1 h-4 w-4" />
                              Needed by {item.ngos} NGOs
                            </p>
                          </div>

                          <div className="flex justify-end items-center pt-2">
                            <Link href={`/donate/item/${item.id}`}>
                              <Button
                                size="sm"
                                className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                              >
                                Find NGOs
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How Donation Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  How Donation Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Simple steps to make your donation count
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Search className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Find an NGO</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse through our directory of verified NGOs or search by items you want to donate
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Gift className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Schedule Donation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Choose items to donate and schedule a convenient time for pickup or delivery
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <MapPin className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Complete Donation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Deliver items yourself or have them picked up by the NGO, and track your impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 dark:bg-orange-900">
          <div className="container px-4 md:px-6 text-white">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                  Join our community of donors and NGOs working together to create positive change
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?type=donor">
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-orange-600 hover:bg-orange-100">
                    Get Started
                  </Button>
                </Link>
                <Link href="/ngos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-white text-orange-600 hover:bg-orange-700"
                  >
                    Browse NGOs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

