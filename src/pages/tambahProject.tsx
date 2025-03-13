import React, { useState } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import FormTambahProject from "../components/fragments/formTambahProject.tsx";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";

const TambahProject = () => {
    
    const navigate = useNavigate();
    

    return (
        <>
            <TopBar title="Tambah Project" nav="User Profile" onClick={() => navigate("/userprofile")}></TopBar>

            <div className="py-14 px-24 h-[990px]">
                <div>
                    <h1 className="text-[40px] font-bold mb-[76px]">Deskripsi</h1>
                </div>
                <div >
                    <FormTambahProject></FormTambahProject>
                </div>
            </div>

            <div className="relative w-full bottom-0">
                <Footer></Footer>
            </div>
            
        </>
    );
};

export default TambahProject;    