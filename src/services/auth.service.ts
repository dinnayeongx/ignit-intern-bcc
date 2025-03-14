import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";

interface LoginData {
  username: string;
  password: string;
}

type Callback = (status: boolean, res: string) => void;

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
  "ngrok-skip-browser-warning": "69420",
}

export const login = async (data: LoginData, callback: Callback): Promise<void> => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    callback(true, res.data.payload.token);
  } catch (error) {
    callback(false, error.message || "Terjadi kesalahan");
  }
};

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = async (data: RegisterData, callback: Callback): Promise<void> => {

  try {
    const res = await axiosInstance.post("/auth/register", data, { 
      headers: {
        "Content-Type": "application/json",
    },
  });
    callback(true, res.data);
    console.log(res.data);
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Terjadi kesalahan";
    console.log("Error during registration:", errorMessage);
    callback(false, errorMessage);
  }
};

export const logout = (): void => {
  Cookies.remove('token');
  localStorage.removeItem('token');
};


export const verified = async (callback: Callback): Promise<void> => {
  const [urlParams] = useSearchParams();
  // const urlParams = new URLSearchParams(window.location.search);
  console.log("URL Saat Ini:", window.location.href);
  let token = urlParams.get("token") || localStorage.getItem("token");
  console.log("Token yang ditemukan:", token);

  if (!token) {
    callback(false, "Token verifikasi tidak ditemukan.");
    return;
  }

  try {
    const res = await axiosInstance.get(`/auth/verify?token=${token}`);
    callback(true, res.data.message);
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Terjadi kesalahan";
    callback(false, errorMessage);
  }
};



