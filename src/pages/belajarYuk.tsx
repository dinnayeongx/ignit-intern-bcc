import React, { useState, useEffect } from "react";
import TopBar from "../components/fragments/topBar.tsx";
import FilterBar from "../components/elements/label/filterBar.tsx";
import Button from "../components/elements/button";
import CardModulProduct from "../components/fragments/cardModulProduct.tsx";
import Footer from "../components/fragments/footer.tsx";
import PopUpVerif from "../components/fragments/popUpVerif.tsx";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/fragments/heroSection.tsx";


interface Product {
    id: number;
    title: string;
    product: string;
    price?: string | number;
    image: string;
    job: string;
    tag: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "3 Modul",
        price: "Rp50.000,-",
        image: "/image/product-1.png",
        job: "UI/UX",
        tag: "UI/UX Designer",
    },
    {
        id: 2,
        title: "Introduction to Data science",
        product: "2 Modul",
        price: "Rp70.000,-",
        image: "/image/product-2.png",
        job: "Data Science",
        tag: "Database Administrator",
    },
    {
        id: 3,
        title: "Data Science Algorithm",
        product: "1 Modul",
        price: "Rp60.000,-",
        image: "/image/product-3.png",
        job: "Data Science",
        tag: "Database Administrator",
    },
];

const savedProducts: Product[] = [
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "3 Modul",
        image: "/image/product-1.png",
        job: "UI/UX",
        tag: "UI/UX Designer",
    },
]

interface FilterTag {
    tag: string
}

const filterTag: FilterTag[] = [
    {
        tag: "Web Development",
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

const BelajarYukPage = () => {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products.slice(0, 3));
    const [filterTitle, setFilterTitle] = useState<string>("Sedang Tren Saat Ini");
    const [filterDesc, setFilterDesc] = useState<string>("Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!");
    const [showPopup, setShowPopup] = useState(0);
    const [popupMessage, setPopupMessage] = useState("Silakan Klik Link dibawah Ini untuk Melakukan Pembayaran");
    const [popupImage, setPopupImage] = useState("/image/verif-payment.png");
    const [popupLink, setPopupLink] = useState("https://wa.me/6282338373031");
    const [popupLinkText, setPopupLinkText] = useState("Link");
    const [showSavedSection, setShowSavedSection] = useState(false);

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
            setFilteredProducts(products.filter((product) => product.tag === tag));
            setFilterTitle(`${tag} Packets`);
            setFilterDesc(`Upgrade your ${tag} knowledge`);
        }
        else {
            setFilteredProducts(products.slice(0, 3));
            setFilterTitle("Sedang Tren Saat Ini");
            setFilterDesc("Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!");
        }
    };

    const handleButtonClick = (tag) => {
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
                        {filterTag.map(filterTag => (
                            <div key={filterTag.tag}>
                                <FilterBar tag={filterTag.tag} 
                                    onClick={() => handleButtonClick(filterTag.tag)}
                                    isSelected={selectedTag === filterTag.tag}
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
                        {filteredProducts.map((product) => (
                            <CardModulProduct key={product.id}>
                                <CardModulProduct.Header image={product.image} job={product.job} onClick={() => setShowPopup(1)}/>
                                    <CardModulProduct.Body title={product.title} product={product.product} price={`Harga: ${product.price}`}>
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
                            {savedProducts.map((product) => (
                                <CardModulProduct key={product.id}>
                                    <CardModulProduct.Header image={product.image} job={product.job} onClick={() => navigate('modul')}/>
                                        <CardModulProduct.Body title={product.title} product={product.product}>
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