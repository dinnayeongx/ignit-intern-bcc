import React from "react";

interface ModulBannerProps {
    modul: string;
    title: string;
    image: string;
    onClick?: () => void;
}

const ModulBanner: React.FC<ModulBannerProps> = ({ modul, title, image, onClick}) => {
    return (
        <>
            <button className={`flex items-end w-full bg-cover bg-center justify-stretch bg-[url(${image})] h-[360px] rounded-xl mb-10 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_1px_10px_0px_rgba(0,0,0,0.25)]`}
            onClick={onClick}>
                <div className="bg-[rgba(255,255,255,0.80)] w-full px-4 py-3 h-[80px] rounded-b-xl">
                    <h1 className="text-base text-left mb-1">{title}</h1>
                    <h1 className="text-xl text-left font-medium">{modul}</h1>
                </div>
            </button>
            
        </>
    );
};

export default ModulBanner;