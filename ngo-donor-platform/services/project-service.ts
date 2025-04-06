// This service will connect to your Spring backend APIs for project operations

// Base API URL - replace with your Spring backend URL
const API_URL = "http://localhost:8080/api"

export const projectService = {
  // Get all projects
  async getAllProjects(filters = {}) {
    try {
      const queryParams = new URLSearchParams()

      // Add filters to query params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, String(value))
      })

      const response = await fetch(`${API_URL}/projects?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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

  // Get project by ID
  async getProjectById(id: number) {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch project with ID ${id}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error)
      throw error
    }
  },

  // Get recommended projects for donor
  async getRecommendedProjects() {
    try {
      const response = await fetch(`${API_URL}/projects/recommended`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to fetch recommended projects")
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching recommended projects:", error)
      // Return empty array for demo purposes
      return []
    }
  },

  // Create a new project (for NGOs)
  async createProject(projectData: any) {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        body: JSON.stringify(projectData),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to create project")
      }

      return await response.json()
    } catch (error) {
      console.error("Error creating project:", error)
      throw error
    }
  },

  // Update a project (for NGOs)
  async updateProject(id: number, projectData: any) {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
        },
        body: JSON.stringify(projectData),
        credentials: "include", // Include cookies for session management
      })

      if (!response.ok) {
        throw new Error("Failed to update project")
      }

      return await response.json()
    } catch (error) {
      console.error("Error updating project:", error)
      throw error
    }
  },
}

