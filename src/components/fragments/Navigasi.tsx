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
    <button className="mb-12" onClick={handleClick}>
      <img src={source} alt={menu} className="mx-auto h-[135px]" />
      <h3 className="my-1 text-base font-medium">{menu}</h3>
    </button>
  );
};

export default Navigasi;
