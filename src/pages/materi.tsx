import React from "react";
import TopBar from "../components/fragments/topBar";
import Button from "../components/elements/button";
import Footer from "../components/fragments/footer.tsx";

const MateriPage = () => {
    return (
        <>
            <TopBar title="BelajarYuk"></TopBar>

            <div className="h-[399px] w-full bg-gradient-to-r from-[#9B7EBD] to-[#7F5EA3] py-[60px] px-[80px] items-center justify-center flex">
                <div>
                    <img src="/image/modul-1.png" alt="" className="items-center"/>
                </div>
                <div className="grid grid-flow-row gap-6 my-auto">
                    <h1 className="text-[40px] text-white font-bold text-center">
                        Introduction to UI/UX
                    </h1>
                    <p className="text-[16px] text-white font-normal text-center">
                        Ayo mulai pelajaranmu di bidang UI/UX!
                    </p>
                </div>
            </div>

            <div className="h-[auto] w-full py-[65px] px-[80px] grid grid-flow-row gap-[60px]">
                <div className="bg-[#584270] py-1 px-10 rounded-lg w-fit mx-auto shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]">
                    <h1 className="text-[40px] text-white font-bold mx-auto items-center justify-center">Definisi & Perbedaan UI/UX</h1>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Pendahuluan</h1>
                    <p className="text-2xl text-justify">Dalam dunia desain digital, dua istilah yang sering digunakan adalah User Interface (UI) dan User Experience (UX). Keduanya berperan penting dalam menciptakan pengalaman pengguna yang optimal. Namun, meskipun sering disebut bersama, UI dan UX memiliki perbedaan mendasar dalam tujuan, fokus, serta implementasinya.</p>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Definisi UI (User Interface)</h1>
                    <p className="text-2xl text-justify">User Interface (UI) adalah tampilan visual dari sebuah sistem yang berfungsi sebagai jembatan antara pengguna dan produk digital. UI berfokus pada desain grafis dan elemen interaktif yang memudahkan pengguna dalam berinteraksi dengan aplikasi atau website.
                    <br /> <br />
                    Komponen Utama UI:
                    <ul className="text-2xl list-disc">
                        <li className="text-2xl text-justify ml-10"> Desain Visual: Kombinasi warna, tipografi, ikon, dan layout untuk menciptakan tampilan yang menarik.</li>
                        <li className="text-2xl text-justify ml-10">Interaktivitas: Respons elemen terhadap tindakan pengguna, seperti efek hover atau animasi.</li>
                        <li className="text-2xl text-justify ml-10">Konsistensi: Desain yang seragam di seluruh platform untuk memastikan pengalaman yang mulus.</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Definisi UX (User Experience)</h1>
                    <p className="text-2xl text-justify">User Experience (UX) mengacu pada bagaimana perasaan pengguna saat berinteraksi dengan sebuah produk atau layanan. UX mencakup aspek kenyamanan, kemudahan penggunaan, dan kepuasan pengguna dalam menggunakan aplikasi atau website.
                    <br /> <br />
                    Komponen Utama UI:
                    <ul className="text-2xl list-disc">
                        <li className="text-2xl text-justify ml-10"> Usability: Seberapa mudah pengguna memahami dan menggunakan fitur dalam aplikasi.</li>
                        <li className="text-2xl text-justify ml-10">Aksesibilitas: Kemampuan sistem untuk digunakan oleh berbagai jenis pengguna, termasuk penyandang disabilitas.</li>
                        <li className="text-2xl text-justify ml-10">Navigasi: Struktur dan alur yang memudahkan pengguna dalam menjelajahi platform.</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Perbedaan UI dan UX</h1>
                    <p className="text-2xl text-justify">
                    <ul className="text-2xl list-disc">
                        <li className="text-2xl text-justify ml-10"> Fokus: UI berorientasi pada tampilan visual dan estetika produk, sementara UX menitikberatkan pada pengalaman pengguna secara keseluruhan.</li>
                        <li className="text-2xl text-justify ml-10">Tujuan: UI bertujuan menciptakan desain yang menarik dan interaktif, sedangkan UX memastikan kemudahan serta kepuasan dalam penggunaan.</li>
                        <li className="text-2xl text-justify ml-10">Elemen: UI mencakup warna, tipografi, tombol, dan ikon, sedangkan UX berfokus pada navigasi, aksesibilitas, dan kemudahan penggunaan.</li>
                        <li className="text-2xl text-justify ml-10"> Hasil Akhir: UI menghasilkan tampilan antarmuka yang menarik, sementara UX menciptakan pengalaman yang nyaman dan efisien bagi pengguna.</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <h1 className="text-[32px] font-bold mb-6">📌 Kesimpulan</h1>
                    <p className="text-2xl text-justify">UI dan UX adalah dua elemen yang saling melengkapi dalam desain digital. UI berfokus pada tampilan dan estetika, sementara UX memastikan pengguna mendapatkan pengalaman yang baik dan efisien. Perpaduan keduanya akan menghasilkan produk yang tidak hanya indah secara visual tetapi juga nyaman digunakan.</p>
                </div>

                <Button classname="bg-[#584270] text-white w-[240px] mb-6 text-base font-medium rounded-lg flex justify-center items-center mx-auto" 
                >Lanjut ke Materi Berikutnya</Button>
            </div>

            <Footer></Footer>
        </>
    );
};

export default MateriPage;   