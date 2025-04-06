import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Users, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { UrgentNeedsSection } from "@/components/urgent-needs-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-1 text-sm dark:bg-orange-800/30">
                  <span className="text-orange-800 dark:text-orange-300">Making a difference together</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-700 dark:text-orange-300">
                  Connect, Donate, Transform Lives
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  SevaSangam connects donors with NGOs to facilitate item donations. Find the right place for your
                  donations and make a real impact in your community.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register?type=donor">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-orange-600 hover:bg-orange-700">
                      Become a Donor
                    </Button>
                  </Link>
                  <Link href="/register?type=ngo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                    >
                      Register as NGO
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative lg:pl-6">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src="/Donation.png?height=550&width=750&text=Donation+Image"
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

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-700 dark:text-orange-300">
                  How SevaSangam Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform makes it easy to donate items to NGOs in need
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Users className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Register</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sign up as a donor or NGO with your details and preferences
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Gift className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Select Items</h3>
                <p className="text-gray-500 dark:text-gray-400">Choose items to donate or list items your NGO needs</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <Calendar className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Schedule</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Set a convenient date and time for donation pickup or delivery
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800/30">
                  <MapPin className="h-10 w-10 text-orange-700 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Donate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Complete your donation in person or have items collected
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Needs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Urgent Needs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These NGOs need your help right now
                </p>
              </div>
            </div>
            <UrgentNeedsSection />
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Top Donors
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Recognizing those who have made the biggest impact
                </p>
              </div>
            </div>
            <LeaderboardSection />
          </div>
        </section>

        {/* NGO Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-700 dark:text-orange-300">
                  Featured NGOs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover organizations making a difference in communities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden border-orange-200 dark:border-orange-900">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=300&width=400&text=NGO+${i}`}
                      width={400}
                      height={300}
                      alt={`Featured NGO ${i}`}
                      className="object-cover w-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-orange-700 dark:text-orange-300">NGO Organization {i}</h3>
                        <Badge
                          variant="outline"
                          className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                        >
                          {i === 1 ? "Education" : i === 2 ? "Healthcare" : "Food"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Working to provide{" "}
                        {i === 1
                          ? "education to underprivileged children"
                          : i === 2
                            ? "healthcare to rural communities"
                            : "food to homeless people"}
                        .
                      </p>
                      <div className="pt-2">
                        <Link href={`/ngos/${i}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:text-orange-400 dark:hover:text-orange-300 dark:hover:bg-orange-950"
                          >
                            View Profile
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/ngos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                >
                  View All NGOs
                </Button>
              </Link>
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
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-white text-orange-600 hover:bg-orange-700"
                  >
                    Contact Us
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

