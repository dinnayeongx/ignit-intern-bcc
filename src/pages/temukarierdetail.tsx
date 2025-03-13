import React from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Button from "../components/elements/button";

const TemuKarierDetail = () => {
    return(
        <>
            <TopBar title="Temukarier"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Full Stack Developer (WFO Bandung) 
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        PT Infokes Indonesia
                    </p>
                </div>
            </div>

            <div>
                <div className="text-2xl font-bold">
                    Job Description
                </div>
                <div>
                    <ul className="">
                        <li className="text-2xl font-normal">Write and deploy code that’s clear, concise, performant, tested, and easy to understand.</li>
                        <li className="text-2xl font-normal">Participate and own end-to-end feature development.</li>
                        <li className="text-2xl font-normal">Debug code across multiple platforms when needed.</li>
                        <li className="text-2xl font-normal">Participate and contribute in scrum rituals.</li>
                        <li className="text-2xl font-normal">Coordinate with other roles (Product, Design, etc.) on a daily basis.</li>
                        <li className="text-2xl font-normal">Participate in code reviews.</li>
                        <li className="text-2xl font-normal">Participate in system design reviews.</li>
                        <li className="text-2xl font-normal">Migrate legacy monolithic PHP code to microservices using Bun and Typescript.</li>
                        <li className="text-2xl font-normal">Migrate legacy jQuery code to Vue 3</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="text-2xl font-bold">
                    Job Description
                </div>
                <div>
                    <ul>
                        <li className="text-2xl font-normal">Write and deploy code that’s clear, concise, performant, tested, and easy to understand.</li>
                        <li className="text-2xl font-normal">Participate and own end-to-end feature development.</li>
                        <li className="text-2xl font-normal">Debug code across multiple platforms when needed.</li>
                        <li className="text-2xl font-normal">Participate and contribute in scrum rituals.</li>
                        <li className="text-2xl font-normal">Coordinate with other roles (Product, Design, etc.) on a daily basis.</li>
                        <li className="text-2xl font-normal">Participate in code reviews.</li>
                        <li className="text-2xl font-normal">Participate in system design reviews.</li>
                        <li className="text-2xl font-normal">Migrate legacy monolithic PHP code to microservices using Bun and Typescript.</li>
                        <li className="text-2xl font-normal">Migrate legacy jQuery code to Vue 3</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="text-2xl font-bold">
                    Job Description
                </div>
                <div>
                    <ul>
                        <li className="text-2xl font-normal">Write and deploy code that’s clear, concise, performant, tested, and easy to understand.</li>
                        <li className="text-2xl font-normal">Participate and own end-to-end feature development.</li>
                        <li className="text-2xl font-normal">Debug code across multiple platforms when needed.</li>
                        <li className="text-2xl font-normal">Participate and contribute in scrum rituals.</li>
                        <li className="text-2xl font-normal">Coordinate with other roles (Product, Design, etc.) on a daily basis.</li>
                        <li className="text-2xl font-normal">Participate in code reviews.</li>
                        <li className="text-2xl font-normal">Participate in system design reviews.</li>
                        <li className="text-2xl font-normal">Migrate legacy monolithic PHP code to microservices using Bun and Typescript.</li>
                        <li className="text-2xl font-normal">Migrate legacy jQuery code to Vue 3</li>
                    </ul>
                </div>
            </div>

            <Button
            classname="rounded-xl w-[400px] bg-[#584270]"
            >Daftar Di Situs Perusahaan</Button>
        </>
    );
}

export default TemuKarierDetail;


// import React, { useState, useEffect } from "react";
// import TopBar from "../components/fragments/topBar";
// import Button from "../components/elements/button";

// interface Section {
//   title: string;
//   content: string[];
// }

// interface JobDetail {
//   title: string;
//   company: string;
//   sections: Section[];
//   applyLink: string;
// }

// const TemuKarierDetail = () => {
//   const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await fetch("https://api.yourbackend.com/jobdetails/1");
//         const data: JobDetail = await response.json();
//         setJobDetail(data);
//       } catch (error) {
//         console.error("Error fetching job details:", error);
//       }
//     };

//     fetchJobDetails();
//   }, []);

//   if (!jobDetail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <TopBar title="Temukarier" />

//       <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
//         <div className="grid grid-flow-row gap-6 my-auto">
//           <h1 className="text-[40px] text-white font-bold text-center">{jobDetail.title}</h1>
//           <p className="text-[16px] text-white font-normal text-center">{jobDetail.company}</p>
//         </div>
//       </div>

//       {jobDetail.sections && jobDetail.sections.length > 0 ? (
//         jobDetail.sections.map((section, index) => (
//           <div key={index} className="mb-8">
//             <div className="text-2xl font-bold">{section.title}</div>
//             <div>
//               <ul>
//                 {section.content.map((item, index) => (
//                   <li className="text-2xl font-normal" key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}

//       <Button
//         classname="rounded-xl w-[400px] bg-[#584270]"
//         onClick={() => window.open(jobDetail.applyLink, "_blank")}
//       >
//         Daftar Di Situs Perusahaan
//       </Button>
//     </>
//   );
// };

// export default TemuKarierDetail;
