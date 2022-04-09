import axios from "axios";
const BASE_URl ="http://localhost:8080";

export default axios.create({
    baseURL: BASE_URl
});
export const axiosPrivate=axios.create({
    baseURL: BASE_URl,
    headers: {"content-Type": "application/json"},
    withCrendentials: true
});