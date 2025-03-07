import React from "react";
import TopBar from "../components/fragments/topBar";
import LabelJob from "../components/elements/label/label";

interface ProfileBarProps {
    name: string;
    description: string;
  }


const UserProfilePage: React.FC<ProfileBarProps> = ({ name, description }) => {
    return (
        <>
            <TopBar title="User Profile" nav="Projects"></TopBar>

            <div className="h-[340px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <img
                    src="/image/foto-prof.jpg"
                    alt="pic"
                    className="h-24 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.60)] lg:ml-8 mb-2"
                />
                <div className="w-full my-2">
                    <h4 className="h-6 font-bold text-2xl mb-3">{name}</h4>
                    <div className="h-6 items-center mb-3">
                        <LabelJob job="Product Design" />
                    </div>
                    <p className="h-6 font-normal text-[16px] mb-6 lg:mb-0">{description}</p>
                </div>
            </div>
        </>
    )
}

export default UserProfilePage;