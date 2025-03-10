import React from "react";
import TopBar from "../components/fragments/topBar";
import ModulBanner from "../components/fragments/modulBanner";
import Footer from "../components/fragments/footer";
import { useNavigate } from "react-router-dom";


const ModulList = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Introduction to UI/UX
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Ayo mulai pelajaranmu di bidang UI/UX!
                    </p>
                </div>
            </div>

            <div className="h-[auto] w-full pt-[60px] pb-5 px-[80px]">
                <div>
                    <ModulBanner title="Introduction to UI/UX" modul="Modul 1"
                        onClick={() => navigate('modul-ui-ux')}></ModulBanner>
                    <ModulBanner title="Introduction to UI/UX" modul="Modul 2"></ModulBanner>
                    <ModulBanner title="Introduction to UI/UX" modul="Modul 3"></ModulBanner>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default ModulList;