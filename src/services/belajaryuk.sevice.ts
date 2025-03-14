import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get('token')}`,
  "ngrok-skip-browser-warning": "69420",
}

type CallbackBelajarYuk = (success: boolean, message: BelajarYuk[] | string) => void;

interface BelajarYuk {
  title: string;
  subtitle: string;
  imageId: number;
  price: number;
  tag: string;
  moduleIds: number[];
}

export const getBelajarYuk = async (callback: CallbackBelajarYuk): Promise<void> => {
  try {
    const res = await axiosInstance.get("/belajaryuk/packages", {
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
      const belajaryukData: BelajarYuk[] = res.data.payload;
      if (belajaryukData.length > 0) {
        callback(true, belajaryukData);
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


type CallbackSavedBelajarYuk = (success: boolean, message: SavedBelajarYuk[] | string) => void;

interface SavedBelajarYuk {
  title: string;
  subtitle: string;
  imageId: number;
  price: number;
  tag: string;
  moduleIds: number[];
}

export const getSavedBelajarYuk = async (callback: CallbackSavedBelajarYuk): Promise<void> => {
  try {
    const res = await axiosInstance.get("/belajaryuk/packages/me", {
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
      const belajaryukSavedData: BelajarYuk[] = res.data.payload;
      if (belajaryukSavedData.length > 0) {
        callback(true, belajaryukSavedData);
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

type CallbackModulList = (success: boolean, message: ModulList[] | string) => void;

interface ModulList {
  title: string;
  introduction: string;
  imageIds: number[];
  studyPackageId: number;
  exerciseIds: number[];
  materialIds: number[];
}

export const getModulList = async (callback: CallbackModulList): Promise<void> => {
  try {
    const res = await axiosInstance.get("/belajaryuk/modules/1", {
      params: {
      },
      headers: {
        accept: "*/*",
      },
    });
    
    if (res.data.success) {
      const modulListData: ModulList[] | null = res.data.payload;
      if (modulListData) {
        callback(true, modulListData);
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
