import React from "react";
import TopBar from "../components/fragments/topBar";
import ModulBanner from "../components/fragments/modulBanner";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/fragments/heroSection";


const ModulList = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <HeroSection page="Introduction to UI/UX" description="Ayo mulai pelajaranmu di bidang UI/UX!"></HeroSection>

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