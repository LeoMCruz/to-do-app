import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.19.60.76:8080'
})

export default api;