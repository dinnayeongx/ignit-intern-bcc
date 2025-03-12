import React, { useState } from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardKarier from "../components/fragments/cardKarier";
import Footer from "../components/fragments/footer";
import { useNavigate } from "react-router-dom";

interface Bootcamp {
    id: number,
    image: string,
    title: string,
    source: string,
    link: string,
}


const bootcamp: Bootcamp[] = [
    {
        id: 1,
        image: "/image/karier-1.png",
        title: "Kursus Online Ui/UX Design",
        source: "JAYJAY",
        link: "https://jayjay.co/ui-ux-design?utm_campaign=uiux_search_top_keywords&utm_source=google&utm_medium=cpc&utm_content=uiux_top_keywords&utm_term=ui%20ux%20design%20course&gad_source=1&gbraid=0AAAAAo5vV4bBpxxHNdNWZY42Ookx142s6&gclid=CjwKCAiA5pq-BhBuEiwAvkzVZezozMg2soh-Uy91uqLTZzWefrsHoyOZq2i9fzgsztsle-Ytap5LshoCDGQQAvD_BwE",
    },
    {
        id: 2,
        image: "/image/karier-2.png",
        title: "Project Manager Online Courses",
        source: "Media Keren",
        link: "",
    },
    {
        id: 3,
        image: "/image/karier-3.png",
        title: "Artificial Intelegence",
        source: "Laylay",
        link: "",
    },
];

interface FilterTag {
    tag: string
}

const filterTag: FilterTag[] = [
    {
        tag: "IoT Developer",
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

const TemuKarierBootcampPage = () => {

    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState<string>("");

    const openLink = (link: string) => {
        setSelectedLink(link);
        window.location.href = link;
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

            <div className="h-auto w-full py-[60px] px-[120px] grid grid-flow-row gap-[40px]">
                <h2 className="text-[40px] font-bold text-center">Sesuaikan dengan Pilihanmu</h2>
                <div className="px-[260px]">
                    <p className="text-2xl font-medium mb-2 text-center">Kategori Bidang IT</p>
                    <div className="flex flex-wrap gap-2 mx-auto h-auto w-full text-center justify-center items-center">
                        {filterTag.map(filterTag => (
                                <div className="flex justify-center items-center">
                                    <FilterBar tag={filterTag.tag} />
                              </div>
                            ))}
                    </div> 
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Daftar Bootcamp yang Tersedia</h1>
                    <li className="grid grid-cols-3 gap-10 items-center justify-center">
                        {bootcamp.map(bootcamp => (
                            <CardKarier key={bootcamp.id}>
                                <CardKarier.Header image={bootcamp.image} />
                                    <CardKarier.Body title={bootcamp.title} source={bootcamp.source} />
                                        <CardKarier.Footer onClick={() => openLink(bootcamp.link)} />
                            </CardKarier>
                        ))}
                    </li>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default TemuKarierBootcampPage;