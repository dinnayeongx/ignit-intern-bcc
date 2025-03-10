import React from "react";

interface SkillProps {
    skill: string;
    description: string;
    years: string
}

const Skill: React.FC<SkillProps> = ({ skill, description, years }) => {
    return (
        <>
            <div className="h-[128px] w-[370px] p-4 border border-[#584270] rounded-[6px]">
                <h1 className="text-xl font-medium mb-2">{skill}</h1>
                <p className="text-base mb-2">{description}</p>
                <p className="text-sm font-medium">{years} tahun pengalaman</p>
            </div>
        </>
    );
};

export default Skill;