import React from 'react';

interface LabelJobProps {
  job: string;
  classname: string;
}

const LabelJob: React.FC<LabelJobProps> = ({ job, classname }) => {
  return (
    <label className={`font-normal text-xs justify-center items-center rounded-sm mr-1 py-0.5 px-1 ${classname}`}>
      {job}
    </label>
  );
}

export default LabelJob;
