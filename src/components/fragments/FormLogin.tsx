import { login } from "../../services/auth.service.ts";
import InputForm from "../elements/Input";
import Button from "../elements/button";
import { Link } from 'react-router-dom';
import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

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
      setError("Username and Password are required.");
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
        setError("Login failed. Please try again.");
        console.log(res);
      }
    });
  };

  return (
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
        <p className="text-sm text-center">Lupa Password? <Link to="/" className='text-black font-semibold text-sm'>Klik di sini</Link></p>
        <Button classname='my-6 rounded-[50px]' type="submit">Masuk</Button>
        <p className="text-sm text-center">Belum memiliki akun? <Link to="/register" className='text-black font-semibold text-sm'>Daftar Sekarang!</Link></p>
      </div>

    </form>
  );
};

export default FormLogin;
