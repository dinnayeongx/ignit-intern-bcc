import React from 'react';

interface LabelJobProps {
  job: string;
}

const LabelJob: React.FC<LabelJobProps> = ({ job }) => {
  return (
    <label className='font-normal text-xs justify-center items-center bg-[rgba(217,217,217,0.50)] rounded-sm mr-1 py-0.5 px-1'>
      {job}
    </label>
  );
}

export default LabelJob;
