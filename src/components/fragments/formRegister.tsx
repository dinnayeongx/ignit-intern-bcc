import React, {useEffect, useRef, useState} from "react";
import { register, verified } from "../../services/auth.service.ts";
import InputForm from "../elements/input";
import Button from "../elements/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PopUpVerif from "./popUpVerif.tsx";

interface RegisterData {
  username: string
  email: string;
  password: string;
}

interface RegisterProps {
  onSuccess: () => void;
  onVerify: () => void;
}

const FormRegister: React.FC<RegisterProps> = ({onSuccess, onVerify}) => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  

    const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const username = usernameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const confirmPassword = confirmPasswordRef.current?.value;

      if (!username || !email || !password || !confirmPassword) {
        setError("Isi semua data.");
        return;
      }
  
      if (password !== confirmPassword) {
        setError("Password tidak sama!");
        return;
      }
  
      const data: RegisterData = {
        username,
        email,
        password,
      };
  
      register(data, (status, res) => {
        if (status) {
          localStorage.setItem('res', res);
          console.log(res);
          onSuccess();
          // navigate('/login');
        } else {
          setError(res);
          console.log(res);
        }
      });
    };

    useEffect(() => {
      verified((status, res) => {
        if (status) {
          onVerify();
          console.log("Verified Response", res);

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
        else {
          console.log("Verified Error Response", res);
        }
      })
    }, [navigate]);

  return (
    <>
      

      <form onSubmit={handleSignup}>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <InputForm 
          type="text"
          ref={usernameRef} 
          placeholder="Username" 
          name="username" />

        <InputForm 
          type="email" 
          ref={emailRef}
          placeholder="E-mail" 
          name="email" />

        <InputForm 
          type="password" 
          ref={passwordRef}
          placeholder="Password" 
          name="password" />

        <InputForm 
          type="password"
          ref={confirmPasswordRef} 
          placeholder="Ulangi Password" 
          name="confirmPassword" />

        <div className="mt-4">
          <p className="text-sm text-center">
            Sudah punya akun?{" "}
            <Link to="/login">
              <span className="text-black font-semibold text-sm">Masuk</span>
            </Link>
          </p>

          <Button classname="mt-4 w-full rounded-[50px] text-white" type="submit">
            Daftar
          </Button>
        </div>
      </form>
    </>
    
  );
};

export default FormRegister;
