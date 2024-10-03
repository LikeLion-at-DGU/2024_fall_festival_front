import axios from "axios";

// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10초 타임아웃 설정
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.log("Request timeout");
    }
    return Promise.reject(error);
  }
);
