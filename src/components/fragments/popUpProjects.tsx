import React from "react";
import { useNavigate } from "react-router-dom";

const PopUpProjects = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 h-[132px] w-[210px] p-auto bg-white rounded-[20px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)] mx-auto mt-14 mr-32 z-50">
            <div>
                <button className="flex gap-3 items-center justify-center my-auto mx-auto mb-4 mt-8"
                    onClick={() => {navigate('tambah-project')}}>
                    <img src="/image/vector-add.svg" alt="" />
                    <h1>Add Projects</h1>
                </button>
                <hr className="bg-[#00000066] h-[1px] w-4/5 my-auto mx-auto mb-4"/>
                <button className="flex gap-3 items-center justify-center my-auto mx-auto"
                    onClick={() => {navigate('edit-project')}}>
                    <img src="/image/vector-edit.svg" alt="" />
                    <h1>Edit Projects</h1>
                </button>
            </div>
            
        </div>
    );
};

export default PopUpProjects;