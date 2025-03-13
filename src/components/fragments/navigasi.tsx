import React from "react";
import { useNavigate } from "react-router-dom";

interface NavigasiProps {
  menu: string;
  source: string;
  window: string;
}

const Navigasi: React.FC<NavigasiProps> = ({ menu, source, window }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(window);
  };

  return (
    <button className="mb-12 bg-[#D4CBE780] w-[144px] h-[176px] rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]" onClick={handleClick}>
      <img src={source} alt={menu} className="mx-auto h-[135px]" />
      <h3 className="my-1 text-base font-bold">{menu}</h3>
    </button>
  );
};

export default Navigasi;
