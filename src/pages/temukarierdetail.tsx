import React from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Button from "../components/elements/button";
import Footer from "../components/fragments/footer.tsx";

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

            <div className="h-[auto] w-full py-[65px] px-[80px]">
                <div className="mb-12">
                    <div className="text-2xl font-bold mb-5">
                        Job Description
                    </div>
                    <div>
                        <ul className="list-disc ml-8">
                            <li className="text-2xl font-normal mb-6">Write and deploy code that’s clear, concise, performant, tested, and easy to understand.</li>
                            <li className="text-2xl font-normal mb-6">Participate and own end-to-end feature development.</li>
                            <li className="text-2xl font-normal mb-6">Debug code across multiple platforms when needed.</li>
                            <li className="text-2xl font-normal mb-6">Participate and contribute in scrum rituals.</li>
                            <li className="text-2xl font-normal mb-6">Coordinate with other roles (Product, Design, etc.) on a daily basis.</li>
                            <li className="text-2xl font-normal mb-6">Participate in code reviews.</li>
                            <li className="text-2xl font-normal mb-6">Participate in system design reviews.</li>
                            <li className="text-2xl font-normal mb-6">Migrate legacy monolithic PHP code to microservices using Bun and Typescript.</li>
                            <li className="text-2xl font-normal mb-6">Migrate legacy jQuery code to Vue 3</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="text-2xl font-bold mb-5">
                        Minimum Qualifications
                    </div>
                    <div>
                        <ul className="list-disc ml-8">
                            <li className="text-2xl font-normal mb-6">2+ years of experience in developing full-stack web applications.</li>
                            <li className="text-2xl font-normal mb-6">Proficient with one or more of the programming languages (Typescript, Javascript, PHP, etc).</li>
                            <li className="text-2xl font-normal mb-6">Understanding of concepts like HTTP/GRPC, idempotency, concurrency, asynchronous programming, fault tolerance and monitoring, performance, feature flags.</li>
                            <li className="text-2xl font-normal mb-6">Experienced in developing with frontend web framework (Vue, React, Angular).</li>
                            <li className="text-2xl font-normal mb-6">Experienced in developing API.</li>
                            <li className="text-2xl font-normal mb-6">Good understanding of testing fundamentals.</li>
                            <li className="text-2xl font-normal mb-6">Good understanding of SQL databases.</li>
                            <li className="text-2xl font-normal mb-6">Excellent verbal and written communication skills.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="text-2xl font-bold mb-5">
                        Nice to have
                    </div>
                    <div>
                        <ul className="list-disc ml-8">
                            <li className="text-2xl font-normal mb-6">You have an edge over your competitors if you have any of the following.</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in Typescript.</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in PHP, especially Laravel.</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in designing and deploying microservices.</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in TDD.</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in English (reading and writing).</li>
                            <li className="text-2xl font-normal mb-6">Proficiency in automated testing.</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <div className="flex justify-center items-center mx-auto pb-14">
                <Button
                classname="rounded-xl w-[400px] h-20 bg-[#584270] text-2xl text-white font-medium justify-center items-center"
                onClick={() => window.open("https://www.kalibrr.com/c/pt-infokes-indonesia/jobs/247552/full-stack-developer-wfo-bandung")}
                >Daftar Di Situs Perusahaan</Button>
            </div>

            <Footer></Footer>
            
        </>
    );
}

export default TemuKarierDetail;