import axios from 'axios'
const header =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2Q5ZjkxMzkyMTVmMThiYzZjZmVjYSIsImlhdCI6MTY3NDQyMDk5OCwiZXhwIjoxNjc0NTA3Mzk4fQ.91hlAShJfrrBHud0S-vljbuWUNmDAQNZyJUd3LIqqwc";


const dbMangaStore = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

dbMangaStore.interceptors.request.use((config) => {
  config.headers["x-access-token"] = header;
  return config;
});

export default dbMangaStore;