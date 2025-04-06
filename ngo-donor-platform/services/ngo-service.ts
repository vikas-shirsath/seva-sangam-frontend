// This service will connect to your Spring backend APIs for NGO operations

// Base API URL - replace with your Spring backend URL
const API_URL = "http://localhost:8080/api"

export const ngoService = {
  // Get all NGOs
  async getAllNgos(filters = {}) {
    try {
      const queryParams = new URLSearchParams()

      // Add filters to query params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, String(value))
      })

      const response = await fetch(`${API_URL}/ngos?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch NGOs")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching NGOs:", error)
      // Return empty array for demo purposes
      return []
    }
  },

  // Get NGO by ID
  async getNgoById(id: number) {
    try {
      const response = await fetch(`${API_URL}/ngos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch NGO with ID ${id}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error fetching NGO ${id}:`, error)

      // For demo purposes, return a mock NGO
      return {
        id: id,
        name: "Child Education Foundation",
        description: "Supporting education for underprivileged children",
        location: "Mumbai, Maharashtra",
        urgentNeeds: [
          { name: "School Textbooks", quantity: 50 },
          { name: "Notebooks", quantity: 100 },
          { name: "School Bags", quantity: 30 },
        ],
        category: "Education",
      }
    }
  },

  // Get urgent needs from all NGOs
  async getUrgentNeeds() {
    try {
      const response = await fetch(`${API_URL}/ngos/urgent-needs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch urgent needs")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching urgent needs:", error)

      // Return mock data for demo purposes instead of empty array
      return [
        {
          id: 1,
          ngo: {
            id: 1,
            name: "Child Education Foundation",
            location: "Mumbai, Maharashtra",
          },
          items: [
            { name: "School Textbooks", quantity: 50 },
            { name: "Notebooks", quantity: 100 },
            { name: "School Bags", quantity: 30 },
          ],
          urgencyLevel: "high",
        },
        {
          id: 2,
          ngo: {
            id: 2,
            name: "Rural Healthcare Initiative",
            location: "Pune, Maharashtra",
          },
          items: [
            { name: "First Aid Kits", quantity: 20 },
            { name: "Blankets", quantity: 40 },
            { name: "Medicines", quantity: 100 },
          ],
          urgencyLevel: "medium",
        },
        {
          id: 3,
          ngo: {
            id: 3,
            name: "Food for All",
            location: "Delhi, NCR",
          },
          items: [
            { name: "Rice (kg)", quantity: 200 },
            { name: "Pulses (kg)", quantity: 100 },
            { name: "Cooking Oil (L)", quantity: 50 },
          ],
          urgencyLevel: "high",
        },
        {
          id: 4,
          ngo: {
            id: 4,
            name: "Women Empowerment Trust",
            location: "Bangalore, Karnataka",
          },
          items: [
            { name: "Sewing Machines", quantity: 10 },
            { name: "Fabric (meters)", quantity: 200 },
            { name: "Sewing Kits", quantity: 25 },
          ],
          urgencyLevel: "medium",
        },
      ]
    }
  },

  // Get dashboard data for NGO
  async getDashboardData() {
    try {
      const response = await fetch(`${API_URL}/ngos/dashboard`, {
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
          totalRaised: 19500,
          activeProjects: 3,
          totalDonors: 5,
        },
      }
    }
  },

  // Get projects for NGO
  async getProjects() {
    try {
      const response = await fetch(`${API_URL}/ngos/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to fetch projects")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching projects:", error)
      // Return empty array for demo purposes
      return []
    }
  },

  // Get donations for NGO
  async getDonations() {
    try {
      const response = await fetch(`${API_URL}/ngos/donations`, {
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

  // Update NGO profile
  async updateProfile(profileData: any) {
    try {
      const response = await fetch(`${API_URL}/ngos/profile`, {
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

  // Update urgent needs
  async updateUrgentNeeds(needsData: any) {
    try {
      const response = await fetch(`${API_URL}/ngos/urgent-needs`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        body: JSON.stringify(needsData),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to update urgent needs")
      }

      return await response.json()
    } catch (error) {
      console.error("Error updating urgent needs:", error)
      throw error
    }
  },
}

