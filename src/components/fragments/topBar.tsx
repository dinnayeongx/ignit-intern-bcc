import React from "react";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
    title: string;
    nav?: string;
    onClick?: () => void    
    
}

const TopBar : React.FC<TopBarProps> = ({title, nav, onClick}) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="h-20 w-full shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] p-5 flex gap-6">
                <button className="flex items-center h-full w-[56px]" 
                onClick={() => navigate("/home") }>
                    <img src="/IGNITLogo.png" alt="" className="items-center"/>
                </button>
            
                <div className="flex items-center w-full h-full">
                    <h1 className="text-[28px] leading-9 font-medium text-[#584270] items-center">{title}</h1>
                </div>
                <div>
                    <button className="text-[20px] w-full h-full flex float-right mr-6 leading-9 font-medium text-[#9B7EBD] items-center" onClick={onClick}>{nav}</button>
                </div>
            </div>
        </>
        
    )
}

export default TopBar;