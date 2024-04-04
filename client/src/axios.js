import axios from "axios";

// Tạo một instace Axios mới với baseURL được lấy từ biến môi trường
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

// Interceptor yêu cầu để thêm token vào headers cho mỗi request (nếu có)
instance.interceptors.request.use(
  function(config) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { tokens } = JSON.parse(loggedInUser);
      if (tokens && tokens.accessToken) {
        // Gán token vào header Authorization
        config.headers.Authorization = `Bearer ${tokens.accessToken}`;
      }
    }
    return config;
  },
  function(error) {
    // Xử lý lỗi yêu cầu không được thiết lập
    return Promise.reject(error);
  }
);

// Interceptor phản hồi để xử lý dữ liệu trả về hoặc lỗi
instance.interceptors.response.use(
  function(response) {
    // Trả về dữ liệu thuần từ phản hồi
    return response.data;
  },
  function(error) {
    // Xử lý nếu phản hồi mang lỗi
    if (error.response) {
      // Có thể bạn muốn xử lý các trạng thái lỗi cụ thể ở đây
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default instance;