import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import LabelJob from "../components/elements/label/label.tsx";
import FormUpdate from "../components/fragments/formUpdateBio.tsx";
import Education from "../components/elements/label/education.tsx";
import Button from "../components/elements/button";
import Skill from "../components/fragments/skill.tsx";
import Footer from "../components/fragments/footer.tsx";
import FormSkillPopUp from "../components/fragments/formSkillPopUp.tsx";
import FormEduPopUp from "../components/fragments/formEduPopUp.tsx";
import { useNavigate } from "react-router-dom";
import PopUpProjects from "../components/fragments/popUpProjects.tsx";
import { getProfile, updateProfile } from "../services/profile.service.ts";

interface ProfileBarProps {
    photo: string;
    name: string;
    passion: string;
    description: string;
}

// const Profile: ProfileBarProps = {
//     photo: "/image/foto-prof.jpg",
//     name: "John Doe",
//     passion: "Product Design",
//     description: "Passionate about creating amazing designs"
// }

interface EducationProps {
    id: number;
    image: string;
    school: string;
    major: string;
    start: string;
    end: string;
}

// const education: EducationProps[] = [
//     {
//         image: "/image/major-1.png",
//         school: "University of ABC",
//         major: "Sistem Informasi",
//         start: "2023",
//         end: "Sekarang",
//     },
//     {
//         image: "/image/edu-1.png",
//         school: "SMA Negeri 12",
//         major: "Jurusan IPA",
//         start: "2020",
//         end: "2023",
//     },
// ]

interface SkillProps {
    id: number;
    skill: string;
    description: string;
    years: string;
}

const skill: SkillProps[] = [
    {
        id: 1,
        skill: "UI/UX Design",
        description: "Proficient in creating intuitive interfaces",
        years: "5",
    },
    {
        id: 2, 
        skill: "Front-End Development",
        description: "Skilled in HTML, CSS, JavaScript",
        years: "3",
    },
]

interface Profile {
    id: number;
    username: string;
    email: string;
    fullName: string;
    passion: string;
    summary: string;
    educations: EducationProps[];
    skills: SkillProps[];
    // projects: projects[];
    // errors: errors[];
  }

const UserProfilePage: React.FC<ProfileBarProps> = ({ name, description, passion, photo }) => {

    const [showFormSkill, setShowFormSkill] = useState(false);
    const [showFormEdu, setShowFormEdu] = useState(false);
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);
    const [profileImage, setProfileImage] = useState<string>(photo);
    const [profileData, setProfileData] = useState<Profile | null>(null);

    useEffect(() => {
        getProfile((success, message) => {
            if (success) {
                setProfileData(message as Profile);
            } else {
                console.error("Failed to fetch profile:", message);
            }
        });
    }, []);
    

    const handleUpdateProfile = () => {
        updateProfile(profileData as Profile, (success, message) => {
            if (success) {
                console.log("Profile updated successfully");
            } else {
                console.error("Failed to update profile:", message);
            }
        });
    }

    const handleFormSubmit = (updatedData: Partial<Profile>) => {
        setProfileData(prevData => {
            if (!prevData) return prevData;
            
            const newData = { ...prevData, ...updatedData };
    
            updateProfile(newData, (success, message) => {
                if (success) {
                    console.log("Profile updated successfully");
                } else {
                    console.error("Failed to update profile:", message);
                }
            });
    
            return newData;
        });
    };

    const handleButtonClick = () => {
        setShowPopUp(prevState => !prevState);
    };

    useEffect(() => {
        console.log("PopUp state changed:", showPopUp);
    }, [showPopUp]);

    const handleClickButtonSkill = () => {
        setShowFormSkill(!showFormSkill);
    };

    const handleClickButtonEdu = () => {
        setShowFormEdu(!showFormEdu);
    };

    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfileImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };

      if (!profileData) {
        return <div className="flex justify-center items-center h-screen">Loading profile...</div>;
    }


    return (
        <>
            <TopBar title="User Profile"></TopBar>

            {showPopUp && <PopUpProjects/>}

            
            <div className="h-[340px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[130px] items-center justify-center flex gap-10">
                <div className="h-32 w-32">
                    <img
                        src={profileImage}
                        alt="pic"
                        className="h-24 w-24 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.60)] justify-center flex lg:mx-auto mb-2"
                    />
                   <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        className="mt-2 text-white"
                        id="profileImageInput"
                        style={{ display: 'none' }}
                    />
                    <label
                        htmlFor="profileImageInput"
                        className="text-base font-medium text-white text-center flex justify-center cursor-pointer"
                    >Edit Foto
                    </label>
                </div>
                
                <div className="w-full gap-3">
                    <h4 className="h-6 font-bold text-white text-2xl mb-3 items-center">{profileData.username}</h4>
                    <div className="h-6 items-center mb-3">
                        <LabelJob job={profileData.passion} classname="bg-[#F2EEFF]"/>
                    </div>
                    <p className="h-6 font-normal text-[16px] items-center text-white mb-6 lg:mb-0">{profileData.summary}</p>
                </div>

                <Button classname="bg-white text-black rounded-lg w-[128px] font-medium" onClick={handleButtonClick}
                >Projects</Button>
            </div>

            <div className="py-[60px] px-[80px] w-full h-auto grid grid-cols-2 gap-[60px]">
                <div className="items-center my-auto">
                    <h1 className="text-[40px] font-bold mb-6">Update Bio Summary</h1>
                    <p className="text-base">Share a little about yourself</p>
                </div>
                <div>
                    <FormUpdate fullname={profileData.fullname} passion={profileData.passion} summary={profileData.summary} onSubmit={handleFormSubmit}></FormUpdate>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="py-[60px] px-[80px] w-full h-auto grid grid-cols-2 gap-[60px] bg-[#F7F7FB]">
                <div className="items-center my-auto">
                    <h1 className="text-[40px] font-bold mb-6">Education</h1>
                </div>
                <div>
                    {profileData.educations.map((edu, index) => (
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