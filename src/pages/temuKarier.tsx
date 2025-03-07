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
    position: string,
    location: string,
    link: string,
}


const karier: Karier[] = [
    {
        id: 1,
        image: "/image/karier-1.png",
        position: "Software Engineer",
        location: "Jakarta",
        link: "https://wa.me/6282338373031",
    },
    {
        id: 2,
        image: "/image/karier-2.png",
        position: "Product Design Intern - VIDA Digital Identity",
        location: "Bandung",
        link: "https://vida.freshteam.com/jobs/DK6OhvPc9qdU/product-design-intern",
    },
    {
        id: 3,
        image: "/image/karier-3.png",
        position: "Data Scientist",
        location: "Surabaya",
        link: "",
    },
];

const TemuKarierPage = () => {

    const [isOpen, setIsOpen] = useState(0);
    const [selectedLink, setSelectedLink] = useState<string>("");
    const navigate = useNavigate();

    const openPopUp = (link: string) => {
        setSelectedLink(link);
        setIsOpen(1);
    };

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

            <div className="h-[595px] w-full py-[60px] px-[120px] grid grid-flow-row gap-[40px]">
                <h1 className="text-[40px] font-bold text-center">Pilih Lowongan yang kamu cari!</h1>
                <img src="/image/temukarier-1.png" alt="" className="mx-auto h-[308px]"/>
                <div className="flex gap-10 items-center justify-center">
                    <Button classname="text-white bg-[#584270] w-[240px] rounded-lg text-2xl font-medium"
                    onClick={() => navigate('/temukarier/bootcamp')}
                    >Bootcamp</Button>
                    <Button classname="text-white bg-[#584270] w-[240px] rounded-lg text-2xl font-medium"
                    onClick={() => navigate('/temukarier/magang')}
                    >Magang</Button>
                    <Button classname="text-white bg-[#584270] w-[240px] rounded-lg text-2xl font-medium" 
                    onClick={() => navigate('/temukarier/project')}
                    >Project</Button>
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Baru Ditambahkan</h1>
                    <li className="grid grid-cols-3 gap-10 items-center justify-center">
                        {karier.map(karier => (
                            <CardKarier key={karier.id}>
                                <CardKarier.Header image={karier.image} />
                                <CardKarier.Body position={karier.position} location={karier.location} />
                                <CardKarier.Footer onClick={() => openPopUp(karier.link)} />
                            </CardKarier>
                        ))}
                    </li>
                </div>
            </div>

            <Footer></Footer>

            {isOpen == 1 && (
                <PopUpVerif image="/image/verif-magang.png" onClose={() => setIsOpen(0)}>
                    <p className="text-center mt-4 text-2xl mx-10 font-bold">Silakan Klik Link dibawah Ini untuk 
                    Informasi Lebih Lanjut</p>
                    <div className="text-center mt-4">
                        <a href={selectedLink} className="text-[#584270] text-2xl font-bold">
                            Link
                        </a>
                    </div>
                </PopUpVerif>
            )}
        </>
    )
}

export default TemuKarierPage;