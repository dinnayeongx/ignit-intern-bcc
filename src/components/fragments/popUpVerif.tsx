import React from "react";

interface PopUpVerifProps {
    children: React.ReactNode;
    image: string;
    onClose: () => void
}

const PopUpVerif: React.FC<PopUpVerifProps> = ({children, image, onClose}) => {

    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="w-[644px] h-[443px] bg-white rounded-[40px] items-center justify-center py-10 px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
                    <button className="flex float-right -mr-2 -mt-2"
                    onClick={handleClose}>
                        <img src="/image/x.svg" alt="" />
                    </button>
                    <img src={image} alt="" className="mx-auto w-[240px] h-[260px]"/>
                    
                    {children}
                </div>
            </div>
        </>
    )
};

export default PopUpVerif;
