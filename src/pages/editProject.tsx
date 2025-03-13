import React from "react";
import TopBar from "../components/fragments/topBar.tsx";
import FormEditProject from "../components/fragments/formEditProject.tsx";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="Edit Project" nav="User Profile" onClick={() => navigate("/userprofile")}></TopBar>

            <div className="py-14 px-24 h-auto">
                <div>
                    <h1 className="text-[40px] font-bold mb-[76px]">Deskripsi</h1>
                </div>
                <div >
                    <FormEditProject></FormEditProject>
                </div>
            </div>

            <div className="relative w-full bottom-0">
                <Footer></Footer>
            </div>

            
        </>
    );
};

export default EditProject;    