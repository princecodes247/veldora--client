import axios from "axios";

// const ba4seURL = "http://localhost:3050/api/v1";
const baseURL = "https://veldora-server.onrender.com/api/v1";

const api = axios.create({
  baseURL: baseURL.toString(),
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});
const uninterceptedApi = axios.create({
  baseURL: baseURL.toString(),
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("interceptor error", error, error?.response?.data?.message);
    if (
      error?.response?.data?.message.toLowerCase().includes("unauthenticated")
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("interceptor errorssq");
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

const authHeaders = (extraConfig?: { [key: string]: string | undefined }) => {
  return {
    ...{
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("psg_auth_token") ?? ""}`,
    },
    ...extraConfig,
  };
};
export { baseURL, authHeaders, uninterceptedApi };
export default api;
