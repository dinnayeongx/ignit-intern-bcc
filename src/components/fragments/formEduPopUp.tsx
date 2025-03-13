import React, { useState } from "react";
import Button from "../elements/button";
import InputForm from "../elements/input";
import PopUpVerif from "./popUpVerif.tsx";
import { useNavigate } from "react-router-dom";

interface PopUpEduProps {
    children: React.ReactNode;
    onClose: () => void;
}

const FormEduPopUp: React.FC<PopUpEduProps> = ({children, onClose}) => {
    const [showPopUp, setShowPopUp] = useState(0);
    const navigate = useNavigate();

    const handleOpen = () => {
        setShowPopUp(1);
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="w-[720px] h-[550px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between px-6">
                        <h1 className="text-[28px] font-medium text-[#584270]">Tambah Edukasi</h1>
                        <button className="flex float-right mr-1 -mt-1"
                        onClick={handleClose}>
                            <img src="/image/x.svg" alt="" />
                        </button>
                    </div>
                    
                    <hr className="bg-[rgba(0,0,0,0.10)] mt-3" />

                    <div className="w-full h-auto items-center justify-center mt-5 px-[120px]">
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex. Undergraduate"
                                name="degree"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="Degree"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex: Universitas Brawijaya"
                                name="school"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="School"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex. Sistem Informasi"
                                name="field"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="Field of Study"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3 flex gap-3 justify-stretch">
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="start"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
                                label="Tahun Mulai"
                                note="Required"
                            >
                            </InputForm>
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="end"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
                                label="Tahun Berakhir"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <Button classname="w-[240px] text-white mt-3 p-3 rounded-lg justify-center items-center mx-auto"
                        onClick={handleOpen}
                        >Tambah Edu</Button>
                    
                    </div>
                    
                    {children}
                </div>
            </div>

            {showPopUp && (
                <PopUpVerif image="/image/popup-done.png" onClose={() => setShowPopUp(0)}>
                    <p className="text-center mt-4 text-2xl font-bold">Yay! Berhasil ditambahkan!</p>
                    <div className="text-center mt-4">
                    <button onClick={() => navigate("/userprofile")} className="text-[#584270] text-base font-bold">
                        Kembali ke Halaman User Profile
                    </button>
                    </div>
                </PopUpVerif>
            )}
        </>
    );
};

export default FormEduPopUp;

// import React, { useState } from "react";
// import Button from "../elements/button";
// import InputForm from "../elements/input";
// import PopUpVerif from "./popUpVerif";
// import { useNavigate } from "react-router-dom";

// interface PopUpEduProps {
//     children: React.ReactNode;
//     onClose: () => void;
// }

// const FormEduPopUp: React.FC<PopUpEduProps> = ({children, onClose}) => {
//     const [showPopUp, setShowPopUp] = useState(0);
//     const [formData, setFormData] = useState({
//         degree: "",
//         school: "",
//         field: "",
//         start: "",
//         end: "",
//     });
//     const navigate = useNavigate();

//     // Menangani perubahan input form
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Menangani submit form
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             // Kirim data ke backend
//             const response = await fetch('https://your-api-endpoint.com/education', {
//                 method: 'POST', // atau PUT jika diperlukan
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Data berhasil ditambahkan:", data);
//                 setShowPopUp(1); // Menampilkan pop-up verifikasi
//                 setFormData({ degree: "", school: "", field: "", start: "", end: "" }); // Reset form
//             } else {
//                 console.error("Gagal menambahkan data");
//                 alert("Gagal menambahkan edukasi.");
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
//                 <div className="w-[720px] h-[550px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
//                     <div className="flex justify-between px-6">
//                         <h1 className="text-[28px] font-medium text-[#584270]">Tambah Edukasi</h1>
//                         <button className="flex float-right mr-1 -mt-1" onClick={handleClose}>
//                             <img src="/image/x.svg" alt="Close" />
//                         </button>
//                     </div>

//                     <hr className="bg-[rgba(0,0,0,0.10)] mt-3" />

//                     <form onSubmit={handleSubmit}>
//                         <div className="w-full h-auto items-center justify-center mt-5 px-[120px]">
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Ex. Undergraduate"
//                                     name="degree"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
//                                     label="Degree"
//                                     note="Required"
//                                     value={formData.degree}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Ex: Universitas Brawijaya"
//                                     name="school"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
//                                     label="School"
//                                     note="Required"
//                                     value={formData.school}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Ex. Sistem Informasi"
//                                     name="field"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
//                                     label="Field of Study"
//                                     note="Required"
//                                     value={formData.field}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-3 flex gap-3 justify-stretch">
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Tahun"
//                                     name="start"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
//                                     label="Tahun Mulai"
//                                     note="Required"
//                                     value={formData.start}
//                                     onChange={handleChange}
//                                 />
//                                 <InputForm
//                                     type="text"
//                                     placeholder="Tahun"
//                                     name="end"
//                                     className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
//                                     label="Tahun Berakhir"
//                                     note="Required"
//                                     value={formData.end}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 classname="w-[240px] text-white mt-3 p-3 rounded-lg justify-center items-center mx-auto"
//                             >
//                                 Tambah Edu
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

// export default FormEduPopUp;
