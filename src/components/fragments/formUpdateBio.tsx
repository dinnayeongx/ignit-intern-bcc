import React, { useState } from "react";
import InputForm from "../elements/input";
import Button from "../elements/button";

interface FormUpdateProps {
    initialFullname: string;
    initialPassion: string;
    initialSummary: string;
    onSubmit: (data: { fullName: string; passion: string; summary: string }) => void;
}

const FormUpdate: React.FC<FormUpdateProps> = ({ initialFullname, initialPassion, initialSummary, onSubmit }) => {
    const [fullName, setFullName] = useState(initialFullname);
    const [passion, setPassion] = useState(initialPassion);
    const [summary, setSummary] = useState(initialSummary);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !passion || !summary) {
            setError("All fields are required.");
            return;
        }

        onSubmit({ fullName, passion, summary });

    }

    return (
        <div className="w-full h-auto items-center justify-left">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="John Doe"
                        name="fullname"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Full Name"
                        note="Required"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    >
                    </InputForm>
                </div>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="Ex: Product Design"
                        name="passion"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Passion"
                        note="Required"
                        value={passion}
                        onChange={(e) => setPassion(e.target.value)}
                    >
                    </InputForm>
                </div>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="Enter your summary here"
                        name="summary"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Summary"
                        note="Required"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    >
                    </InputForm>
                </div>
                <Button classname="w-[240px] text-white p-3 rounded-lg" type="submit"
                >Simpan Perubahan</Button>
            </form>
            
            
        </div>
    );
}

export default FormUpdate;


// import React, { useState } from "react";
// import InputForm from "../elements/input";
// import Button from "../elements/button";

// const FormUpdate = () => {
//     const [formData, setFormData] = useState({
//         fullname: "",
//         passion: "",
//         summary: "",
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
//             const response = await fetch('https://your-api-endpoint.com/update', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Data berhasil diperbarui:", data);
//                 alert("Perubahan berhasil disimpan!");
//             } else {
//                 console.error("Gagal memperbarui data");
//                 alert("Gagal memperbarui data!");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Terjadi kesalahan saat memperbarui data!");
//         }
//     };

//     return (
//         <div className="w-full h-auto items-center justify-left">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-10">
//                     <InputForm
//                         type="text"
//                         placeholder="John Doe"
//                         name="fullname"
//                         className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
//                         label="Full Name"
//                         note="Required"
//                         value={formData.fullname}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-10">
//                     <InputForm
//                         type="text"
//                         placeholder="Ex: Product Design"
//                         name="passion"
//                         className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
//                         label="Passion"
//                         note="Required"
//                         value={formData.passion}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-10">
//                     <InputForm
//                         type="text"
//                         placeholder="Enter your summary here"
//                         name="summary"
//                         className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
//                         label="Summary"
//                         note="Required"
//                         value={formData.summary}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <Button type="submit" classname="w-[240px] text-white p-3 rounded-lg">
//                     Simpan Perubahan
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default FormUpdate;
