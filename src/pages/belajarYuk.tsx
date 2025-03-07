import React from "react";
import TopBar from "../components/fragments/topBar";
import FilterBar from "../components/elements/label/filterBar";
import Button from "../components/elements/button";
import CardModulProduct from "../components/fragments/cardModulProduct";
import Footer from "../components/fragments/footer";


interface Product {
    id: number;
    title: string;
    product: string;
    price: number | string;
    image: string;
    job: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Introduction to UI/UX",
        product: "3",
        price: "Rp50.000,-",
        image: "/image/product-1.png",
        job: "UI/UX",
    },
    {
        id: 2,
        title: "Introduction to Data science",
        product: "2",
        price: "Rp70.000,-",
        image: "/image/product-2.png",
        job: "Data Science",
    },
    {
        id: 3,
        title: "Data Science Algorithm",
        product: "1",
        price: "Rp60.000,-",
        image: "/image/product-3.png",
        job: "Data Science",
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

const BelajarYukPage = () => {
    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Welcome to BelajarYuk
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Enhance your IT skills with our module packets
                    </p>
                </div>
            </div>

            <div className="h-auto w-full py-[60px] px-[100px] grid grid-cols-2 gap-[60px] mx-auto">
                <h1 className="text-[40px] font-bold text-center items-center justify-center my-auto">Mau Belajar Apa Hari Ini?</h1>
                <div className="gap-1 h-auto w-full items-center" >
                    <div>
                        <h2 className="text-sm font-medium">Kategori Bidang IT</h2>
                    </div>
                    <div className="flex flex-wrap justify-start items-center">
                        {filterTag.map(filterTag => (
                            <div key={filterTag.tag}>
                                <FilterBar tag={filterTag.tag} 
                                    // onClick={() => handleFilterButtonClick(filterTag.tag)}
                                    // isSelected={selectedFilters.includes(filterTag.tag)}
                                />
                            </div>
                        ))}
                    </div>
                        
                    <Button
                        classname="bg-[#584270] rounded-md w-[240px] mt-10 text-white"
                    >Cari</Button>
                </div>
            </div>

            <div className='bg-[#F7F7FB] grid lg:grid-rows-2 mt-2 pt-9 h-[680px]'>
                <div className='flex flex-col ml-12 lg:mx-auto gap-6'>
                    <h1 className='text-[37px] font-bold'>Sedang Tren Saat Ini</h1>
                    <h1 className='text-base'>Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!</h1>
                    <li className='grid grid-cols-3 gap-10 pt-8'>
                        {products.map((product) => (
                            <CardModulProduct key={product.id}>
                                <CardModulProduct.Header image={product.image} job={product.job}/>
                                    <CardModulProduct.Body title={product.title} product={product.product} price={product.price}>
                                    </CardModulProduct.Body>
                            </CardModulProduct>
                        ))}
                    </li>

                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default BelajarYukPage;