import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import ModulBanner from "../components/fragments/modulBanner.tsx";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/fragments/heroSection.tsx";
import { getModulList } from "../services/belajaryuk.sevice.ts";

interface ModulList {
    title: string;
    introduction: string;
    imageIds: number[];
    studyPackageId: number;
    exerciseIds: number[];
    materialIds: number[];
  }

const ModulList = () => {
    const navigate = useNavigate();
    const [modulList, setModulList] = useState<ModulList[]>([]);
    
    useEffect(() => {
        getModulList(1, (success, message) => {
            if (success) {
                setModulList(message);
            } else {
                console.error('Error fetching data:', message);
            }
        });
    }, []);

    useEffect(() => {
        console.log("Modul List:", modulList);
    }, [modulList]);

    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <HeroSection page="Introduction to UI/UX" description="Ayo mulai pelajaranmu di bidang UI/UX!"></HeroSection>

            <div className="h-[auto] w-full pt-[60px] pb-5 px-[80px]">
                <div>
                    {modulList.map((modul, index) => (
                        <ModulBanner key={index} title={modul.title} modul={`Modul ${index + 1}`}
                        onClick={() => navigate(`modul-ui-ux/${modul.studyPackageId}`)}
                        ></ModulBanner>
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default ModulList;