import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api', // customize as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token from localStorage (on client only)
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Optional: handle errors globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn('Unauthorized! Redirecting to login...');
      // Optional: redirect on 401
    }
    return Promise.reject(err);
  }
);

// Reusable fetch functions
export const fetcher = {
  get: <T>(url: string) => api.get<T>(url).then((res) => res.data),
  post: <T>(url: string, data?: any) => api.post<T>(url, data).then((res) => res.data),
  put: <T>(url: string, data?: any) => api.put<T>(url, data).then((res) => res.data),
  delete: <T>(url: string) => api.delete<T>(url).then((res) => res.data),
};

export default api;
