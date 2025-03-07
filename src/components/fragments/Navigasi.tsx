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
    <button className="mb-12 bg-[#D4CBE780] w-[144px] h-[176px] rounded-xl" onClick={handleClick}>
      <img src={source} alt={menu} className="mx-auto h-[135px]" />
      <h3 className="my-1 text-base font-medium">{menu}</h3>
    </button>
  );
};

export default Navigasi;
