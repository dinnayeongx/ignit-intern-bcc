import React from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Footer from "../components/fragments/footer.tsx";
import ListProject from "../components/fragments/listProject.tsx";
import { useNavigate } from "react-router-dom";

interface ListProject {
    image: string;
    title: string;
}

const listProject: ListProject[] = [
    {
        image: "/image/project-2.svg",
        title: "EcoTrack: Sistem Pemantauan Jejak Karbon Berbasis AI",
    },
    {
        image: "/image/project-2.svg",
        title: "GreenTech: Platform Digital untuk Keberlanjutan Lingkungan",
    },
    {
        image: "/image/project-2.svg",
        title: "SmartEnergy: Optimasi Konsumsi Listrik dengan IoT",
    },
];

const MyProject = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="Project" nav="User Profile" onClick={() => navigate("/userprofile")}></TopBar>
            <div className=" ">
                {listProject.map((item, index) => (
                    <ListProject
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyProject;