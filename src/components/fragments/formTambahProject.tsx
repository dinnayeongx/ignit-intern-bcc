import React, { useState } from "react";
import InputForm from "../elements/input";
import FilterBar from "../elements/label/filterBar.tsx";
import Button from "../elements/button";
import PopUpVerif from "./popUpVerif.tsx";
import { useNavigate } from "react-router-dom";

interface FilterTag {
    tag: string
}

const filterTag: FilterTag[] = [
    {
        tag: "Web Development",
    },
    {
        tag: "Cloud Computing",
    },
    {
        tag: "Cybersecurity",
    },
    {
        tag: "UI/UX Designer",
    },
    {
        tag: "IT Project Manager",
    },
    {
        tag: "Database Administrator",
    },
    {
        tag: "Network Engineer",
    },
];


const FormTambahProject = () => {
    const [image, setImage] = useState(null);
    const [showPopUp, setShowPopUp] = useState(0);
    const navigate = useNavigate();
    
    const handleOpen = () => {
        setShowPopUp(1);
    }
    
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-32 mb-[410px]">
                    <div>
                        <InputForm
                            type="text"
                            placeholder="John Doe"
                            name="degree"
                            className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-9 p-3 px-1"
                            label="Nama Project"
                        ></InputForm>
                        <InputForm
                            type="textarea"
                            placeholder="Vestibulum quis velit ac dui ultricies consectetur. "
                            name="degree"
                            className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-9 p-3 px-1"
                            label="Deskripsi Singkat"
                        ></InputForm>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gambar Project</label>

                            <input
                                type="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                                id="upfile"
                            />

                            <label
                                htmlFor="upfile"
                                className="flex items-center justify-center h-[390px] w-[348px] bg-[#D9D9D980] rounded-[20px] border-gray-300 shadow-sm cursor-pointer absolute overflow-hidden"
                            >
                                <span className="text-4xl text-gray-600">+</span>
                            </label>

                            {image && (
                                <div className="mt-4 w-[348px] h-[390px] rounded-[20px] overflow-hidden">
                                    <img
                                        src={image}
                                        alt="Project Preview"
                                        className="object-cover w-full h-full opacity-100"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <InputForm
                            type="text"
                            placeholder="John Doe"
                            name="degree"
                            className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-16 p-3 px-1"
                            label="Deadline"
                        ></InputForm>
                        
                        <div className="gap-1 h-auto w-5/6 items-center" >
                            <div>
                                <h2 className="text-sm font-medium">Kategori Bidang IT</h2>
                            </div>
                            <div className="flex flex-wrap justify-start items-center">
                                {filterTag.map(filterTag => (
                                    <div key={filterTag.tag}>
                                        <FilterBar tag={filterTag.tag} 
                                            // onClick={() => handleButtonClick(filterTag.tag)}
                                            // isSelected={selectedTag === filterTag.tag}   
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Button classname="w-[240px] text-white mt-3 p-3 rounded-lg justify-center items-center mx-auto"
                onClick={handleOpen}
                >Tambah Project</Button>

                {showPopUp && (
                    <PopUpVerif image="/image/popup-tambah.png" onClose={() => setShowPopUp(0)}>
                        <p className="text-center mt-4 text-2xl font-bold">Project kamu telah berhasil ditambahkan.</p>
                        <div className="text-center mt-4">
                        <a onClick={() => navigate("/userprofile")} className="text-[#584270] text-base font-bold">
                            Kembali ke Halaman Project
                        </a>
                        </div>
                    </PopUpVerif>
                )}
            </div>
            
        </>
    );
};

export default FormTambahProject;