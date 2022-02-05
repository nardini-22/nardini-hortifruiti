import axios from "axios";

export const api = axios.create({
  baseURL: "https://nardinis-hortifruti.herokuapp.com",
});
