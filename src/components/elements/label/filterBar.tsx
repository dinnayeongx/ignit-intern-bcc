import React, { useState } from "react";

interface FilterBarProps {
    tag: string;
}

const FilterBar: React.FC<FilterBarProps> = ({tag}) => {

    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <button onClick={handleClick} className={`h-9 bg-[#F2EFF8] w-fit p-2 m-2 items-center after:bg-[#584270] rounded-md ${clicked ? 'bg-[#D4CBE7]' : 'bg-[#D4CBE7]'}`}
         >
            <p className="text-sm font-normal text-black">{tag}</p>
        </button>
    );
};

export default FilterBar;