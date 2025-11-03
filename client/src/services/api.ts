import axios, { AxiosInstance, AxiosError } from 'axios';

// API URL - defaults to localhost:5000 if not set in environment
const getApiUrl = () => {
  try {
    const env = (import.meta as any).env;
    return env?.VITE_API_URL || 'http://localhost:5000';
  } catch {
    return 'http://localhost:5000';
  }
};

const API_URL = getApiUrl();

// Create axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for cookies
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('incuva_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      
      if (status === 401) {
        // Unauthorized - clear token and redirect
        localStorage.removeItem('incuva_token');
        // Optional: redirect to login page
        // window.location.href = '/account/login';
      }
      
      // Extract error message from response
      const responseData = error.response.data as any;
      let errorMessage = responseData?.error || error.message || 'An error occurred';
      
      // Include details if available (for development)
      if (responseData?.details) {
        errorMessage = `${errorMessage}. ${responseData.details}`;
      }
      
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Something else happened
      return Promise.reject(error);
    }
  }
);

export default api;

