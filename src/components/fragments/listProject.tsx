import React from "react";

interface ListProjectProps {
    image: string;
    title: string;
    onClick?: () => void;
}

const ListProject: React.FC<ListProjectProps> = ({ image, title, onClick}) => {
    return (
        <>
            <div>
                <div className="flex gap-20 px-[76px] my-9">
                    <img src={image} alt="" />
                    <h1 className="text-2xl font-semibold my-auto">{title}</h1>
                    <button onClick={onClick}>
                        <img src="/image/vector-edit.svg" alt="" />
                    </button>          
                </div>
                <hr className="bg-[rgba(0,0,0,0.10)]" />
            </div>
        </>
    );
};

export default ListProject;