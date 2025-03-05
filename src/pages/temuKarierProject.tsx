import React, { useState } from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardProject from "../components/fragments/cardProject";
import Footer from "../components/fragments/footer";
import { useNavigate } from "react-router-dom";

interface Project {
    id: number,
    image: string,
    author: string,
    title: string
}


const project: Project[] = [
    {
        id: 1,
        image: "/image/project-1.jpeg",
        author: "Raihani Syuja",
        title: "DesignSphere",
    },
    {
        id: 2,
        image: "/image/project-1.jpeg",
        author: "Dinda Kumala",
        title: "WebCrafters",
    },
    {
        id: 3,
        image: "/image/project-1.jpeg",
        author: "Anthony Glen",
        title: "PixelForge",
    },
];

const TemuKarierProjectPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <TopBar title="Temukarier"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Welcome to Temukarier
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Find your dream job in the IT field
                    </p>
                </div>
            </div>

            <div className="h-[468px] w-full py-[60px] px-[120px] grid grid-flow-col gap-[60px]">
                <div className="flex items-center">
                    <h2 className="text-[40px] font-bold text-left">Sesuaikan dengan <br /> Pilihanmu</h2>
                </div>
                <div className="grid grid-flow-row gap-10">
                    <div>
                        <p className="text-sm font-medium mb-1">Lowongan</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Bootcamp"></FilterBar>
                            <FilterBar tag="Magang"></FilterBar>
                            <FilterBar tag="Project"></FilterBar>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Kategori Bidang IT</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Web Development"></FilterBar>
                            <FilterBar tag="Cloud Computing"></FilterBar>
                            <FilterBar tag="Cybersecurity"></FilterBar>
                            <FilterBar tag="+"></FilterBar>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Lokasi</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Jakarta"></FilterBar>
                            <FilterBar tag="Surabaya"></FilterBar>
                            <FilterBar tag="Bandung"></FilterBar>
                            <FilterBar tag="+"></FilterBar>
                        </div>
                    </div>
                    <Button classname="bg-[#584270] text-white text-base rounded-lg items-center w-[240px]">
                        Search
                    </Button>
                </div>
            </div>

            <div className="h-[744px] w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Daftar Project yang Tersedia</h1>
                    <li className="flex gap-10 items-center justify-center">
                        {project.map(project => (
                            <CardProject key={project.id}>
                                <CardProject.Header image={project.image} />
                                <CardProject.Body author={project.author} title={project.title} />
                                <CardProject.Footer 
                                    onClick={() => {
                                        if (project.id == 1) {
                                            navigate("/temukarier/project/project-detail");
                                        }
                                        else if (project.id == 2) {
                                            navigate("/temukarier/project-2");
                                        }
                                        else if (project.id == 3) {
                                            navigate("/temukarier/project-3");
                                        }
                                    } } />
                            </CardProject>
                        ))}
                    </li>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default TemuKarierProjectPage;