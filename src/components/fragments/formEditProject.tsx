import React, { useState } from "react";
import InputForm from "../elements/input";
import FilterBar from "../elements/label/filterBar.tsx";
import Button from "../elements/button";
import PopUpVerif from "./popUpVerif.tsx";
import { useNavigate } from "react-router-dom";

interface Status {
    status: string
}

const status: Status[] = [
    {
        status: "Ongoing",
    },
    {
        status: "Done",
    },
];

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

const FormEditProject = () => {
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
                <div className="grid grid-cols-2 gap-32 mb-[310px]">
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
                        <div className="gap-1 h-auto w-5/6 items-center mb-16" >
                            <div>
                                <h2 className="text-sm font-medium">Status</h2>
                            </div>
                            <div className="flex flex-wrap justify-start items-center">
                                {status.map(status => (
                                    <div key={status.status}>
                                        <FilterBar tag={status.status} 
                                            // onClick={() => handleButtonClick(filterTag.tag)}
                                            // isSelected={selectedTag === filterTag.tag}   
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

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
                <Button classname="w-[240px] text-white p-3 rounded-lg justify-center items-center mx-auto"
                onClick={handleOpen}
                >Perbaharui</Button>
                {showPopUp && (
                    <PopUpVerif image="/image/popup-tambah.png" onClose={() => setShowPopUp(0)}>
                        <p className="text-center mt-4 text-2xl font-bold">Project kamu telah berhasil ditambahkan.</p>
                        <div className="text-center mt-4">
                        <button onClick={() => navigate("/userprofile")} className="text-[#584270] text-base font-bold">
                            Kembali ke Halaman Project
                        </button>
                        </div>
                    </PopUpVerif>
                )}
            </div>
            
            
        </>
    );
};

export default FormEditProject;

// import React, { useState } from "react";
// import InputForm from "../elements/input";
// import FilterBar from "../elements/label/filterBar";
// import Button from "../elements/button";
// import PopUpVerif from "./popUpVerif";

// interface Status {
//     status: string;
// }

// const status: Status[] = [
//     {
//         status: "Ongoing",
//     },
//     {
//         status: "Done",
//     },
// ];

// interface FilterTag {
//     tag: string;
// }

// const filterTag: FilterTag[] = [
//     {
//         tag: "Web Development",
//     },
//     {
//         tag: "Cloud Computing",
//     },
//     {
//         tag: "Cybersecurity",
//     },
//     {
//         tag: "UI/UX Designer",
//     },
//     {
//         tag: "IT Project Manager",
//     },
//     {
//         tag: "Database Administrator",
//     },
//     {
//         tag: "Network Engineer",
//     },
// ];

// const FormEditProject = () => {
//     const [image, setImage] = useState<string | null>(null);
//     const [showPopUp, setShowPopUp] = useState(0);

//     // State untuk menangani form data
//     const [formData, setFormData] = useState({
//         projectName: "",
//         description: "",
//         status: "",
//         deadline: "",
//         category: "",
//     });

//     // Fungsi untuk menangani perubahan input
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Fungsi untuk menangani perubahan status
//     const handleStatusChange = (status: string) => {
//         setFormData({
//             ...formData,
//             status: status,
//         });
//     };

//     // Fungsi untuk menangani perubahan kategori
//     const handleCategoryChange = (category: string) => {
//         setFormData({
//             ...formData,
//             category: category,
//         });
//     };

//     // Menangani perubahan gambar
//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImage(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     // Menangani submit form
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         // Kirim data ke backend
//         try {
//             const response = await fetch("https://your-api-endpoint.com/projects", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Project berhasil ditambahkan:", data);
//                 setShowPopUp(1); // Menampilkan pop-up verifikasi
//                 setFormData({
//                     projectName: "",
//                     description: "",
//                     status: "",
//                     deadline: "",
//                     category: "",
//                 }); // Reset form
//             } else {
//                 console.error("Gagal menambahkan project");
//                 alert("Gagal menambahkan project.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Terjadi kesalahan.");
//         }
//     };

//     const handleOpen = () => {
//         setShowPopUp(1);
//     };

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="grid grid-cols-2 gap-32 mb-[310px]">
//                         <div>
//                             <InputForm
//                                 type="text"
//                                 placeholder="John Doe"
//                                 name="projectName"
//                                 className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-9 p-3 px-1"
//                                 label="Nama Project"
//                                 value={formData.projectName}
//                                 onChange={handleInputChange}
//                             />
//                             <InputForm
//                                 type="textarea"
//                                 placeholder="Vestibulum quis velit ac dui ultricies consectetur."
//                                 name="description"
//                                 className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-9 p-3 px-1"
//                                 label="Deskripsi Singkat"
//                                 value={formData.description}
//                                 onChange={handleInputChange}
//                             />
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Gambar Project</label>

//                                 <input
//                                     type="file"
//                                     onChange={handleImageChange}
//                                     accept="image/*"
//                                     className="hidden"
//                                     id="upfile"
//                                 />

//                                 <label
//                                     htmlFor="upfile"
//                                     className="flex items-center justify-center h-[390px] w-[348px] bg-[#D9D9D980] rounded-[20px] border-gray-300 shadow-sm cursor-pointer absolute overflow-hidden"
//                                 >
//                                     <span className="text-4xl text-gray-600">+</span>
//                                 </label>

//                                 {image && (
//                                     <div className="mt-4 w-[348px] h-[390px] rounded-[20px] overflow-hidden">
//                                         <img
//                                             src={image}
//                                             alt="Project Preview"
//                                             className="object-cover w-full h-full opacity-100"
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div>
//                             <div className="gap-1 h-auto w-5/6 items-center mb-16">
//                                 <div>
//                                     <h2 className="text-sm font-medium">Status</h2>
//                                 </div>
//                                 <div className="flex flex-wrap justify-start items-center">
//                                     {status.map((statusItem) => (
//                                         <div key={statusItem.status}>
//                                             <FilterBar
//                                                 tag={statusItem.status}
//                                                 onClick={() => handleStatusChange(statusItem.status)}
//                                                 isSelected={formData.status === statusItem.status}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <InputForm
//                                 type="text"
//                                 placeholder="2023-12-31"
//                                 name="deadline"
//                                 className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-16 p-3 px-1"
//                                 label="Deadline"
//                                 value={formData.deadline}
//                                 onChange={handleInputChange}
//                             />

//                             <div className="gap-1 h-auto w-5/6 items-center">
//                                 <div>
//                                     <h2 className="text-sm font-medium">Kategori Bidang IT</h2>
//                                 </div>
//                                 <div className="flex flex-wrap justify-start items-center">
//                                     {filterTag.map((filterTagItem) => (
//                                         <div key={filterTagItem.tag}>
//                                             <FilterBar
//                                                 tag={filterTagItem.tag}
//                                                 onClick={() => handleCategoryChange(filterTagItem.tag)}
//                                                 isSelected={formData.category === filterTagItem.tag}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <Button
//                         classname="w-[240px] text-white p-3 rounded-lg justify-center items-center mx-auto"
//                         type="submit"
//                     >
//                         Perbaharui
//                     </Button>
//                 </form>
//                 {showPopUp && (
//                     <PopUpVerif image="/image/popup-tambah.png" onClose={() => setShowPopUp(0)}>
//                         <p className="text-center mt-4 text-2xl font-bold">Project kamu telah berhasil ditambahkan.</p>
//                         <div className="text-center mt-4">
//                             <a href="/userprofile" className="text-[#584270] text-base font-bold">
//                                 Kembali ke Halaman Project
//                             </a>
//                         </div>
//                     </PopUpVerif>
//                 )}
//             </div>
//         </>
//     );
// };

// export default FormEditProject;
