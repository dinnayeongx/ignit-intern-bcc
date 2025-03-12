import React from 'react';

interface CardProductProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
  job: string;
}

interface BodyProps {
  product: string;
  price: number;
}

interface CardProductType extends React.FC<CardProductProps> {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
  }

const CardProduct: CardProductType = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[304px] h-[370px] rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image, job }) => {
  return (
    <a href="#" className="relative">
      <img 
        src={image} 
        alt="product image" 
        className="w-[304px] h-[300px] rounded-t-md relative"
      />
      <div className="absolute -top-1 left-0">
        <label className='font-normal text-xs justify-center items-center bg-white rounded-tl-md rounded-br-md mr-1 py-0.5 px-1'>
          {job}
        </label>
      </div>
    </a>
  );
};

const Body: React.FC<BodyProps> = ({ product, price }) => {
  return (
    <div className="w-full h-[70px] px-3 py-2 grid gap-1">
      <a href="#">
        <h5 className="text-base">{product}</h5>
      </a>
      <h5 className="text-xl font-medium">Harga: {price}</h5>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
