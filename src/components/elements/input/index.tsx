import React, { forwardRef } from 'react';

interface InputFormProps {
  label?: string;
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  note?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({ type, placeholder, name, className, label, note }, ref) => {
  return (
    <>
      <div className='flex flex-col'>
        <h2 className='text-sm font-medium mb-1'>{label}</h2>
        <input
        ref={ref} 
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`bg-transparent text-sm border border-[#584270] rounded-[45px] w-full h-10 px-5 text-black ${className}`}
        required
        />
        <h2 className='text-xs text-[#00000080] mb-4 mt-1'>{note}</h2>
      </div>
      
    </>
    
  );
});


export default InputForm;
