import axios from "axios";

interface LoginData {
  username: string;
  password: string;
}

type Callback = (status: boolean, res: string) => void;

export const login = (data: LoginData, callback: Callback): void => {
  axios.post("http://daring-humane-swine.ngrok-free.app/api/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    }).catch((err) => {
      callback(false, err.message || "Terjadi kesalahan");
    });
};

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = (
  data: RegisterData,
  callback: Callback
): void => {
  axios.post("https://daring-humane-swine.ngrok-free.app/api/auth/register", data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    callback(true, res.data);
    console.log(res.data);
  }).catch((err) => {
    const errorMessage = err.response?.data?.message || err.message || "Terjadi kesalahan";
    console.log("Error during registration:", errorMessage);
    callback(false, errorMessage);
  });
};

export const logout = (): void => {
  localStorage.removeItem('token');
};
