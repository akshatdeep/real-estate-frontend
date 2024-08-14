import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:9090/",
  withCredentials: true,
});

export default apiRequest;