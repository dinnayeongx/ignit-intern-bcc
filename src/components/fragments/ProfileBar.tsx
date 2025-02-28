import React, { useState } from "react";
import LabelJob from "../elements/label/label";
import Button from "../elements/button";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service.ts";
import PopUpVerif from "./PopUpVerif.tsx";

interface ProfileBarProps {
  name: string;
  description: string;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ name, description }) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      setIsOpen(false);
      if (isOpen) {
        navigate('/login');
      }
      else {
        close();
      }
      
    };

  return (
    <div className="bg-[#F2EFF8] h-[200px] w-full items-center mb-8 lg:px-32 lg:justify-center lg:flex lg:gap-10">
      <img
        src="/image/foto-prof.jpg"
        alt="pic"
        className="h-24 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.60)] lg:ml-8 mb-2"
      />
      <div className="w-full my-2">
        <h4 className="h-6 font-bold text-2xl mb-3">{name}</h4>
        <div className="h-6 items-center mb-3">
          <LabelJob job="Developer" />
          <LabelJob job="Designer" />
        </div>
        <p className="h-6 font-normal text-[16px] mb-6 lg:mb-0">{description}</p>
      </div>
      <Button
        classname="rounded-lg lg:p-1 lg:px-6 lg:h-12 lg:w-52 -mr-6 text-[12px] lg:text-[14px] items-center"
        onClick={() => {
          window.location.href = "/userprofile";
        }}>
        View Profile
      </Button>

      <button>
        <img src="/image/logout.svg" alt="" className="h-12" onClick={() => {
          <PopUpVerif image="/image/verif-logout.png">
            <p className="text-center mt-4 text-[16px] font-bold">Apakah kamu yakin ingin Logout?</p>
            <div className="text-center text-[#584270]">
              <Button
                classname="bg-transparent border border-[#584270] text-[#584270] hover:bg-[#584270] hover:text-white rounded-md w-[112px] mx-3"
                onClick={() => setIsOpen(false)}
              >Tidak
              </Button>
              
              <Button
                classname="bg-[#584270] border border-[#584270]  rounded-md w-[112px] mx-3 text-white"
                onClick={handleLogout}
              >Ya
              </Button>
            </div>
          </PopUpVerif>
        }}/>
      </button>
    </div>
  );
};

export default ProfileBar;
