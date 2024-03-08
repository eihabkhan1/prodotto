import axios from "axios";

export default axios.create({
    baseURL: 'https://api.youcanshop.dev',
    headers: {
        'Accept': 'application/json',
    }
});