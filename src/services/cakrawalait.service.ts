import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
//   "ngrok-skip-browser-warning": "69420",
}

type CallbackCakrawalaInfo = (success: boolean, message: CakrawalaInfo[] | string) => void;

interface errors{
    message: string;
    type: string;
}

interface CakrawalaInfo {
    description: string,
    salaryRange: string,
    criteria: string,
    skills: string[],
    relatedStudies: string[],
    careerOpportunities: string[],
    responsibilities: string[],
    questions: string[],
    answer: number,
    tag: string,
    imageIds: number[],
}

export const getCakrawalaInfo = async (name: string, callback: CallbackCakrawalaInfo): Promise<void> => {
  try {
    const res = await axiosInstance.get(`/cakrawala/info/${name}`, { headers: header });
    
    if (res.data.success) {
        const cakrawalaData: CakrawalaInfo[] | null = res.data.payload;
      if (cakrawalaData) {
        callback(true, cakrawalaData);
      } else {
        callback(false, "No data found");
      }
    } else {
      const errorMessage = res.data.error?.message || "Unknown error occurred";
      callback(false, errorMessage);
    }
  }
  catch (error) {
    callback(false, error.message || "Terjadi kesalahan"); 
  }
};
