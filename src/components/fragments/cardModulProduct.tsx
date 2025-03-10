import React from 'react';

interface CardModulProductProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
  job?: string;
  onClick?: () => void
}

interface BodyProps {
  title: string;
  product: string;
  price?: number;
}

interface CardModulProductType extends React.FC<CardModulProductProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
  }

const CardModulProduct: CardModulProductType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[304px] h-auto rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image, job, onClick }) => {
  return (
    <a href="#" className="relative" onClick={onClick}>
      <img 
        src={image} 
        alt="product image" 
        className="w-[304px] h-auto rounded-t-md relative"
      />
      <div className="absolute -top-1 left-0">
        <label className='font-normal text-xs justify-center items-center bg-white rounded-tl-md rounded-br-md mr-1 py-0.5 px-1'>
          {job}
        </label>
      </div>
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ title, product, price }) => {
  return (
    <div className="w-full h-auto px-3 py-3 grid gap-2">
      <a href="#">
        <h5 className="text-base">{title}</h5>
      </a>
      <h5 className="text-xl font-medium">{product}</h5>
      <h5 className="text-xl font-medium text-[#584270]">{price}</h5>
    </div>
  );
};

CardModulProduct.Header = Header;
CardModulProduct.Body = Body;

export default CardModulProduct;
