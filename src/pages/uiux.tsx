import React, {useState, useEffect} from "react";
import TopBar from "../components/fragments/topBar.tsx";
import Item from "../components/fragments/majorItem.tsx";
import Footer from "../components/fragments/footer.tsx";
import ArticleCakrawala from "../components/fragments/articleCakrawala.tsx";
import CardInform from "../components/fragments/cardInform.tsx";
import QuizIT from "../components/fragments/quizIT.tsx";
import NavigasiMajor from "../components/fragments/navMajor.tsx";
import { getCakrawalaInfo } from "../services/cakrawalait.service.ts";
import ImageComponent from "../services/ImageComponent.tsx";

interface Inform {
    id: number,
    imageUrls: string,
    career: string,
    title: string,
}

const Inform: Inform[] = [
    {
        id: 1,
        imageUrls: "/image/uiux-5.png",
        career: "UX Researcher",
        title: "Meneliti Perilaku Pengguna untuk meningkatkan pengalaman.",
    },
    {
        id: 2,
        imageUrls: "/image/uiux-6.png",
        career: "Product Designer",
        title: "Merancang produk digital dari konsep hingga implementasi.",
    },
    {
        id: 3,
        imageUrls: "/image/uiux-7.png",
        career: "Interaction Designer",
        title: "Membuat interaksi antarmuka yang intuitif dan menarik.",
    },
];
interface QuizITType {
    question: string,
    options: string[],
    answer: string,
}
interface CakrawalaInfoProps {
    description: string,
    salaryRange: string,
    criteria: string,
    skills: string[],
    relatedStudies: string[],
    careerOpportunities: string[],
    responsibilites: string[],
    questions: QuizITType[],
    answer: number,
    tag: string,
    imageIds: number[],
    imageUrls: string[],
}


const UIUXPage = () => {
    const [cakrawalaInfoData, setCakrawalaInfoData] = useState<CakrawalaInfoProps | null>(null);

    useEffect(() => {
        getCakrawalaInfo((success, message) => {
            if (success) {
                const formattedData = message.map((item: CakrawalaInfoProps) => ({
                    ...item,
                    imageIds: item.imageIds.map((id: number) => id),
                    imageUrls: item.imageIds.map((id: number) => `https://be-intern.bccdev.id/alex/api/images/${id}`),
                }))
                console.log(message);
                setCakrawalaInfoData(formattedData[0]);
            }
            else {
                console.error('Error fetching data:', message);
            }
        });
    }, []);


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
                    <NavigasiMajor/>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[824px] w-full py-[60px] px-[100px] bg-[#F7F7FB]">
                <div className="flex gap-[60px] mb-[60px]">
                    <img src="/image/uiux-1.png" alt="" className="bg-[rgba(217,217,217,0.50)] rounded-2xl shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25),0px_6px_10px_0px_rgba(0,0,0,0.25),0px_1px_18px_0px_rgba(0,0,0,0.25)] h-[472px] w-[452px]"/>
                    <div className="items-center my-auto">
                        <h1 className="text-[40px] font-bold mb-6 items-center">UI/UX Designer</h1>
                        <p className="text-base text-justify items-center leading-7">{cakrawalaInfoData?.description}</p>
                    </div>
                </div>
                <div>
                    <ArticleCakrawala
                        title="UI/UX Designer"
                        salary={cakrawalaInfoData?.salaryRange}
                        description={cakrawalaInfoData?.criteria}
                    ></ArticleCakrawala>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[579px] w-full py-[100px] px-[60px] mx-auto my-auto">
                <div className="flex gap-16">
                    <img src="/image/uiux-2.png" alt="" className="h-[356px]"/>
                    <div className="items-center my-auto">
                        <h1 className="text-[40px] font-bold mb-6">Skill dan Keterampilan</h1>
                        <ol className="list-decimal ml-6">
                            {cakrawalaInfoData?.skills.map((skill, index) => (
                                <div key={index}>
                                    <li className="text-xl leading-10">{skill}</li>
                                </div>
                                
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[432px] w-full py-[60px] px-[80px]">
                <h1 className="text-[40px] font-bold text-center mb-[60px]">
                    Jurusan Terkait
                </h1>
                <div className="grid grid-cols-3 mx-auto gap-10 items-center justify-center">
                    {cakrawalaInfoData?.relatedStudies.map((major, index) => (
                        <div key={index}>
                            <Item
                            name={major}
                            description="4-year degree"
                            image={`/image/major-${index + 1}.png`}
                            >{major}</Item>
                        </div>
                        
                    ))}
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[816px] w-full py-[60px] px-[110px] bg-[#F7F7FB]">
                <div className="flex gap-[60px] mx-auto items-center">
                    <img src="/image/uiux-4.png" alt="" />
                    <div className="items-center my-auto">
                        <h1 className="text-[40px] font-bold mb-6 items-center">Career Opportunities</h1>
                        <p className="text-base text-justify items-center">Explore the various career paths in Information Technology</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10 pt-[60px] mx-auto items-center justify-center'>
                    {Inform.map((inform, index) => (
                        <div key={index}>
                            <CardInform key={inform.id}>
                                <CardInform.Header image={inform.imageUrls}>
                                </CardInform.Header>
                                    <CardInform.Body career={inform.career} title={inform.title}>
                                    </CardInform.Body>
                            </CardInform>
                        </div>
                        
                    ))}
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[554px] w-full py-[84px] px-[80px]">
                <div className="flex gap-[180px] justify-center items-center">
                    <div className="items-center my-auto">
                        <h1 className="text-[40px] font-bold mb-6">Peran dan Tanggung Jawab</h1>
                        <ol className="list-decimal ml-6">
                            {cakrawalaInfoData?.responsibilites.map((responsibility, index) => (
                                <div key={index}>
                                    <li className="text-xl leading-10">{responsibility}</li>
                                </div>
                            ))}
                        </ol>
                    </div>
                    <img src="/image/uiux-3.png" alt="" className="h-[356px]"/>
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px] mx-auto">
                <div className="grid grid-cols-2 gap-[60px]">
                    <h1 className="text-[40px] font-bold my-auto">Apakah Kamu Sudah Paham Mengenai Bidang Ini?</h1>
                    <div>
                        <div>
                            <QuizIT />
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    )
}

export default UIUXPage;