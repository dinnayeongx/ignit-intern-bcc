import React from "react";
import TopBar from "../components/fragments/topBar";
import Item from "../components/fragments/majorItem";
import CardMajor from "../components/fragments/cardMajor";
import Footer from "../components/fragments/footer";

interface Major {
    id: number,
    image: string,
    major: string,
}

const major: Major[] = [
    {
        id: 1,
        image: "/image/product-1.png",
        major: "UI/UX Designer",
    },
    {
        id: 2,
        image: "/image/product-2.png",
        major: "Data Science",
    },
    {
        id: 3,
        image: "/image/product-3.png",
        major: "Front End",
    },
];

const CakrawalaITPage = () => {
    return (
        <>
            <TopBar title="CakrawalaIT"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Jelajahi Bidang di CakrawalaIT
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Jelajahi bidang IT yang kamu minati disini!
                    </p>
                </div>
            </div>

            <div className="h-[412px] w-full pt-[58px] pb-[82px]">
                <h1 className="text-[40px] font-bold text-center mb-[52px]">
                    Bidang IT
                </h1>
                <div className="h-[172px] flex gap-40 items-center justify-center">
                    <img src="/image/vector-left.svg" alt="" className="-mr-20"/>
                    <Item
                        image="/image/major-5.png" name="Product Manager" description=""
                    ></Item>
                    <Item
                        image="/image/major-2.png" name="UI/UX Designer" description=""
                    ></Item>
                    <Item
                        image="/image/major-4.png" name="Data Sciences" description=""
                    ></Item>
                    <Item
                        image="/image/major-3.png" name="Programming" description=""
                    ></Item>
                    <img src="/image/vector-right.svg" alt="" className="-ml-20"/>
                </div>
            </div>

            <div className="h-[688px] py-[60px] px-[132px] bg-[#F7F7FB]">
                <h1 className='text-[37px] font-bold mb-6'>Banyak Diminati</h1>
                <h1 className='text-base'>Bidang IT yang lagi banyak dicari nih!</h1>
                <li className='grid grid-cols-3 gap-10 pt-[60px] mx-auto items-center justify-center'>
                    {major.map((major) => (
                        <CardMajor key={major.id}>
                            <CardMajor.Header image={major.image}/>
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