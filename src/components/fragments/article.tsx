import React from "react";

interface ArticleProps {
    image: string;
    title: string;
    description: string;
}

const Article: React.FC<ArticleProps> = ({image, title, description}) => {
    return (
        <>
            <div className="flex gap-2 w-[540px] h-[122px] p-4 border border-[rgba(0,0,0,0.10)] rounded-[6px]">
                <div className="flex items-center h-[92px] w-[140px]">
                    <img src={image} alt="" className="flex h-[92px]"/>
                </div>
                <div className="grid grid-flow-row gap-y-1 items-center justify-center">
                    <h2 className="text-[20px] font-medium text-left">
                        {title}
                    </h2>
                    <p className="text-[16px] font-normal text-left">
                        {description}
                    </p>
                </div>
            </div>
        </>
        
    );
};

export default Article;