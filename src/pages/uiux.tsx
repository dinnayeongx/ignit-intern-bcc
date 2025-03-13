import React, {useState, useEffect, use} from "react";
import TopBar from "../components/fragments/topBar";
import Item from "../components/fragments/majorItem";
import Footer from "../components/fragments/footer";
import ArticleCakrawala from "../components/fragments/articleCakrawala";
import CardInform from "../components/fragments/cardInform";
import QuizIT from "../components/fragments/quizIT";
import NavigasiMajor from "../components/fragments/navMajor";
import { getCakrawalaInfo } from "../services/cakrawalait.service";

interface Inform {
    id: number,
    image: string,
    career: string,
    title: string,
}

// const Inform: Inform[] = [
//     {
//         id: 1,
//         image: "/image/uiux-5.png",
//         career: "UX Researcher",
//         title: "Meneliti Perilaku Pengguna untuk meningkatkan pengalaman.",
//     },
//     {
//         id: 2,
//         image: "/image/uiux-6.png",
//         career: "Product Designer",
//         title: "Merancang produk digital dari konsep hingga implementasi.",
//     },
//     {
//         id: 3,
//         image: "/image/uiux-7.png",
//         career: "Interaction Designer",
//         title: "Membuat interaksi antarmuka yang intuitif dan menarik.",
//     },
// ];
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
    responsibilities: string[],
    questions: QuizITType[],
    answer: number,
    tag: string,
    imageIds: number[],
}

const UIUXPage = () => {
    const [cakrawalaInfoData, setCakrawalaInfoData] = useState<CakrawalaInfoProps | null>(null);

    useEffect(() => {
        getCakrawalaInfo((success, message) => {
            if (success) {
                setCakrawalaInfoData(message as CakrawalaInfoProps);
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
                        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
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
                                <li className="text-xl leading-10">{skill}</li>
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
                        <Item
                            key={index}
                            name={major}
                            description="4-year degree"
                            image={`/image/major-${index + 1}.png`}
                        >{major}</Item>
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
                    {cakrawalaInfoData?.careerOpportunities.map((inform) => (
                        <CardInform key={inform.id}>
                            <CardInform.Header image={inform.image}/>
                                <CardInform.Body career={inform.career} title={inform.title}>
                                </CardInform.Body>
                        {inform}
                        </CardInform>
                    ))}
                </div>
            </div>

            <hr className="bg-[rgba(0,0,0,0.10)]" />

            <div className="h-[554px] w-full py-[84px] px-[80px]">
                <div className="flex gap-[180px] justify-center items-center">
                    <div className="items-center my-auto">
                        <h1 className="text-[40px] font-bold mb-6">Peran dan Tanggung Jawab</h1>
                        <ol className="list-decimal ml-6">
                            <li className="text-xl leading-10">Merancang Antarmuka Pengguna (UI)</li>
                            <li className="text-xl leading-10">Mengembangkan Pengalaman Pengguna (UX)</li>
                            <li className="text-xl leading-10">Melakukan Riset Pengguna</li>
                            <li className="text-xl leading-10">Membuat Wireframe & Prototipe</li>
                            <li className="text-xl leading-10">Berkolaborasi dengan Tim</li>
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
                            {cakrawalaInfoData && cakrawalaInfoData.questions && (
                                <QuizIT questions={cakrawalaInfoData.questions} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    )
}

export default UIUXPage;