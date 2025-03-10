import React from "react";
import TopBar from "../components/fragments/topBar";

const TambahProject = () => {
    return (
        <>
            <TopBar title="Tambah Project" nav="UserProfile"></TopBar>

            <div className="py-14 px-24">
                <div>
                    <h1 className="text-[40px] font-bold mb-[76px]">Deskripsi</h1>
                </div>
            </div>
        </>
    );
};

export default TambahProject;    