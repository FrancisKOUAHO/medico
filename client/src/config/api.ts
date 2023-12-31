import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8001/',
})

api.defaults.withCredentials = true

export default api
