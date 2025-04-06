import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, ArrowRight, AlertTriangle, Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NgosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 bg-orange-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-700 dark:text-orange-300">
              NGOs Directory
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Find and support NGOs that align with your values and interests
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search NGOs by name, location, or cause..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by cause" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Causes</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="women">Women Empowerment</SelectItem>
                  <SelectItem value="environment">Environment</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* NGOs Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample NGOs */}
            {[
              {
                id: 1,
                name: "Child Education Foundation",
                description: "Supporting education for underprivileged children",
                location: "Mumbai, Maharashtra",
                urgentNeeds: [
                  { name: "School Textbooks", quantity: 50 },
                  { name: "Notebooks", quantity: 100 },
                  { name: "School Bags", quantity: 30 },
                ],
                urgencyLevel: "high",
                category: "Education",
              },
              {
                id: 2,
                name: "Rural Healthcare Initiative",
                description: "Providing healthcare services to rural communities",
                location: "Pune, Maharashtra",
                urgentNeeds: [
                  { name: "First Aid Kits", quantity: 20 },
                  { name: "Blankets", quantity: 40 },
                  { name: "Medicines", quantity: 100 },
                ],
                urgencyLevel: "medium",
                category: "Healthcare",
              },
              {
                id: 3,
                name: "Food for All",
                description: "Fighting hunger by providing food to those in need",
                location: "Delhi, NCR",
                urgentNeeds: [
                  { name: "Rice (kg)", quantity: 200 },
                  { name: "Pulses (kg)", quantity: 100 },
                  { name: "Cooking Oil (L)", quantity: 50 },
                ],
                urgencyLevel: "high",
                category: "Food",
              },
              {
                id: 4,
                name: "Women Empowerment Trust",
                description: "Empowering women through skill development and education",
                location: "Bangalore, Karnataka",
                urgentNeeds: [
                  { name: "Sewing Machines", quantity: 10 },
                  { name: "Fabric (meters)", quantity: 200 },
                  { name: "Sewing Kits", quantity: 25 },
                ],
                urgencyLevel: "medium",
                category: "Women Empowerment",
              },
              {
                id: 5,
                name: "Green Earth Initiative",
                description: "Working towards environmental conservation and sustainability",
                location: "Chennai, Tamil Nadu",
                urgentNeeds: [
                  { name: "Saplings", quantity: 500 },
                  { name: "Gardening Tools", quantity: 50 },
                  { name: "Compost (kg)", quantity: 200 },
                ],
                urgencyLevel: "medium",
                category: "Environment",
              },
              {
                id: 6,
                name: "Elderly Care Society",
                description: "Providing care and support to senior citizens",
                location: "Hyderabad, Telangana",
                urgentNeeds: [
                  { name: "Wheelchairs", quantity: 15 },
                  { name: "Walking Sticks", quantity: 30 },
                  { name: "Blankets", quantity: 50 },
                ],
                urgencyLevel: "high",
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

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-orange-700 dark:text-orange-300">Urgent Needs:</h4>
                        {ngo.urgencyLevel === "high" && (
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          >
                            <AlertTriangle className="mr-1 h-3 w-3" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {ngo.urgentNeeds.slice(0, 2).map((item, index) => (
                          <li key={index} className="flex items-center justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="font-medium">{item.quantity} needed</span>
                          </li>
                        ))}
                        {ngo.urgentNeeds.length > 2 && (
                          <li className="text-sm text-muted-foreground">
                            + {ngo.urgentNeeds.length - 2} more items needed
                          </li>
                        )}
                      </ul>
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

