import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import FilterBar from "../components/elements/label/filterBar.tsx";
import Button from "../components/elements/button";
import CardModulProduct from "../components/fragments/cardModulProduct.tsx";
import Footer from "../components/fragments/footer.tsx";
import PopUpVerif from "../components/fragments/popUpVerif.tsx";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/fragments/heroSection.tsx";
import { getTags } from "../services/temukarier.service.ts";
import { getBelajarYuk, getSavedBelajarYuk } from "../services/belajaryuk.sevice.ts";
import ImageComponent from "../services/ImageComponent.tsx";
import axiosInstance from "../services/axiosInstance.ts";


interface Product {
    id: number;
    title: string;
    product: string;
    price?: string | number;
    image: string;
    job: string;
    tag: string;
}

interface BelajarYuk {
    id: number;
    title: string;
    subtitle: string;
    imageId: number;
    price: number;
    tag: string;
    image: string;
    job: string;
    moduleIds: number[];
}




// const products: Product[] = [
//     {
//         id: 1,
//         title: "Introduction to UI/UX",
//         product: "3 Modul",
//         price: "Rp50.000,-",
//         image: "/image/product-1.png",
//         job: "UI/UX",
//         tag: "UI/UX Designer",
//     },
//     {
//         id: 2,
//         title: "Introduction to Data science",
//         product: "2 Modul",
//         price: "Rp70.000,-",
//         image: "/image/product-2.png",
//         job: "Data Science",
//         tag: "Database Administrator",
//     },
//     {
//         id: 3,
//         title: "Data Science Algorithm",
//         product: "1 Modul",
//         price: "Rp60.000,-",
//         image: "/image/product-3.png",
//         job: "Data Science",
//         tag: "Database Administrator",
//     },
// ];

// const savedProducts: Product[] = [
//     {
//         id: 1,
//         title: "Introduction to UI/UX",
//         product: "3 Modul",
//         image: "/image/product-1.png",
//         job: "UI/UX",
//         tag: "UI/UX Designer",
//     },
// ]

interface FilterTag {
    tag: string
}

// const filterTag: FilterTag[] = [
//     {
//         tag: "Web Development",
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

const BelajarYukPage = () => {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<BelajarYuk[]>([]);
    const [filterTitle, setFilterTitle] = useState<string>("Sedang Tren Saat Ini");
    const [filterDesc, setFilterDesc] = useState<string>("Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!");
    const [showPopup, setShowPopup] = useState(0);
    const [popupMessage, setPopupMessage] = useState("Silakan Klik Link dibawah Ini untuk Melakukan Pembayaran");
    const [popupImage, setPopupImage] = useState("/image/verif-payment.png");
    const [popupLink, setPopupLink] = useState("https://example.com/");
    const [popupLinkText, setPopupLinkText] = useState("Link");
    const [showSavedSection, setShowSavedSection] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [belajaryukData, setBelajaryukData] = useState<BelajarYuk[]>([]);
    const [savedBelajaryukData, setSavedBelajaryukData] = useState<BelajarYuk[]>([]);
    
    
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
                getBelajarYuk((success, message) => {
                    console.log("API Response 2:", message);
                  if (success) {
                    const formattedData = message.map((item: any) => ({
                        title: item.title,
                        subtitle: item.subtitle,
                        imageId: item.imageId,
                        price: item.price,
                        tag: item.tag,
                        image: `${axiosInstance.defaults.baseURL}/utils/images/${item.imageId}`,
                        moduleIds: item.moduleIds.map((id: number) => id),
                    }));
                    setBelajaryukData(formattedData);
                    setFilteredProducts(formattedData.slice(0, 3));
                  }
                  else {
                    console.error("Failed to fetch bootcamp data imageid:", message);
                    }
                });
            }, []);

            useEffect(() => {
                getSavedBelajarYuk((success, message) => {
                    console.log("API Response 2:", message);
                  if (success) {
                    const formattedData = message.map((item: any) => ({
                        title: item.title,
                        subtitle: item.subtitle,
                        imageId: item.imageId,
                        price: item.price,
                        tag: item.tag,
                        image: `${axiosInstance.defaults.baseURL}/utils/images/${item.imageId}`,
                        moduleIds: item.moduleIds.map((id: number) => id),
                    }));
                    setSavedBelajaryukData(formattedData);
                    setFilteredProducts(formattedData.slice(0, 3));
                  }
                  else {
                    console.error("Failed to fetch bootcamp data imageid:", message);
                    }
                });
            }, []);
        
            useEffect(() => {
                console.log("BelajarYuk Data:", belajaryukData);
            }, [belajaryukData]);

            useEffect(() => {
                console.log("SavedBelajarYuk Data:", savedBelajaryukData);
            }, [savedBelajaryukData]);

    useEffect(() => {
        if (sessionStorage.getItem('popupClicked') === 'true') {
            setPopupMessage('Pembayaran Berhasil! Kembali ke Halaman BelajarYuk untuk membuka modul.');
            setPopupImage('/image/verif-payment-2.png');
            setPopupLink('/belajaryuk');
            setPopupLinkText('kembali');
            setShowSavedSection(true);
        }
        else {
            const isVerified = sessionStorage.getItem("isVerified");
            if (isVerified) {
                setShowPopup(1);
                setShowSavedSection(true);
                sessionStorage.removeItem("isVerified");
            }
        }
    }, []);

    const handleFilterTagClick = (tag) => {
        setSelectedTag(tag);
        if (tag) {
            setFilteredProducts(belajaryukData.filter((product) => product.tag === tag));
            setFilterTitle(`${tag} Packets`);
            setFilterDesc(`Upgrade your ${tag} knowledge`);
        }
        else {
            setFilteredProducts(belajaryukData.slice(0, 3));
            setFilterTitle("Sedang Tren Saat Ini");
            setFilterDesc("Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!");
        }
    };

    const handleButtonClick = (tag: string) => {
        if (selectedTag == tag) {
            setSelectedTag(null);
        }
        else {
            setSelectedTag(tag);
        }
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        sessionStorage.setItem('popupClicked', 'true');
        setPopupMessage('Pembayaran Berhasil! Kembali ke Halaman BelajarYuk untuk membuka modul.');
        setPopupImage('/image/verif-payment-2.png');
        setPopupLink('/belajaryuk');
        setPopupLinkText('kembali');
        setShowSavedSection(true);
        navigate(e.currentTarget.href);
    };

    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <HeroSection page="Welcome to BelajarYuk" description="Enhance your IT skills with our module packets"></HeroSection>

            <div className="h-auto w-full py-[60px] px-[100px] grid grid-cols-2 gap-[60px] mx-auto">
                <h1 className="text-[40px] font-bold text-center items-center justify-center my-auto">Mau Belajar Apa Hari Ini?</h1>
                <div className="gap-1 h-auto w-5/6 items-center" >
                    <div>
                        <h2 className="text-sm font-medium">Kategori Bidang IT</h2>
                    </div>
                    <div className="flex flex-wrap justify-start items-center">
                        {tags.map(filterTag => (
                            <div key={filterTag}>
                                <FilterBar tag={filterTag} 
                                    onClick={() => handleButtonClick(filterTag)}
                                    isSelected={selectedTag === filterTag}
                                />
                            </div>
                        ))}
                    </div>
                        
                    <Button
                        classname="bg-[#584270] rounded-md w-[240px] mt-10 text-white"
                        onClick={() => handleFilterTagClick(selectedTag || '')}
                    >Cari</Button>
                </div>
            </div>

            <div className='bg-[#F7F7FB] grid lg:grid-rows-1 mt-2 pt-9 h-auto py-[60px] px-[100px] mx-auto'>
                <div className='flex flex-col ml-12 lg:mx-auto gap-6'>
                    <div className="flex gap-[60px] justify-stretch mb-7">
                        <div className="my-auto">
                            <h1 className='text-[37px] font-bold'>{filterTitle}</h1>
                            <h1 className='text-base'>{filterDesc}</h1>
                        </div>
                        <img src="/image/belajar-1.png" alt="" className="w-[150px] ml-auto"/>
                    </div>
                    <li className='grid grid-cols-3 gap-10 pt-8'>
                        {belajaryukData.map((product) => (
                            <CardModulProduct key={product.id}>
                                <CardModulProduct.Header image={product.image} job={product.job} onClick={() => setShowPopup(1)}>
                                </CardModulProduct.Header>
                                    <CardModulProduct.Body title={product.title} product={product.subtitle} price={`Harga: ${product.price}`}>
                                    </CardModulProduct.Body>
                            </CardModulProduct>
                        ))}
                    </li>
                </div>
            </div>

            {showSavedSection && (
                <div className="grid lg:grid-rows-1 mt-2 pt-9 h-auto py-[60px] px-[100px] mx-auto">
                    <div className='flex flex-col ml-12 lg:mx-auto gap-6'>
                        <div className="flex gap-[60px] justify-stretch mb-7">
                            <div className="my-auto">
                                <h1 className='text-[37px] font-bold'>Pelajaran Tersimpan</h1>
                                <h1 className='text-base'>Modul Pembelajaran yang telah kamu beli</h1>
                            </div>
                        </div>
                        <li className='grid grid-cols-3 gap-10 pt-8'>
                            {savedBelajaryukData.map((product) => (
                                <CardModulProduct key={product.id}>
                                    <CardModulProduct.Header image={product.image} job={product.job} onClick={() => navigate('modul')}/>
                                        <CardModulProduct.Body title={product.title} product={product.subtitle}>
                                        </CardModulProduct.Body>
                                </CardModulProduct>
                            ))}
                        </li>
                    </div>
                </div>
            )}

            
            
            {showPopup == 1 && (
                <PopUpVerif image={popupImage} onClose={() => setShowPopup(0)}>
                    <p className="text-center mt-4 text-2xl font-bold">{popupMessage}</p>
                    <div className="text-center mt-4">
                    <a href={popupLink} className="text-[#584270] text-2xl font-bold" onClick={handleLinkClick}>
                        {popupLinkText}
                    </a>
                    </div>
                </PopUpVerif>
            )}

            <Footer></Footer>
            
        </>
    );
}

export default BelajarYukPage;
