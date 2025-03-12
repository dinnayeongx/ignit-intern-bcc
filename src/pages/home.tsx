import React from 'react';
import Logo from '../components/elements/button/logo';
import Navigasi from '../components/fragments/Navigasi';
import ProfileBar from '../components/fragments/ProfileBar';
import CardProduct from '../components/fragments/CardProduct';
import Button from '../components/elements/button';
import Footer from '../components/fragments/Footer';

interface Product {
    id: number;
    product: string;
    price: number | string;
    image: string;
    job: string;
}

const products: Product[] = [
    {
        id: 1,
        product: "Modul 1",
        price: "Rp50.000,-",
        image: "/image/product-1.png",
        job: "UI/UX",
    },
    {
        id: 2,
        product: "Modul 2",
        price: "Rp70.000,-",
        image: "/image/product-2.png",
        job: "Data Science",
    },
    {
        id: 3,
        product: "Product 3",
        price: "Rp60.000,-",
        image: "/image/product-3.png",
        job: "Data Science",
    },
];

const HomePage: React.FC = () => {    
    return (
        <>
            <Logo/>

            <ProfileBar 
                name="John Doe" description="Creating beautiful interface"
            />
            
            <div className="flex justify-center ">
                <img src="/image/image-1.png" alt="" 
                    className='relative  w-[87%] h-[85] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.45)]'
                />
                <h1 className='absolute text-5xl font-bold text-white mt-[280px] w-[84%] text-left'>Selamat Datang di IGNIT!</h1>
            </div>

            <h1 className='text-[#584270] text-4xl font-bold text-center font-poppins mt-14 mb-6'>I G N I T</h1>

            <div className='justify-center text-center items-center mx-auto grid grid-cols-2 md:gap-6 md:flex'>
                <Navigasi source="/image/menu-1.png" menu="CakrawalaIT" window="/cakrawalaIT"></Navigasi>
                <Navigasi source="/image/menu-2.png" menu="TemuKarier" window="/temukarier"></Navigasi>
                <Navigasi source="/image/menu-3.png" menu="BelajarYuk" window="/belajaryuk"></Navigasi>
                <Navigasi source="/image/menu-4.png" menu="Komunitas" window="/komunitas"></Navigasi>
            </div>

            <div className='bg-[#F7F7FB] grid lg:grid-rows-2 mt-2 pt-9 h-[680px]'>
                <div className='flex flex-col ml-12 lg:mx-auto gap-6'>
                    <h1 className='text-[37px] font-bold'>Sedang Tren Saat Ini</h1>
                    <h1 className='text-base'>Pilihan BelajarYuk yang lagi tren dikalangan Mahasiswa IT!</h1>
                    <li className='grid grid-cols-3 gap-10 pt-8'>
                        {products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} job={product.job}/>
                                    <CardProduct.Body product={product.product} price={product.price}>
                                    </CardProduct.Body>
                            </CardProduct>
                        ))}
                    </li>
                    <Button
                        classname="w-[210px] h-[48px] rounded-md mt-8 items-center justify-center flex mx-auto"
                        onClick={() => {window.location.href = '/belajaryuk'}}>
                        Lihat Semuanya
                    </Button>
                </div>
            </div>

            <div className='grid grid-cols-2 ml-12 py-14 lg:mx-auto gap-6 mb-4 justify-center items-center'>
                <div className='flex flex-col mx-auto gap-6 float-left'>
                    <h1 className='text-[37px] font-bold'>Komunitas Terkini</h1>
                    <h1 className='text-base'>Berbagi Pengalamanmu Di sini! </h1>
                    <Button
                        classname="w-[218px] h-[48px] rounded-md" onClick={() => {window.location.href = '/komunitas'}}>
                        Lihat Daftar Grup
                    </Button>
                </div>
                <div className='float-right'>
                    <img src="/image/iamge-2.png" alt=""
                    className='h-[280px] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.45)]'></img>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default HomePage;