import React from "react";
import TopBar from "../components/fragments/topBar";
import CardModulProduct from "../components/fragments/cardModulProduct";
import { useNavigate } from "react-router-dom";
import ModulBanner from "../components/fragments/modulBanner";
import Footer from "../components/fragments/footer";

interface Product {
    id: number;
    title: string;
    product: string;
    image: string;
    tag: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "Definisi & Perbedaan UI/UX",
        image: "/image/product-1.png",
        tag: "UI/UX Designer",
    },
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "Mengapa UI/UX Penting?",
        image: "/image/product-1.png",
        tag: "UI/UX Designer",
    },
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "Prinsip Dasar UI/UX",
        image: "/image/product-1.png",
        tag: "UI/UX Designer",
    },
];


const ModulPage = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div>
                    <img src="/image/modul-1.png" alt="" className="items-center"/>
                </div>
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Introduction to UI/UX
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Ayo mulai pelajaranmu di bidang UI/UX!
                    </p>
                </div>
            </div>

            <div className="h-[auto] w-full py-[80px] px-[80px] grid grid-flow-row gap-[60px]">
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Pendahuluan</h1>
                    <p className="text-2xl text-justify">Modul ini akan membahas dasar-dasar UI/UX, termasuk perbedaannya, manfaatnya, dan prinsip desain yang baik.</p>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📍 Materi Pembelajaran</h1>
                    <div className="flex gap-8">
                        {products.map((product) => (
                            <CardModulProduct key={product.id}>
                                <CardModulProduct.Header image={product.image} onClick={() => navigate(`materi`)}/>
                                <CardModulProduct.Body title={product.title} product={product.product}>
                                </CardModulProduct.Body>
                            </CardModulProduct>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📍 Latihan Pembelajaran</h1>
                    <div className="justify-center">
                        <ModulBanner
                        title="Introduction to UI/UX"
                        modul="Download dan Explore Figma"
                        ></ModulBanner>
                        <ModulBanner
                        title="Introduction to UI/UX"
                        modul="Quiz singkat"
                        ></ModulBanner>
                    </div>
                    
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default ModulPage;