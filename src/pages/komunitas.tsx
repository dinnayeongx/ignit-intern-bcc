import React, { useState } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Article from "../components/fragments/article.tsx";
import Button from "../components/elements/button";
import Item from "../components/fragments/majorItem.tsx";
import Footer from "../components/fragments/footer.tsx";
import PopUpVerif from "../components/fragments/popUpVerif.tsx";
import HeroSection from "../components/fragments/heroSection.tsx";

const KomunitasPage = () => {

    const [isOpen, setIsOpen] = useState(0);
    const [selectedLink, setSelectedLink] = useState<string>("");

    const openPopUp = (link: string) => {
        setSelectedLink(link);
        setIsOpen(1);
    };

    return (
        <>
            <TopBar title="Komunitas"/>

            <HeroSection page="Welcome to Komunitas!" description="Explore and engage in discussions"></HeroSection>

            <div className="h-full w-full py-[60px] px-[80px]">
                <li className="grid grid-cols-2 gap-6 py-5 mb-10">
                    <button onClick={() => setIsOpen(1)}>
                        <Article 
                            image="/image/article-1.png"
                            title="Web Designer Enthusiast"
                            description="Ayo bergabung dengan kami dan dapatkan pengalaman menarik tentang dunia web designer!">
                        </Article>
                    </button>
                    <button onClick={() => setIsOpen(1)}>
                        <Article 
                            image="/image/article-2.png"
                            title="CyberTech Connect"
                            description="Ruang bagi profesional dan pemula untuk berbagi pengetahuan dalam dunia siber dan teknologi.">
                        </Article>
                    </button>
                    <button onClick={() => setIsOpen(1)}>
                        <Article 
                            image="/image/article-3.png"
                            title="CodeCrafters"
                            description="Tempat bagi para pengembang untuk belajar, berbagi, dan berkolaborasi dalam dunia pemrograman.">
                        </Article>
                    </button>
                    <button onClick={() => setIsOpen(1)}>
                        <Article 
                            image="/image/article-4.png"
                            title="Tech Explorers"
                            description="Tempat untuk mengeksplorasi berbagai tren dan inovasi terbaru dalam dunia teknologi.">
                        </Article>
                    </button>
                </li>

                <Button classname="mx-auto text-white bg-[#584270] w-40 rounded-lg flex items-center justify-center">
                    Lebih Banyak
                </Button>
            </div>

            <hr className="border-[rgba(0,0,0,0.10)]" />

            <div className="h-[480px] w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-6 mb-[60px]">
                    <h1 className="text-[40px] font-bold text-center">
                        Popular Communities
                    </h1>
                    <p className="text-[16px] font-normal text-center">
                        Join trending groups
                    </p>
                </div>

                <li className="grid grid-cols-3 gap-6 mx-auto">
                    <button onClick={() => setIsOpen(1)}>
                        <Item
                            image="/image/major-1.png"
                            name="Web Developers"
                            description="Coding enthusiasts"
                        ></Item>
                    </button>
                    <button onClick={() => setIsOpen(1)}>
                        <Item
                            image="/image/major-2.png"
                            name="Tech Innovators"
                            description="Innovative minds"
                        ></Item>
                    </button>
                    <button onClick={() => setIsOpen(1)}>
                        <Item
                            image="/image/major-3.png"
                            name="Digital Marketers"
                            description="Marketing gurus"
                        ></Item>
                    </button>
                </li>
            </div>

            {isOpen == 1 && (
                <PopUpVerif image="/image/verif-logout.png" onClose={() => setIsOpen(0)}>
                <p className="text-center mt-4 text-3xl font-bold">Ingin bergabung?</p>
                <div className="text-center justify-center mt-4 flex mx-auto">
                    <Button
                    classname="bg-transparent border border-[#584270] text-[#584270] hover:bg-[#584270] hover:text-white rounded-md w-[100px] mx-3"
                    onClick={() => setIsOpen(0)}
                    >Tidak
                    </Button>
                    
                    <Button
                    classname="bg-[#584270] border border-[#584270] rounded-md w-[100px] mx-3 text-white"
                    onClick={() => setIsOpen(2)}
                    >Ya
                    </Button>
                </div>
                </PopUpVerif>
            )}

            {isOpen == 2 && (
                <PopUpVerif image="/image/verif-komun.png" onClose={() => setIsOpen(0)}>
                    <p className="text-center mt-4 text-2xl font-bold">Silahkan bergabung dengan komunitasmu 
                    menggunakan link berikut:</p>
                    <div className="text-center mt-4">
                    <a href="https://wa.me/6282338373031" className="text-[#584270] text-2xl font-bold">
                        Link Komunitas
                    </a>
                    </div>
                </PopUpVerif>
            )}

            <Footer></Footer>
        </>
    )
}

export default KomunitasPage;