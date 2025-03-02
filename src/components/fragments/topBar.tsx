import React from "react";

interface TopBarProps {
    title: string;
}

const TopBar : React.FC<TopBarProps> = ({title}) => {
    return (
        <>
            <div className="h-20 w-full shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] p-5 flex gap-6">
                <button className="flex items-center h-full w-[56px]" 
                onClick={() => window.location.href = "/home" }>
                    <img src="/IGNITLogo.png" alt="" className="items-center"/>
                </button>
            
                <div className="flex items-center w-full h-full">
                    <h1 className="text-[28px] leading-9 font-medium text-[#584270] items-center">{title}</h1>
                </div>
            </div>
        </>
        
    )
}

export default TopBar;