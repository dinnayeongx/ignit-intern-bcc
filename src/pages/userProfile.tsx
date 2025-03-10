import React, { useState } from "react";
import TopBar from "../components/fragments/topBar";
import LabelJob from "../components/elements/label/label";
import FormUpdate from "../components/fragments/formUpdateBio";
import Education from "../components/elements/label/education";
import Button from "../components/elements/button";
import Skill from "../components/fragments/skill";
import Footer from "../components/fragments/footer";
import FormSkillPopUp from "../components/fragments/formSkillPopUp";
import FormEduPopUp from "../components/fragments/formEduPopUp";

interface ProfileBarProps {
    photo: string;
    name: string;
    passion: string;
    description: string;
}

const Profile: ProfileBarProps = {
    photo: "/image/foto-prof.jpg",
    name: "John Doe",
    passion: "Product Design",
    description: "Passionate about creating amazing designs"
}

interface EducationProps {
    image: string;
    school: string;
    major: string;
    start: string;
    end: string;
}

const education: EducationProps[] = [
    {
        image: "/image/major-1.png",
        school: "University of ABC",
        major: "Sistem Informasi",
        start: "2023",
        end: "Sekarang",
    },
    {
        image: "/image/edu-1.png",
        school: "SMA Negeri 12",
        major: "Jurusan IPA",
        start: "2020",
        end: "2023",
    },
]

interface SkillProps {
    skill: string;
    description: string;
    years: string;
}

const skill: SkillProps[] = [
    {
        skill: "UI/UX Design",
        description: "Proficient in creating intuitive interfaces",
        years: "5",
    },
    {
        skill: "Front-End Development",
        description: "Skilled in HTML, CSS, JavaScript",
        years: "3",
    },
]

const UserProfilePage: React.FC<ProfileBarProps> = ({ name, description, passion, photo }) => {

    const [showFormSkill, setShowFormSkill] = useState(false);
    const [showFormEdu, setShowFormEdu] = useState(false);

    const handleClickButtonSkill = () => {
        setShowFormSkill(!showFormSkill);
    };

    const handleClickButtonEdu = () => {
        setShowFormEdu(!showFormEdu);
    };


    return (
        <>
            <TopBar title="User Profile" nav="Projects"></TopBar>

            
            <div className="h-[340px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[130px] items-center justify-center flex gap-10">
                <div className="h-32 w-32">
                    <img
                        src={Profile.photo}
                        alt="pic"
                        className="h-24 w-24 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.60)] justify-center flex lg:mx-auto mb-2"
                    />
                    <a href="" className="text-base font-medium text-white text-center flex justify-center">Edit Foto</a>
                </div>
                
                <div className="w-full gap-3">
                    <h4 className="h-6 font-bold text-white text-2xl mb-3 items-center">{Profile.name}</h4>
                    <div className="h-6 items-center mb-3">
                        <LabelJob job={Profile.passion} classname="bg-[#F2EEFF]"/>
                    </div>
                    <p className="h-6 font-normal text-[16px] items-center text-white mb-6 lg:mb-0">{Profile.description}</p>
                </div>
            </div>

            <div className="py-[60px] px-[80px] w-full h-auto grid grid-cols-2 gap-[60px]">
                <div className="items-center my-auto">
                    <h1 className="text-[40px] font-bold mb-6">Update Bio Summary</h1>
                    <p className="text-base">Share a little about yourself</p>
                </div>
                <div>
                    <FormUpdate></FormUpdate>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="py-[60px] px-[80px] w-full h-auto grid grid-cols-2 gap-[60px] bg-[#F7F7FB]">
                <div className="items-center my-auto">
                    <h1 className="text-[40px] font-bold mb-6">Education</h1>
                </div>
                <div>
                    {education.map((edu, index) => (
                        <Education key={index} image={edu.image} school={edu.school} major={edu.major} start={edu.start} end={edu.end}>
                        </Education>
                    ))}
                    <Button classname="w-[240px] text-white p-3 rounded-lg mx-auto"
                    onClick={handleClickButtonEdu}
                    >Tambah Edukasi</Button>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="py-[60px] px-[80px] w-full h-auto">
                <h1 className="text-[40px] font-bold mb-[60px] text-center">Skills</h1>
                <div className="grid grid-flow-col gap-[40px] justify-center items-center mx-auto">
                    {skill.map((skill, index) => (
                        <Skill key={index} skill={skill.skill} description={skill.description} years={skill.years}></Skill>
                    ))}
                </div>
                <Button classname="w-[240px] text-white p-3 rounded-lg mx-auto mt-[60px]"
                onClick={handleClickButtonSkill} 
                >Tambah Skill</Button>
            </div>

            <Footer></Footer>

            {showFormSkill && 
                <FormSkillPopUp onClose={handleClickButtonSkill}>
                </FormSkillPopUp>
            }

            {showFormEdu && 
                <FormEduPopUp onClose={handleClickButtonEdu}>
                </FormEduPopUp>
            }
        </>
    )
}

export default UserProfilePage;