import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardProject from "../components/fragments/cardProject";
import Footer from "../components/fragments/footer";
import { useNavigate } from "react-router-dom";
import { getTags, getProjects } from "../services/temukarier.service";

interface Project {
    id: number,
    image: string,
    author: string,
    title: string
    category: string,
    status: string,
}


// const project: Project[] = [
//     {
//         id: 1,
//         image: "/image/project-1.jpeg",
//         author: "Raihani Syuja",
//         title: "DesignSphere",
//         category: "UI/UX Designer",
//         status: "On Going",
//     },
//     {
//         id: 2,
//         image: "/image/project-1.jpeg",
//         author: "Dinda Kumala",
//         title: "WebCrafters",
//         category: "UI/UX Designer",
//         status: "On Going",
//     },
//     {
//         id: 3,
//         image: "/image/project-1.jpeg",
//         author: "Anthony Glen",
//         title: "PixelForge",
//         category: "IoT Developer",
//         status: "On Going",
//     },
// ];

// interface FilterTag {
//     tag: string
// }

// const filterTag: FilterTag[] = [
//     {
//         tag: "IoT Developer",
//     },
//     {
//         tag: "Cloud Computing",
//     },
//     {
//         tag: "Cybersecurity",
//     },
//     {
//         tag: "UI/UX Designer",
//     },
//     {
//         tag: "IT Project Manager",
//     },
//     {
//         tag: "Database Administrator",
//     },
//     {
//         tag: "Network Engineer",
//     },
// ];

const TemuKarierProjectPage = () => {

    const navigate = useNavigate();
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState<Project[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [projectsData, setProjectsData] = useState<Project[]>([]);
        
    useEffect(() => {
        getTags((success, message) => {
            console.log("API Response:", message);
            if (success) {
                setTags(message);
          }
        });
    }, []);
        
    useEffect(() => {
        console.log("Tags State:", tags);
    }, [tags]);

    useEffect(() => {
        getProjects((success, message) => {
            console.log("API Response 2:", message);
            if (success) {
                const formattedData = message.map((item: any) => ({
                    id: item.id,
                    image: `/image/karier-${item.imageId}.png`,
                    author: item.createdBy,
                    title: item.name,
                    category: item.tags[0] || "Unknown",
                    status: item.status,
                }));
                    setProjectsData(formattedData);
                  }
                });
            }, []);
        
            useEffect(() => {
                console.log("Magang Data:", projectsData);
            }, [projectsData]);

    const handleFilterButtonClick = (tag: string) => {
        if (selectedFilters.includes(tag)) {
            const filters = selectedFilters.filter((el) => el !== tag);
            setSelectedFilters(filters);
        }
        else {
            setSelectedFilters([...selectedFilters, tag]);
        }
    };
    
    useEffect(() => {
        filterItems();
    }, [selectedFilters, projectsData]);
        
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            const showItems = projectsData.filter((item) => {
                return selectedFilters.includes(item.category)}
            );
            setFilteredItems(showItems.flat());
        }
        else {
            setFilteredItems(projectsData);
        }
    }

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

            <div className="h-auto w-full py-[60px] px-[120px] grid grid-flow-row gap-[40px]">
                <h2 className="text-[40px] font-bold text-center">Sesuaikan dengan Pilihanmu</h2>
                <div className="px-[260px]">
                    <p className="text-2xl font-medium mb-2 text-center">Kategori Bidang IT</p>
                    <div className="flex flex-wrap gap-2 mx-auto h-auto w-full text-center justify-center items-center">
                        {tags.map((tag) => (
                            <div className="flex justify-center items-center" key={tag}>
                                <FilterBar tag={tag} 
                                onClick={() => handleFilterButtonClick(tag)}
                                isSelected={selectedFilters.includes(tag)}
                                />
                          </div>
                        ))}
                    </div> 
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Daftar Project yang Tersedia</h1>
                    <li className="grid grid-cols-3 gap-10 items-center justify-center">
                        {projectsData.map(project => (
                            <CardProject key={project.id}>
                                <CardProject.Header image={project.image} />
                                <CardProject.Body author={project.author} title={project.title} />
                                <CardProject.Footer 
                                    onClick={() => navigate(`/temukarier/project/${project.id}`)}  />
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