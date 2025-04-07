import axios from "axios"

// Create a reusable axios instance
export const axiosInstance = axios.create({})

// Generic API function to handle requests
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,             // GET, POST, etc.
    url: `${url}`,                   // Endpoint
    data: bodyData ? bodyData : null, // Payload for POST/PUT
    headers: headers ? headers : null, // Custom headers (e.g., auth)
    params: params ? params : null,   // Query params for GET requests
  })
}
