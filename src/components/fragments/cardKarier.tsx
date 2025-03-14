import React from 'react';
import Button from '../elements/button';
import ImageComponent from '../../services/ImageComponent';

interface CardKarierProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

interface BodyProps {
  position?: string;
  location?: string;
  title?: string;
  source?: string;
}

interface FooterProps {
  onClick: () => void;
}

interface CardKarierType extends React.FC<CardKarierProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
    Footer: React.FC<FooterProps>;
}

const CardKarier: CardKarierType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[334px] h-[496px] rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)] border border-1 border-solid border-[rgba(0,0,0,0.10)]">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image, children }) => {
  return (
    <a href="#" className="relative">
      <ImageComponent
      imageUrl={image}
      ></ImageComponent>
      {children}
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ position, location, title, source }) => {
  return (
    <>
        <div className="w-full h-[108px] p-3 pb-2 grid grid-rows-3 gap-1">
            <a href="#">
                <h5 className="text-base">{position} {title}</h5>
            </a>
            <h5 className="text-xl font-medium">{location} {source}</h5>
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

CardKarier.Header = Header;
CardKarier.Body = Body;
CardKarier.Footer = Footer;

export default CardKarier;
