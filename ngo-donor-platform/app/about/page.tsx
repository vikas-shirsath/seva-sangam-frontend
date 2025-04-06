import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gift, Users, Heart, Globe, Award } from "lucide-react"

export default function AboutPage() {
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
                  About SevaSangam
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  SevaSangam is a platform dedicated to connecting donors with NGOs to facilitate item donations and
                  make a positive impact in communities across India.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/ngos">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-orange-600 hover:bg-orange-700">
                      Explore NGOs
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative lg:pl-6">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src="/placeholder.svg?height=550&width=750&text=About+SevaSangam"
                      width={750}
                      height={550}
                      alt="SevaSangam team and mission"
                      className="aspect-video object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Our Mission
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  To create a seamless connection between donors and NGOs, making the donation process efficient and
                  impactful
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Heart className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Facilitate Donations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We make it easy for individuals to donate items to NGOs that need them the most
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Users className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Support NGOs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We help NGOs reach more donors and receive the items they urgently need
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Globe className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Create Impact</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We aim to create a positive impact in communities across India through efficient resource allocation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src="/placeholder.svg?height=550&width=750&text=Our+Story"
                      width={750}
                      height={550}
                      alt="SevaSangam journey"
                      className="aspect-video object-cover w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Our Story
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  SevaSangam was founded in 2022 with a simple idea: to bridge the gap between donors who have items to
                  give and NGOs that need those items. We noticed that many people wanted to donate but didn't know
                  which organizations needed their items, while NGOs struggled to communicate their specific needs to
                  potential donors.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Starting with just a handful of NGOs in Mumbai, we've grown to connect donors with organizations
                  across India. Our platform has facilitated thousands of donations, ranging from educational materials
                  to food supplies, clothing, and medical equipment.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Today, SevaSangam continues to grow with the mission of making donation as simple and impactful as
                  possible. We believe that by connecting the right resources with the right organizations, we can
                  collectively make a significant difference in our communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The difference we've made together with our donors and NGOs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Gift className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300">10,000+</h3>
                    <p className="text-sm text-muted-foreground">Items Donated</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Users className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300">500+</h3>
                    <p className="text-sm text-muted-foreground">Active Donors</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Award className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300">100+</h3>
                    <p className="text-sm text-muted-foreground">NGOs Supported</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Globe className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300">20+</h3>
                    <p className="text-sm text-muted-foreground">Cities Covered</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Our Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the passionate individuals behind SevaSangam
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="border-orange-200 dark:border-orange-900">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="h-24 w-24 overflow-hidden rounded-full">
                        <img
                          src={`/placeholder.svg?height=200&width=200&text=Team+Member+${i}`}
                          alt={`Team Member ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-700 dark:text-orange-300">Team Member {i}</h3>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "Founder & CEO"
                            : i === 2
                              ? "Co-Founder & CTO"
                              : i === 3
                                ? "Head of Operations"
                                : i === 4
                                  ? "NGO Relations Manager"
                                  : i === 5
                                    ? "Donor Experience Lead"
                                    : "Marketing Manager"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 dark:bg-orange-900">
          <div className="container px-4 md:px-6 text-white">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                  Be part of the change. Start donating or register your NGO today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?type=donor">
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-orange-600 hover:bg-orange-100">
                    Become a Donor
                  </Button>
                </Link>
                <Link href="/register?type=ngo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-white text-orange-600 hover:bg-orange-700"
                  >
                    Register as NGO
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

