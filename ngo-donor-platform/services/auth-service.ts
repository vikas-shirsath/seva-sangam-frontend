// This service will connect to your Spring backend APIs for authentication

interface DonorCredentials {
  email: string
  password: string
}

interface NgoCredentials {
  email: string
  password: string
}

interface DonorRegistrationData {
  name: string
  email: string
  password: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
}

interface NgoRegistrationData {
  name: string
  email: string
  password: string
  description: string
  website?: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  registrationNumber: string
  urgentNeeds: string
}

// Base API URL - replace with your Spring backend URL
const API_URL = "http://localhost:8080/api"

export const authService = {
  // Donor authentication
  async loginDonor(credentials: DonorCredentials) {
    try {
      const response = await fetch(`${API_URL}/auth/donor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      localStorage.setItem("user", JSON.stringify({ ...data, role: "donor" }))
      return data
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  },

  // NGO authentication
  async loginNgo(credentials: NgoCredentials) {
    try {
      const response = await fetch(`${API_URL}/auth/ngo/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      localStorage.setItem("user", JSON.stringify({ ...data, role: "ngo" }))
      return data
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  },

  // Donor registration
  async registerDonor(donorData: DonorRegistrationData) {
    try {
      const response = await fetch(`${API_URL}/auth/donor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donorData),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      const data = await response.json()
      localStorage.setItem("user", JSON.stringify({ ...data, role: "donor" }))
      return data
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  },

  // NGO registration
  async registerNgo(ngoData: NgoRegistrationData) {
    try {
      const response = await fetch(`${API_URL}/auth/ngo/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ngoData),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      const data = await response.json()
      localStorage.setItem("user", JSON.stringify({ ...data, role: "ngo" }))
      return data
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  },

  // Logout
  logout() {
    localStorage.removeItem("user")
    // You might also want to call your backend to invalidate the session
    return fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
  },

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem("user")
    if (userStr) {
      return JSON.parse(userStr)
    }
    return null
  },
}

