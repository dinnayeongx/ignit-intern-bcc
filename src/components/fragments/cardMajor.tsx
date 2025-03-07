import React from 'react';

interface CardMajorProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
  window: string;
}

interface BodyProps {
  major: string;
}

interface CardMajorType extends React.FC<CardMajorProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
  }

const CardMajor: CardMajorType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[304px] h-[360px] rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image, window }) => {
  return (
    <a href={window} className="relative">
      <img 
        src={image} 
        alt="product image" 
        className="w-[304px] h-[300px] rounded-t-md relative"
      />
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ major }) => {
  return (
    <div className="w-full h-[62px] p-3 grid grid-flow-row items-center">
        <h5 className="text-xl font-medium items-center">{major}</h5>
    </div>
  );
};

CardMajor.Header = Header;
CardMajor.Body = Body;

export default CardMajor;
