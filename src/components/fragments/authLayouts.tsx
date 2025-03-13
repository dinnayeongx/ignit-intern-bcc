import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { children } = props;
    return (
      <div className='flex justify-center items-center w-[350px] h-[510px] lg:w-[495px] lg:h-[565px] bg-[#E6E2F2] rounded-[50px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] border-2 border-solid backdrop-blur-md lg:py-16'>
          
        <div className='w-[280px] lg:w-[370px]'>
          <h1 className='bg-gradient-to-b from-[#9B7EBE] from-40% to-[#392A4B] bg-clip-text text-transparent text-[60px] lg:text-[80px] leading-tight font-bold text-center font-poppins'>I G N I T</h1>  
          
          {children}
 
        </div>
      </div>
    );
};

export default AuthLayout;