// This service will connect to your Spring backend APIs for leaderboard operations

// Base API URL - replace with your Spring backend URL
const API_URL = "http://localhost:8080/api"

export const leaderboardService = {
  // Get top donors
  async getTopDonors(limit = 5) {
    try {
      const response = await fetch(`${API_URL}/leaderboard/donors?limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch top donors")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching top donors:", error)
      // Return mock data for demo purposes
      return [
        {
          id: 1,
          name: "Rahul Sharma",
          donationCount: 42,
          totalItems: 156,
          avatar: "/placeholder.svg?height=100&width=100&text=RS",
        },
        {
          id: 2,
          name: "Priya Patel",
          donationCount: 38,
          totalItems: 124,
          avatar: "/placeholder.svg?height=100&width=100&text=PP",
        },
        {
          id: 3,
          name: "Amit Kumar",
          donationCount: 35,
          totalItems: 112,
          avatar: "/placeholder.svg?height=100&width=100&text=AK",
        },
        {
          id: 4,
          name: "Neha Singh",
          donationCount: 29,
          totalItems: 98,
          avatar: "/placeholder.svg?height=100&width=100&text=NS",
        },
        {
          id: 5,
          name: "Vikram Mehta",
          donationCount: 27,
          totalItems: 89,
          avatar: "/placeholder.svg?height=100&width=100&text=VM",
        },
      ]
    }
  },

  // Get top NGOs
  async getTopNgos(limit = 5) {
    try {
      const response = await fetch(`${API_URL}/leaderboard/ngos?limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch top NGOs")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching top NGOs:", error)
      // Return empty array for demo purposes
      return []
    }
  },
}

