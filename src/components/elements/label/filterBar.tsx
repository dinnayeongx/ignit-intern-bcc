import React, { useState } from "react";

interface FilterBarProps {
    tag: string;
    onClick?: () => void;
    isSelected: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({tag, onClick, isSelected}) => {

    return (
        <button onClick={onClick}
        className={`h-9 w-fit p-2 m-1 ml-0 mr-2 rounded-md items-center text-sm font-normal text-black 
        ${isSelected ? 'bg-[#9B7EBD]' : 'bg-[#F2EFF8]'} 
        hover:bg-[#D4CBE7]`}
         >
            <p className="text-sm font-normal text-black">{tag}</p>
        </button>
    );
};

export default FilterBar;