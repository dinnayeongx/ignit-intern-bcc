import React, { useState } from "react";
import Button from "../elements/button";
import InputForm from "../elements/Input";
import PopUpVerif from "./popUpVerif";

interface PopUpSKillProps {
    children: React.ReactNode;
    onClose: () => void;
}

const FormSKillPopUp: React.FC<PopUpSKillProps> = ({children, onClose}) => {
    const [showPopUp, setShowPopUp] = useState(0);
    
    const handleOpen = () => {
        setShowPopUp(1);
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="w-[650px] h-[530px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between px-6">
                        <h1 className="text-[28px] font-medium text-[#584270]">Tambah Edukasi</h1>
                        <button className="flex float-right mr-1 -mt-1"
                        onClick={handleClose}>
                            <img src="/image/x.svg" alt="" />
                        </button>
                    </div>
                    
                    <hr className="bg-[rgba(0,0,0,0.10)] mt-3" />

                    <div className="w-full h-auto items-center justify-center mt-5 px-[80px]">
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex. UI/UX Design"
                                name="skill"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
                                label="Skills"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex: Proficient in creating intuitive interfaces"
                                name="description"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
                                label="Deskripsi Singkat"
                                note="Optional"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="pengalaman"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
                                label="Pengalaman"
                                note="Optional"
                            >
                            </InputForm>
                        </div>
                        <Button classname="w-[240px] text-white mt-10 p-3 rounded-lg justify-center items-center mx-auto"
                        onClick={handleOpen}
                        >Tambah Skill</Button>
                    
                    </div>
                    
                    {children}
                </div>
            </div>

            {showPopUp && (
                <PopUpVerif image="/image/popup-done.png" onClose={() => setShowPopUp(0)}>
                    <p className="text-center mt-4 text-2xl font-bold">Yay! Berhasil ditambahkan!</p>
                    <div className="text-center mt-4">
                    <a href="/userprofile" className="text-[#584270] text-base font-bold">
                        Kembali ke Halaman User Profile
                    </a>
                    </div>
                </PopUpVerif>
            )}
        </>
    );
};

export default FormSKillPopUp;


// import React, { useState } from "react";
// import Button from "../elements/button";
// import InputForm from "../elements/Input";
// import PopUpVerif from "./popUpVerif";

// interface PopUpSKillProps {
//     children: React.ReactNode;
//     onClose: () => void;
// }

// const FormSKillPopUp: React.FC<PopUpSKillProps> = ({ children, onClose }) => {
//     const [showPopUp, setShowPopUp] = useState(0);
    
//     const [formData, setFormData] = useState({
//         skill: "",
//         description: "",
//         pengalaman: "",
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('https://your-api-endpoint.com/skills', {
//                 method: 'POST', 
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Data berhasil ditambahkan:", data);
//                 setShowPopUp(1);
//                 setFormData({ skill: "", description: "", pengalaman: "" });
//             } else {
//                 console.error("Gagal menambahkan data");
//                 alert("Gagal menambahkan skill.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Terjadi kesalahan.");
//         }
//     };

//     const handleOpen = () => {
//         setShowPopUp(1);
//     };

//     const handleClose = () => {
//         onClose();
//     };

//     return (
//         <>
//             <div className="fixed inset-0 z-50 flex items-center justify-center">
//                 <div className="w-[650px] h-[530px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
//                     <div className="flex justify-between px-6">
//                         <h1 className="text-[28px] font-medium text-[#584270]">Tambah Edukasi</h1>
//                         <button className="flex float-right mr-1 -mt-1" onClick={handleClose}>
//                             <img src="/image/x.svg" alt="Close" />
//                         </button>
//                     </div>

//                     <hr className="bg-[rgba(0,0,0,0.10)] mt-3" />

//                     <form onSubmit={handleSubmit}>
//                         <div className="w-full h-auto items-center justify-center mt-5 px-[80px]">
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Ex. UI/UX Design"
//                                     name="skill"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
//                                     label="Skills"
//                                     note="Required"
//                                     value={formData.skill}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Ex: Proficient in creating intuitive interfaces"
//                                     name="description"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
//                                     label="Deskripsi Singkat"
//                                     note="Optional"
//                                     value={formData.description}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Tahun"
//                                     name="pengalaman"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-10 mb-0 p-3 px-1"
//                                     label="Pengalaman"
//                                     note="Optional"
//                                     value={formData.pengalaman}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 classname="w-[240px] text-white mt-10 p-3 rounded-lg justify-center items-center mx-auto"
//                             >
//                                 Tambah Skill
//                             </Button>
//                         </div>
//                     </form>

//                     {children}
//                 </div>
//             </div>

//             {showPopUp && (
//                 <PopUpVerif image="/image/popup-done.png" onClose={() => setShowPopUp(0)}>
//                     <p className="text-center mt-4 text-2xl font-bold">Yay! Berhasil ditambahkan!</p>
//                     <div className="text-center mt-4">
//                         <a href="/userprofile" className="text-[#584270] text-base font-bold">
//                             Kembali ke Halaman User Profile
//                         </a>
//                     </div>
//                 </PopUpVerif>
//             )}
//         </>
//     );
// };

// export default FormSKillPopUp;
