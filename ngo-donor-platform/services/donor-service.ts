// This service will connect to your Spring backend APIs for donor operations

// Base API URL - replace with your Spring backend URL
const API_URL = "http://localhost:8080/api"

export const donorService = {
  // Get dashboard data for donor
  async getDashboardData() {
    try {
      const response = await fetch(`${API_URL}/donors/dashboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching dashboard data:", error)

      // Return mock data for demo purposes
      return {
        stats: {
          totalDonated: 35,
          ngosSupported: 3,
        },
      }
    }
  },

  // Get donations for donor
  async getDonations() {
    try {
      const response = await fetch(`${API_URL}/donors/donations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to fetch donations")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching donations:", error)
      // Return empty array for demo purposes
      return []
    }
  },

  // Schedule a donation
  async scheduleDonation(donationData: any) {
    try {
      const response = await fetch(`${API_URL}/donations/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        body: JSON.stringify(donationData),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to schedule donation")
      }

      return await response.json()
    } catch (error) {
      console.error("Error scheduling donation:", error)

      // For demo purposes, return a mock success response
      return {
        id: Math.floor(Math.random() * 1000),
        status: "scheduled",
        message: "Donation scheduled successfully",
      }
    }
  },

  // Update donor profile
  async updateProfile(profileData: any) {
    try {
      const response = await fetch(`${API_URL}/donors/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        body: JSON.stringify(profileData),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      return await response.json()
    } catch (error) {
      console.error("Error updating profile:", error)
      throw error
    }
  },
}

