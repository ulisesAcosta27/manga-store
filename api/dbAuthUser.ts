import axios from "axios";

const dbAuthUser = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

export default dbAuthUser;
