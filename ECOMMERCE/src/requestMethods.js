import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGY0MGQ0N2JiNTcxNjkzYTRhODViMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjExMDY5NiwiZXhwIjoxNjQyMzY5ODk2fQ.zj89ThARKHUpVUERuIHsDBb6YxlAh0TsZaVFJCyPZm0";

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
