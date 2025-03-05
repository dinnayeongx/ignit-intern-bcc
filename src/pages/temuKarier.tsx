import React, { useState } from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardKarier from "../components/fragments/cardKarier";
import Footer from "../components/fragments/footer";
import PopUpVerif from "../components/fragments/popUpVerif";
import { useNavigate } from "react-router-dom";

interface Karier {
    id: number,
    image: string,
    contract: string,
    position: string,
    location: string
}


const karier: Karier[] = [
    {
        id: 1,
        image: "/image/karier-1.png",
        contract: "Full Time",
        position: "Software Engineer",
        location: "Jakarta",
    },
    {
        id: 2,
        image: "/image/karier-2.png",
        contract: "Remote",
        position: "UI/UX Designer",
        location: "Bandung",
    },
    {
        id: 3,
        image: "/image/karier-3.png",
        contract: "Contract",
        position: "Data Scientist",
        location: "Surabaya",
    },
];

const TemuKarierPage = () => {

    const [isOpen, setIsOpen] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="Temukarier"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Welcome to Temukarier
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Find your dream job in the IT field
                    </p>
                </div>
            </div>

            <div className="h-[468px] w-full py-[60px] px-[120px] grid grid-flow-col gap-[60px]">
                <div className="flex items-center">
                    <h2 className="text-[40px] font-bold text-left">Sesuaikan dengan <br /> Pilihanmu</h2>
                </div>
                <div className="grid grid-flow-row gap-10">
                    <div>
                        <p className="text-sm font-medium mb-1">Lowongan</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Bootcamp"></FilterBar>
                            <FilterBar tag="Magang"></FilterBar>
                            <FilterBar tag="Project"></FilterBar>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Kategori Bidang IT</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Web Development"></FilterBar>
                            <FilterBar tag="Cloud Computing"></FilterBar>
                            <FilterBar tag="Cybersecurity"></FilterBar>
                            <FilterBar tag="+"></FilterBar>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Lokasi</p>
                        <div className="flex gap-2">
                            <FilterBar tag="Jakarta"></FilterBar>
                            <FilterBar tag="Surabaya"></FilterBar>
                            <FilterBar tag="Bandung"></FilterBar>
                            <FilterBar tag="+"></FilterBar>
                        </div>
                    </div>
                    <Button onClick={() => navigate("/temukarier/project")}
                    classname="bg-[#584270] text-white text-base rounded-lg items-center w-[240px]">
                        Search
                    </Button>
                </div>
            </div>

            <div className="h-[744px] w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Baru Ditambahkan</h1>
                    <li className="flex gap-10 items-center justify-center">
                        {karier.map(karier => (
                            <CardKarier key={karier.id}>
                                <CardKarier.Header image={karier.image} contract={karier.contract} />
                                <CardKarier.Body position={karier.position} location={karier.location} />
                                <CardKarier.Footer onClick={() => setIsOpen(1)} />
                            </CardKarier>
                        ))}
                    </li>
                </div>
            </div>

            <Footer></Footer>

            {isOpen == 1 && (
                <PopUpVerif image="/image/verif-magang.png" onClose={() => setIsOpen(0)}>
                    <p className="text-center mt-4 text-3xl mx-10 font-bold">Silakan Klik Link dibawah Ini untuk 
                    Informasi Lebih Lanjut</p>
                    <div className="text-center mt-4">
                        <a href="https://wa.me/6282338373031" className="text-[#584270] text-3xl font-bold">
                            Link
                        </a>
                    </div>
                </PopUpVerif>
            )}
        </>
    )
}

export default TemuKarierPage;