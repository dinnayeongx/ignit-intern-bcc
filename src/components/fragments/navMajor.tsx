import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./majorItem.tsx";

const navigasi = [
  {
    image: "/image/major-5.png",
    name: "Product Manager",
    description: "",
    window: "/cakrawalait/product-manager",
  },
  {
    image: "/image/major-2.png",
    name: "UI/UX Designer",
    description: "",
    window: "/cakrawalait/ui-ux",
  },
  {
    image: "/image/major-4.png",
    name: "Data Sciences",
    description: "",
    window: "/cakrawalait/data-sciences",
  },
  {
    image: "/image/major-3.png",
    name: "Programming",
    description: "",
    window: "/cakrawalait/programming",
  },
  {
    image: "/image/major-1.png",
    name: "UI/UX Designer",
    description: "",
    window: "/cakrawalait/ui-ux",
  },
  {
    image: "/image/major-6.png",
    name: "Product Manager",
    description: "",
    window: "/cakrawalait/product-manager",
  },
  {
    image: "/image/major-7.png",
    name: "Programming",
    description: "",
    window: "/cakrawalait/programming",
  },
  {
    image: "/image/major-1.png",
    name: "Data Sciences",
    description: "",
    window: "/cakrawalait/data-sciences",
  },
];

const NavigasiMajor: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? navigasi.length - 4 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 4;
      return newIndex >= navigasi.length ? 0 : newIndex;
    });
  };

  const visibleItems = navigasi.slice(currentIndex, currentIndex + 4);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 focus:outline-none">
        <img src="/image/vector-left.svg" alt="left-arrow" className="w-6 h-6" />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-36">
        {visibleItems.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            window={item.window}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 focus:outline-none">
        <img src="/image/vector-right.svg" alt="right-arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NavigasiMajor;
