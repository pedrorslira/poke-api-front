import axios from "axios";
import { toast } from "react-toastify";

const { REACT_APP_API_BASE_URL } = process.env;

const myAxios = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
});

myAxios.interceptors.response.use((response) => {
  if (response.status >= 400) {
    toast.error("Falha na Requisição.");
  }
  return response;
});

export default myAxios;
