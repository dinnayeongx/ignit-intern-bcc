import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  classname = '', 
  onClick = () => {}, 
  type = "button" 
}) => {
  return (
    <button
      className={`flex h-11 py-3 bg-[#584270] items-center justify-center hover:bg-opacity-50 ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
