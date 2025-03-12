import React from "react";
import LabelJob from "../elements/label/label";
import Button from "../elements/button";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service.ts";

interface ProfileBarProps {
  name: string;
  description: string;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ name, description }) => {

    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate('/login');
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
        <img src="/image/logout.svg" alt="" className="h-12" onClick={handleLogout}/>
      </button>
    </div>
  );
};

export default ProfileBar;
