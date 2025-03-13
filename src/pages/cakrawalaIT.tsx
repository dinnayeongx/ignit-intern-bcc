import React from "react";
import TopBar from "../components/fragments/topBar";
import Item from "../components/fragments/majorItem";
import CardMajor from "../components/fragments/cardMajor";
import Footer from "../components/fragments/footer";
import NavigasiMajor from "../components/fragments/navMajor";
import HeroSection from "../components/fragments/heroSection";

interface Major {
    id: number,
    image: string,
    major: string,
    window: string,
}

const major: Major[] = [
    {
        id: 1,
        image: "/image/product-1.png",
        major: "UI/UX Designer",
        window: "/cakrawalait/ui-ux",
    },
    {
        id: 2,
        image: "/image/product-2.png",
        major: "Data Science",
        window: "/cakrawalait/data-science",
    },
    {
        id: 3,
        image: "/image/product-3.png",
        major: "Front End",
        window: "/cakrawalait/front-end",
    },
];

const CakrawalaITPage = () => {
    return (
        <>
            <TopBar title="CakrawalaIT"></TopBar>

            <HeroSection page="Jelajahi Bidang di CakrawalaIT" description="Jelajahi bidang IT yang kamu minati disini!"></HeroSection>

            <div className="h-[412px] w-fit pt-[58px] pb-[82px] mx-auto">
                <h1 className="text-[40px] font-bold text-center mb-[52px]">
                    Bidang IT
                </h1>
                <div className="h-[172px] items-center justify-center">
                    <NavigasiMajor></NavigasiMajor>
                </div>
            </div>

            <div className="h-[688px] py-[60px] px-[132px] bg-[#F7F7FB]">
                <h1 className='text-[37px] font-bold mb-6'>Banyak Diminati</h1>
                <h1 className='text-base'>Bidang IT yang lagi banyak dicari nih!</h1>
                <li className='grid grid-cols-3 gap-10 pt-[60px] mx-auto items-center justify-center'>
                    {major.map((major) => (
                        <CardMajor key={major.id}>
                            <CardMajor.Header image={major.image} window={major.window}/>
                                <CardMajor.Body major={major.major}>
                                </CardMajor.Body>
                        </CardMajor>
                    ))}
                </li>
            </div>

            <Footer></Footer>

        </>
    )
}

export default CakrawalaITPage;