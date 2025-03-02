import React from "react";

interface MajorItemProps {
    image: string;
    name: string;
    description: string;
}

const Item: React.FC<MajorItemProps> = ({image, name, description}) => {
    return (
        <>
            <div className="h-[204px] py-3 grid grid-flow-row gap-5 items-center justify-center text-center">
                <div className="h-[100px] w-[100px] bg-[#F2EFF8] rounded-full flex text-center items-center justify-center mx-auto  ">
                    <img src={image} alt="" className="h-[60px] w-[60px]"/>
                </div>
                <div className="grid grid-flow-row gap-2 text-center items-center justify-center">
                    <h1 className="text-[20px] font-normal text-center">
                        {name}
                    </h1>
                    <p className="text-[16px] font-normal text-center text-[#00000080]">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
};

export default Item;