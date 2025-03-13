import React, { useState } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Button from "../components/elements/button";
import FilterBar from "../components/elements/label/filterBar.tsx";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";
import PopUpVerif from "../components/fragments/popUpVerif.tsx";

const ProjectPage = () => {

    const [isOpen, setIsOpen] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="Temukarier"></TopBar> 
            <div className="pt-10 pb-24 px-[100px]">
                <h1 className="text-[36px] font-bold text-left mb-[60px]">DesignSphere: Eksplorasi UI/UX Berbasis Web - Raihani Syuja</h1>
                <div className="flex gap-[60px]">
                    <div className="float-left">
                        <div className="h-[320px] w-[320px] mb-10">
                            <img src="/image/project-1.jpeg" alt="" 
                            className="w-full flex rounded-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]"/>
                        </div>
                        <Button onClick={() => setIsOpen(1)}
                            classname="text-white rounded-lg font-medium text-base bg-[#584270] w-[240px] justify-center items-center mx-auto flex">
                            Gabung
                        </Button>
                    </div>
                    <div className="float-right">
                        <div className="flex-row mb-10">
                            <h2 className="text-[24px] font-normal mb-4">Deskripsi Singkat</h2>
                            <p className="text-[16px] font-normal">Vestibulum quis velit ac dui ultricies consectetur. Curabitur lacinia ligula eu faucibus mollis. <br />
                            Curabitur lacinia ligula eu faucibus mollis. <br />
                            Curabitur lacinia ligula eu faucibus mollis.
                            </p>
                        </div>
                        <div className="flex mb-10">
                            <h2 className="text-[24px] font-normal pr-16">Status</h2>
                            <button className="h-9 bg-[rgba(0,255,26,0.50)] p-2 flex items-center justify-center rounded-md" >
                                <p className="text-sm font-normal text-black">On-going</p>
                            </button>
                        </div>
                        <div className="flex mb-10">
                            <h2 className="text-[24px] font-normal pr-10">Deadline</h2>
                            <p className="text-[24px] font-medium text-black">24 Oktober 2025</p>
                        </div>
                        <div className="flex">
                            <h2 className="text-[24px] font-normal pr-14">Kriteria</h2>
                            <FilterBar tag="UI/UX Designer"></FilterBar>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

            {isOpen === 1 && (
                <PopUpVerif image="/image/verif-project.png" onClose={() => setIsOpen(0)}>
                    <p className="text-center mt-4 text-2xl mx-10 font-bold">Permintaanmu sudah terkirim!
                    Tunggu balasannya lewat emailmu ya!</p>
                    <div className="text-center mt-4">
                        <a href="/temukarier" className="text-[#584270] text-xl font-bold">
                            Kembali ke halaman Temukarier
                        </a>
                    </div>
                </PopUpVerif>
            )}
        </>
    );
};

export default ProjectPage;

// import React, { useState, useEffect } from "react";
// import TopBar from "../components/fragments/topBar";
// import Button from "../components/elements/button";
// import FilterBar from "../components/elements/label/filterBar";
// import Footer from "../components/fragments/footer";
// import { useNavigate } from "react-router-dom";
// import PopUpVerif from "../components/fragments/popUpVerif";

// interface Project {
//   title: string;
//   description: string;
//   imageUrl: string;
//   status: string;
//   deadline: string;
//   category: string;
// }

// const ProjectPage = () => {
//   const [isOpen, setIsOpen] = useState(0);
//   const [project, setProject] = useState<Project | null>(null);
//   const navigate = useNavigate();

//   // Fetch project data from the backend
//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch("https://api.yourbackend.com/project/1")
//       .then((response) => response.json())
//       .then((data) => {
//         setProject(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching project data:", error);
//       });
//   }, []);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <TopBar title="Temukarier" />
//       <div className="pt-10 pb-24 px-[100px]">
//         <h1 className="text-[36px] font-bold text-left mb-[60px]">
//           {project.title} - {project.description.split(" ")[0]}
//         </h1>
//         <div className="flex gap-[60px]">
//           <div className="float-left">
//             <div className="h-[320px] w-[320px] mb-10">
//               <img
//                 src={project.imageUrl}
//                 alt="Project"
//                 className="w-full flex rounded-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]"
//               />
//             </div>
//             <Button
//               onClick={() => setIsOpen(1)}
//               classname="text-white rounded-lg font-medium text-base bg-[#584270] w-[240px] justify-center items-center mx-auto flex"
//             >
//               Gabung
//             </Button>
//           </div>
//           <div className="float-right">
//             <div className="flex-row mb-10">
//               <h2 className="text-[24px] font-normal mb-4">Deskripsi Singkat</h2>
//               <p className="text-[16px] font-normal">{project.description}</p>
//             </div>
//             <div className="flex mb-10">
//               <h2 className="text-[24px] font-normal pr-16">Status</h2>
//               <button
//                 className="h-9 bg-[rgba(0,255,26,0.50)] p-2 flex items-center justify-center rounded-md"
//               >
//                 <p className="text-sm font-normal text-black">{project.status}</p>
//               </button>
//             </div>
//             <div className="flex mb-10">
//               <h2 className="text-[24px] font-normal pr-10">Deadline</h2>
//               <p className="text-[24px] font-medium text-black">{project.deadline}</p>
//             </div>
//             <div className="flex">
//               <h2 className="text-[24px] font-normal pr-14">Kriteria</h2>
//               <FilterBar tag={project.category}></FilterBar>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />

//       {isOpen === 1 && (
//         <PopUpVerif image="/image/verif-project.png" onClose={() => setIsOpen(0)}>
//           <p className="text-center mt-4 text-2xl mx-10 font-bold">
//             Permintaanmu sudah terkirim! Tunggu balasannya lewat emailmu ya!
//           </p>
//           <div className="text-center mt-4">
//             <a href="/temukarier" className="text-[#584270] text-xl font-bold">
//               Kembali ke halaman Temukarier
//             </a>
//           </div>
//         </PopUpVerif>
//       )}
//     </>
//   );
// };

// export default ProjectPage;
