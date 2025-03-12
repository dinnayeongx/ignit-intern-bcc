import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
  "ngrok-skip-browser-warning": "69420",
}

type CallbackImage = (success: boolean, message: string) => void;

export const getImages = async (callback: CallbackImage): Promise<void> => {
  try {
    const res = await axiosInstance.get("images/2", { headers: header });
    callback(true, res.data);
  } 
  catch (error) {
    callback(false, error.message || "Terjadi kesalahan"); 
  }
};