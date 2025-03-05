import { login } from "../../services/auth.service.ts";
import InputForm from "../elements/Input/index.tsx";
import Button from "../elements/button/index.tsx";
import { Link } from 'react-router-dom';
import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import PopUpVerif from "./popUpVerif.tsx";

interface LoginData {
  username: string;
  password: string;
}

const FormLogin = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      setError("Username dan Password harus diisi.");
      return;
    }

    const data: LoginData = {
      username,
      password,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        navigate('/home');
      } else {
        setError("Login gagal. Silakan coba lagi.");
        console.log(res);
      }
    });
  };

  return (
    <>
      {error && 
      <div className="text-red-500 mb-4">
        <PopUpVerif image="/image/verif-eror-login.png" onClose={() => close()}>
            <p className="text-center mt-4 text-3xl font-bold">{error}</p>
        </PopUpVerif>
      </div>}

      <form onSubmit={handleLogin} >

        <InputForm
          type="text" 
          ref={usernameRef}
          placeholder="Username"
          name="username"/>
        
        <InputForm
          type="password"
          ref={passwordRef} 
          placeholder="Kata Sandi"
          name="password"/>

        <div className='w-full mt-6'>
          <p className="text-sm text-center">
            Lupa Password? 
            <Link to="/" className='text-black font-semibold text-sm'> Klik di sini</Link>
          </p>
          <Button classname='my-6 w-full rounded-[50px] text-white' type="submit">
            Masuk
          </Button>
          <p className="text-sm text-center">
            Belum memiliki akun? 
            <Link to="/register" className='text-black font-semibold text-sm'> Daftar Sekarang!</Link>
          </p>
        </div>

      </form>
    </>
    
  );
};

export default FormLogin;
