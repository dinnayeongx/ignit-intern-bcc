import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import FilterBar from "../components/elements/label/filterBar.tsx";
import Button from "../components/elements/button";
import CardKarier from "../components/fragments/cardKarier.tsx";
import Footer from "../components/fragments/footer.tsx";
import { useNavigate } from "react-router-dom";
import { getTags, getBootcamp } from "../services/temukarier.service.ts";
import ImageComponent from "../services/ImageComponent.tsx";

interface Bootcamp {
    id: number,
    imageId: string,
    title: string,
    source: string,
    link: string,
    category: string,
    imageUrl: string,
}


// const bootcamp: Bootcamp[] = [
//     {
//         id: 1,
//         image: "/image/karier-1.png",
//         title: "Kursus Online Ui/UX Design",
//         source: "JAYJAY",
//         link: "https://jayjay.co/ui-ux-design?utm_campaign=uiux_search_top_keywords&utm_source=google&utm_medium=cpc&utm_content=uiux_top_keywords&utm_term=ui%20ux%20design%20course&gad_source=1&gbraid=0AAAAAo5vV4bBpxxHNdNWZY42Ookx142s6&gclid=CjwKCAiA5pq-BhBuEiwAvkzVZezozMg2soh-Uy91uqLTZzWefrsHoyOZq2i9fzgsztsle-Ytap5LshoCDGQQAvD_BwE",
//         category: "UI/UX Designer"
//     },
//     {
//         id: 2,
//         image: "/image/karier-2.png",
//         title: "Project Manager Online Courses",
//         source: "Media Keren",
//         link: "",
//         category: "IT Project Manager"
//     },
//     {
//         id: 3,
//         image: "/image/karier-3.png",
//         title: "Artificial Intelegence",
//         source: "Laylay",
//         link: "",
//         category: "Cloud Computing"
//     },
// ];

// interface FilterTag {
//     tag: string
// }

// const filterTag: FilterTag[] = [
//     {
//         tag: "IoT Developer",
//     },
//     {
//         tag: "Cloud Computing",
//     },
//     {
//         tag: "Cybersecurity",
//     },
//     {
//         tag: "UI/UX Designer",
//     },
//     {
//         tag: "IT Project Manager",
//     },
//     {
//         tag: "Database Administrator",
//     },
//     {
//         tag: "Network Engineer",
//     },
// ];

const TemuKarierBootcampPage = () => {

    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState<string>("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState<Bootcamp[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [bootcampData, setBootcampData] = useState<Bootcamp[]>([]);
    // const [imageId, setImageId] = useState<number>(1);

    // useEffect(() => {
    //     getImages((success, message) => {
    //         console.log("API Response:", message);
    //         if (success) {
    //             setImageId(message);
    //         }
    //     });
    // }, []);

    useEffect(() => {
        getTags((success, message) => {
            console.log("API Response:", message);
          if (success) {
            setTags(message);
          }
        });
      }, []);

    useEffect(() => {
        console.log("Tags State:", tags);
    }, [tags]);

    useEffect(() => {
            getBootcamp((success, message) => {
                console.log("API Response 2:", message);
              if (success) {
                const formattedData = message.map((item: any) => ({
                    id: item.id,
                    imageId: item.imageId,
                    position: item.name,
                    location: "Unknown",
                    link: item.url,
                    category: item.tags[0] || "Unknown",
                    imageUrl: `https://be-intern.bccdev.id/alex/api/images/${item.imageId}`
                }));
                setBootcampData(formattedData);
              }
              else {
                console.error("Failed to fetch bootcamp data imageid:", message);
                }
            });
        }, []);
    
        useEffect(() => {
            console.log("Magang Data:", bootcampData);
        }, [bootcampData]);
    
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
    }, [selectedFilters, bootcampData]);
            
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            const showItems = bootcampData.filter((item) => {
                return selectedFilters.includes(item.category)}
            );
            setFilteredItems(showItems.flat());
        }
        else {
            setFilteredItems(bootcampData);
        }
    }

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
                        {tags.map((tag) => (
                            <div className="flex justify-center items-center" key={tag}>
                                <FilterBar tag={tag} 
                                onClick={() => handleFilterButtonClick(tag)}
                                isSelected={selectedFilters.includes(tag)}
                                />
                          </div>
                        ))}
                    </div> 
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[80px]">
                <div className="grid grid-flow-row gap-[60px]">
                    <h1 className="text-[40px] font-bold text-center">Daftar Bootcamp yang Tersedia</h1>
                    <li className="grid grid-cols-3 gap-10 items-center justify-center">
                        {bootcampData.map(bootcamp => (
                            <CardKarier key={bootcamp.id}>
                                <CardKarier.Header> 
                                    <ImageComponent imageUrl={bootcamp.imageUrl} />
                                </CardKarier.Header>
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