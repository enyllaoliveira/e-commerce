import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.NEXT_PUBLIC_API_BASE_URL,
})

export default api