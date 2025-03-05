import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

interface LoginData {
  username: string;
  password: string;
}

type Callback = (status: boolean, res: string) => void;

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
}

export const login = async (data: LoginData, callback: Callback): Promise<void> => {
  try {
    const res = await axiosInstance.post("/auth/login", data, { headers: header });
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

