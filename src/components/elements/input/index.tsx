import React, { forwardRef } from 'react';

interface InputFormProps {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({ type, placeholder, name, className }, ref) => {
  return (
    <input
      ref={ref} 
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className={`bg-transparent text-sm border border-[#584270] rounded-[45px] w-full h-10 px-6 mb-4 text-black ${className}`}
    />
  );
});


export default InputForm;
