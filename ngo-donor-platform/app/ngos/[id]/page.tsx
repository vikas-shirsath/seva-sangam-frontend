import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Globe, AlertTriangle, ArrowRight, Calendar, Gift } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NgoDetailsPage({ params }: { params: { id: string } }) {
  // For demo purposes, we'll create a sample NGO
  const ngo = {
    id: Number.parseInt(params.id),
    name: "Child Education Foundation",
    description:
      "Supporting education for underprivileged children through various programs and initiatives. We focus on providing educational materials, scholarships, and creating learning environments that foster growth and development.",
    longDescription:
      "The Child Education Foundation was established in 2010 with the mission to provide quality education to underprivileged children across India. We believe that education is the most powerful tool to break the cycle of poverty and create a better future.\n\nOur programs include providing educational materials, setting up libraries in rural areas, offering scholarships to deserving students, training teachers, and creating safe and conducive learning environments. We work closely with local communities, schools, and government bodies to ensure sustainable impact.",
    location: "Mumbai, Maharashtra",
    address: "123 Education Lane, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 98765 43210",
    email: "info@childeducationfoundation.org",
    website: "https://www.childeducationfoundation.org",
    founded: "2010",
    category: "Education",
    urgentNeeds: [
      { name: "School Textbooks", quantity: 50 },
      { name: "Notebooks", quantity: 100 },
      { name: "School Bags", quantity: 30 },
      { name: "Stationery Sets", quantity: 80 },
      { name: "Children's Books", quantity: 120 },
    ],
    urgencyLevel: "high",
    impact: {
      beneficiaries: 5000,
      projects: 25,
      volunteers: 150,
    },
    upcomingEvents: [
      {
        id: 1,
        title: "Back to School Drive",
        date: "2023-06-15",
        description: "Annual event to collect school supplies for the new academic year",
      },
      {
        id: 2,
        title: "Teacher Training Workshop",
        date: "2023-07-10",
        description: "Workshop to train teachers on innovative teaching methods",
      },
    ],
    recentDonations: [
      {
        id: 1,
        donor: "Anonymous",
        items: ["School Textbooks (20)", "Notebooks (50)"],
        date: "2023-05-01",
      },
      {
        id: 2,
        donor: "Rahul Sharma",
        items: ["School Bags (10)", "Stationery Sets (15)"],
        date: "2023-04-22",
      },
      {
        id: 3,
        donor: "Priya Patel",
        items: ["Children's Books (30)"],
        date: "2023-04-15",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 bg-orange-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          {/* NGO Header */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mb-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter text-orange-700 dark:text-orange-300">
                    {ngo.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="outline"
                      className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                    >
                      {ngo.category}
                    </Badge>
                    {ngo.urgencyLevel === "high" && (
                      <Badge variant="outline" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Urgent Needs
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{ngo.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/donate/${ngo.id}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">{ngo.description}</p>
            </div>
            <div>
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-orange-700 dark:text-orange-300">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 mt-0.5 text-orange-600 dark:text-orange-400" />
                        <span>{ngo.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        <Link href={`tel:${ngo.phone}`} className="hover:text-orange-600 dark:hover:text-orange-400">
                          {ngo.phone}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        <Link href={`mailto:${ngo.email}`} className="hover:text-orange-600 dark:hover:text-orange-400">
                          {ngo.email}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        <Link
                          href={ngo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-600 dark:hover:text-orange-400"
                        >
                          {ngo.website.replace(/^https?:\/\//, "")}
                        </Link>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm">
                        <span className="font-medium">Founded:</span> {ngo.founded}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* NGO Content Tabs */}
          <Tabs defaultValue="about" className="mt-8">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="urgent-needs">Urgent Needs</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-orange-700 dark:text-orange-300">About {ngo.name}</h3>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>{ngo.longDescription}</p>
                    </div>
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center mt-6">
                      <img
                        src={`/placeholder.svg?height=400&width=800&text=${encodeURIComponent(ngo.name)}`}
                        alt={ngo.name}
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="urgent-needs" className="mt-6">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-orange-700 dark:text-orange-300">Urgent Needs</h3>
                      {ngo.urgencyLevel === "high" && (
                        <Badge variant="outline" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                          <AlertTriangle className="mr-1 h-3 w-3" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      These are the items that {ngo.name} urgently needs. Your donations can make a significant impact.
                    </p>
                    <ul className="space-y-2 mt-4">
                      {ngo.urgentNeeds.map((need, index) => (
                        <li key={index} className="flex items-center justify-between p-3 border rounded-md">
                          <span>{need.name}</span>
                          <span className="font-medium">{need.quantity} needed</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href={`/donate/${ngo.id}`}>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">
                          Donate These Items
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="impact" className="mt-6">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-orange-700 dark:text-orange-300">Our Impact</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Here's how {ngo.name} has been making a difference in the community.
                    </p>
                    <div className="grid gap-6 md:grid-cols-3 mt-4">
                      <div className="flex flex-col items-center p-4 border rounded-md">
                        <span className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                          {ngo.impact.beneficiaries}+
                        </span>
                        <span className="text-sm text-muted-foreground">Beneficiaries</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-md">
                        <span className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                          {ngo.impact.projects}
                        </span>
                        <span className="text-sm text-muted-foreground">Projects</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-md">
                        <span className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                          {ngo.impact.volunteers}
                        </span>
                        <span className="text-sm text-muted-foreground">Volunteers</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-orange-700 dark:text-orange-300 mb-4">
                        Recent Donations
                      </h4>
                      <div className="space-y-4">
                        {ngo.recentDonations.map((donation) => (
                          <div key={donation.id} className="p-4 border rounded-md">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{donation.donor}</span>
                              <span className="text-sm text-muted-foreground">{donation.date}</span>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm text-muted-foreground">Donated: </span>
                              <span className="text-sm">{donation.items.join(", ")}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events" className="mt-6">
              <Card className="border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-orange-700 dark:text-orange-300">Upcoming Events</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Join us at these upcoming events and help make a difference.
                    </p>
                    <div className="space-y-4 mt-4">
                      {ngo.upcomingEvents.map((event) => (
                        <div key={event.id} className="p-4 border rounded-md">
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center justify-center min-w-[60px] h-16 bg-orange-100 dark:bg-orange-900 rounded-md">
                              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                                {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                              </span>
                              <span className="text-xl font-bold text-orange-700 dark:text-orange-300">
                                {new Date(event.date).getDate()}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-orange-700 dark:text-orange-300">{event.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                        >
                          Contact Us to Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Donation CTA */}
          <div className="mt-12 p-8 bg-orange-600 dark:bg-orange-900 rounded-lg text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Ready to Support {ngo.name}?</h3>
                <p className="mt-2 opacity-90">
                  Your donations can make a real difference in the lives of those we serve.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href={`/donate/${ngo.id}`}>
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
                    <Gift className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

