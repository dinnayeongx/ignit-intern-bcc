import React from 'react';
import Button from '../elements/button';

interface CardProjectProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  author: string;
  title: string;
}

interface FooterProps {
  onClick: () => void;
}

interface CardProjectType extends React.FC<CardProjectProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
    Footer: React.FC<FooterProps>;
}

const CardProject: CardProjectType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[304px] h-[466px] rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]">
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
        className="w-full h-[300px] rounded-t-xl relative"
      />
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ author, title }) => {
  return (
    <>
        <div className="w-full h-[108px] p-3 pb-2 grid grid-rows-3 gap-1">
            <a href="#">
                <h5 className="text-base">{author}</h5>
            </a>
            <h5 className="text-xl font-medium">{title}</h5>
        </div>
    </>
  );
};

const Footer: React.FC<FooterProps> = ({ onClick }) => {
    return (
      <>
          <Button classname='bg-[#584270] text-white w-[150px] mb-6 text-xl font-medium rounded-lg flex justify-center items-center mx-auto' onClick={onClick} >
                  Daftar
          </Button>
      </>
    );
  };

CardProject.Header = Header;
CardProject.Body = Body;
CardProject.Footer = Footer;

export default CardProject;
