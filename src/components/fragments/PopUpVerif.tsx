import React from "react";

interface PopUpVerifProps {
    children: React.ReactNode;
    image: string;
}

const PopUpVerif: React.FC<PopUpVerifProps> = ({children, image}) => {

    const handleClose = () => {
        window.close();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-[780px] h-[520px] bg-white rounded-[40px] items-center justify-center py-16 px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)]">
                    <button className="flex float-right -mr-2 -mt-8"
                    onClick={handleClose}>
                        <img src="/image/x.svg" alt="" />
                    </button>
                    <img src={image} alt="" className="mx-auto w-[340px] h-auto"/>
                    
                    {children}
                </div>
            </div>
        </>
    )
};

export default PopUpVerif;