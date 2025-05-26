import axios from "axios";

export const jsonAxios = axios.create({
    baseURL: " http://localhost:3000/tasks",
    headers: {
        "Content-Type": "application/json"
    }
})