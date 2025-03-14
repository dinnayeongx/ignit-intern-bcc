import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
  //"ngrok-skip-browser-warning": "69420",
}

type CallbackProfile = (success: boolean, message: Profile[] | string) => void;


interface educations{
    id: number;
    degree: string;
    school: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string
}

interface skills{
    id: number;
    name: string;
    description: string;
    year: number;
}

interface projects{
    id: number;
    name: string;
    description: string;
    imageId: number;
    status: string;
    deadline: string;
    createdAt: string;
    updatedAt: string;
    tags: string[];
    createBy: string;
}

interface errors{
    message: string;
    type: string;
}

interface Profile {
  id: number;
  username: string;
  email: string;
  fullName: string;
  passion: string;
  summary: string;
  educations: educations[];
  skills: skills[];
  projects: projects[];
  errors: errors[];
}

export const getProfile = async (callback: CallbackProfile): Promise<void> => {
  try {
    const res = await axiosInstance.get("/profiles/me", { headers: header });
    
    if (res.data.success) {
        const profileData: Profile | null = res.data.payload;
      if (profileData) {
        callback(true, profileData);
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


export const updateProfile = async (data: Profile, callback: CallbackProfile): Promise<void> => {
  try {
    const res = await axiosInstance.patch("/profiles/me", data, { headers: header }); 
    callback(true, res.data.payload);
  } catch (error) {
    callback(false, error.message || "Terjadi kesalahan");
  }
};