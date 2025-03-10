import React from "react";

interface EducationProps {
    image: string;
    school: string;
    major: string;
    start: string;
    end: string;
}

const Education: React.FC<EducationProps> = ({ image, school, major, start, end }) => {
    return (
        <>
            <div className="w-full h-auto flex py-5 border-b border-[#0000001A] mb-4">
                <div className="flex w-[60px] h-[60px] bg-[#F2EFF8] rounded-full items-center mr-5">
                    <img src={image} alt="" className="w-[40px] h-[40px] flex items-center justify-center mx-auto"/>
                </div>
                <div className="text-left items-center my-auto mr-auto">
                    <h1 className="flex text-xl">{major}</h1>
                    <h2 className="flex text-base text-[#00000080]">{school}</h2>
                </div>
                <div className="items-center my-auto ml-auto">
                    <h1 className="text-xl font-medium">{start} - {end}</h1>
                </div>
            </div>
            
        </>
    );
};

export default Education;