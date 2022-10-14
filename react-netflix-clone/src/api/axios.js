import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7c1440aba5de6ccb1e6843019c53e5b2",
    language: "ko-KR",
  },
});

export default instance;
