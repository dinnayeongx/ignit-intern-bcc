import React, { useState } from "react";
import FormRegister from "../components/fragments/formRegister.tsx";
import AuthLayout from "../components/fragments/authLayouts.tsx";
import { Fragment } from "react";
import PopUpVerif from "../components/fragments/popUpVerif.tsx";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      {showPopup && (
        <PopUpVerif image="/image/verif-email.png" onClose={() => setShowPopup(false)}>
          <p className="text-center mt-4 text-2xl font-bold">Silakan melakukan verifikasi melalui link yang telah dikirimkan ke emailmu!</p>
        </PopUpVerif>
      )}

      {isVerified && (
        <PopUpVerif image="/image/verif-email.png" onClose={() => setIsVerified(false)}>
          <p className="text-center mt-4 text-2xl font-bold">Yay! Email berhasil diverifikasi!</p>
          <button className="text-[#584270] text-2xl font-bold" onClick={() => navigate('/login')}>
            Masuk ke IGNIT
          </button>
        </PopUpVerif>
      )}

      <div className="bg-gradient-to-b from-[#a28bc7] to-[#d4cbe7]">
        <div className="justify-center min-h-screen items-center grid lg:grid-cols-2 md:gap-2 lg:mx-auto md:px-[110px]">
          <div className="w-0 lg:w-full">
            <img
              src="/image/foto-2.jpg"
              alt=""
              className="lg:h-[545px] lg:w-[465px] rounded-xl mx-auto flex"
            />
          </div>
          <AuthLayout>
            <p className="text-lg text-center font-normal font-roboto mb-9">
              Selamat Datang di IGNIT!
            </p>
            <FormRegister onSuccess={() => setShowPopup(true)} onVerify={() => setIsVerified(true)}/>
          </AuthLayout>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
