import React from 'react';

interface CardInformProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  career: string;
  title: string;
}


interface CardInformType extends React.FC<CardInformProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
}

const CardInform: CardInformType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[308px] h-[418px] rounded-md border border-1 border-solid border-[#7F5EA3] ">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <a href="#" className="relative">
      <img 
        src={image} 
        alt="product image" 
        className="w-full h-[310px] rounded-t-md relative mb-2"
      />
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ career, title }) => {
  return (
    <>
        <div className="w-full h-[108px] p-3">
            <a href="#">
                <h5 className="text-base mb-1">{career}</h5>
            </a>
            <h5 className="text-xl font-medium">{title}</h5>
        </div>
    </>
  );
};


CardInform.Header = Header;
CardInform.Body = Body;

export default CardInform;
