import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardKarier from "../components/fragments/cardKarier";
import Footer from "../components/fragments/footer";
import { useNavigate } from "react-router-dom";

interface Magang {
    id: number,
    image: string,
    position: string,
    location: string,
    link: string,
    category: string,
}


const magang: Magang[] = [
    {
        id: 1,
        image: "/image/karier-1.png",
        position: "Product Design Intern - VIDA Digital Identity",
        location: "Jakarta",
        link: "https://vida.freshteam.com/jobs/DK6OhvPc9qdU/product-design-intern",
        category: "UI/UX Designer"
    },
    {
        id: 2,
        image: "/image/karier-2.png",
        position: "Mobile UI/UX Designer - TimeDoor",
        location: "Bali",
        link: "",
        category: "UI/UX Designer"
    },
    {
        id: 3,
        image: "/image/karier-3.png",
        position: "Data Scientist",
        location: "Surabaya",
        link: "",
        category: "IT Project Manager"
    },
    {
        id: 4,
        image: "/image/karier-1.png",
        position: "Software Engineer",
        location: "Jakarta",
        link: "https://wa.me/6282338373031",
        category: "IoT Developer"
    },
    {
        id: 5,
        image: "/image/karier-2.png",
        position: "UI/UX Designer",
        location: "Bandung",
        link: "",
        category: "UI/UX Designer"
    },
    {
        id: 6,
        image: "/image/karier-3.png",
        position: "Data Scientist",
        location: "Surabaya",
        link: "",
        category: "Database Administrator"
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

const TemuKarierMagangPage = () => {

    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState<string>("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState(magang);

    const openLink = (link: string) => {
        setSelectedLink(link);
        window.location.href = link;
    };

    const handleFilterButtonClick = (tag: string) => {
        if (selectedFilters.includes(tag)) {
            const filters = selectedFilters.filter((el) => el !== tag);
            setSelectedFilters(filters);
        }
        else {
            setSelectedFilters([...selectedFilters, tag]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);
    
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            const showItems = magang.filter((item) => {
                return selectedFilters.includes(item.category)}
            );
            setFilteredItems(showItems.flat());
        }
        else {
            setFilteredItems([...magang]);
        }
    }

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
                    <div className="flex flex-wrap gap-2 mx-auto h-auto w-full text-center justify-center items-center" >
                        {filterTag.map(filterTag => (
                            <div className="flex justify-center items-center" key={filterTag.tag}>
                                <FilterBar tag={filterTag.tag} 
                                    onClick={() => handleFilterButtonClick(filterTag.tag)}
                                    isSelected={selectedFilters.includes(filterTag.tag)}
                                />
                            </div>
                        ))}
                    </div> 
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Daftar Magang yang Tersedia</h1>
                    <li className="grid grid-cols-3 gap-10 items-center justify-center">
                        {filteredItems.map((magang) => (
                            <CardKarier key={magang.id}>
                                <CardKarier.Header image={magang.image} />
                                    <CardKarier.Body position={magang.position} location={magang.location} />
                                        <CardKarier.Footer onClick={() => openLink(magang.link)} />
                            </CardKarier>
                        ))}
                    </li>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default TemuKarierMagangPage;