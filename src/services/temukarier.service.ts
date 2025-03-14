import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
  "ngrok-skip-browser-warning": "69420",
}

type CallbackTag = (success: boolean, message: string) => void;

export const getTags = async (callback: CallbackTag): Promise<void> => {
  try {
    const res = await axiosInstance.get("/utils/tags", { headers: header });
    callback(true, res.data.payload.map((item: { name: string }) => item.name));
  } 
  catch (error) {
    callback(false, error.message || "Terjadi kesalahan"); 
  }
};


type CallbackBootcamp = (success: boolean, message: Bootcamp[] | string) => void;

interface Bootcamp {
  id: number;
  name: string;
  description: string;
  imageId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export const getBootcamp = async (callback: CallbackBootcamp): Promise<void> => {
  try {
    const res = await axiosInstance.get("/temukarier/bootcamp", {
      params: {
        page: 0,
        size: 3,
        sortBy: "id",
        ascending: true,
      },
      headers: {
        accept: "*/*",
      },
    });
    
    if (res.data.success) {
      const bootcampData: Bootcamp[] = res.data.payload;
      if (bootcampData.length > 0) {
        callback(true, bootcampData);
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

type CallbackMagang = (success: boolean, message: Magang[] | string) => void;

interface Magang {
  id: number;
  name: string;
  description: string;
  imageId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export const getMagang = async (callback: CallbackMagang): Promise<void> => {
  try {
    const res = await axiosInstance.get("/temukarier/magang", {
      params: {
        page: 0,
        size: 3,
        sortBy: "id",
        ascending: true,
      },
      headers: {
        accept: "*/*",
      },
    });
    
    if (res.data.success) {
      const magangData: Magang[] = res.data.payload;
      if (magangData.length > 0) {
        callback(true, magangData);
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

type CallbackProjects = (success: boolean, message: Projects[] | string) => void;

interface Projects {
  id: number;
  name: string;
  description: string;
  imageId: number;
  status: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  createBy: number;
}

export const getProjects = async (callback: CallbackProjects): Promise<void> => {
  try {
    const res = await axiosInstance.get("/temukarier/projects", {
      params: {
        page: 0,
        size: 3,
        sortBy: "id",
        ascending: true,
      },
      headers: {
        accept: "*/*",
      },
    });
    
    if (res.data.success) {
      const projectsData: Projects[] = res.data.payload;
      if (projectsData.length > 0) {
        callback(true, projectsData);
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


type CallbackGabungProject = (success: boolean, message: GabungProject[] | string) => void;

interface GabungProject {
  id: number;
  name: string;
  description: string;
  imageId: number;
  status: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  createdBy: number;
}

export const getGabungProject = async (callback: CallbackGabungProject): Promise<void> => {
  try {
    const res = await axiosInstance.get("/temukarier/projects/1", {
      params: {
      },
      headers: {
        accept: "*/*",
      },
    });
    
    if (res.data.success) {
      const gabungProjectData: GabungProject[] = res.data.payload;
      if (gabungProjectData.length > 0) {
        callback(true, gabungProjectData);
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