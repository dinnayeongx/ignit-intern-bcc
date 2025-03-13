import React from "react";

interface HeroSectionProps {
    page: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({page, description}) => {
    return (
        <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
            <div className="grid grid-flow-row gap-6 my-auto">
                <h1 className="text-[40px] text-white font-bold text-center">
                    {page}
                </h1>
                <p className="text-[16px] text-white font-normal text-center">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default HeroSection;