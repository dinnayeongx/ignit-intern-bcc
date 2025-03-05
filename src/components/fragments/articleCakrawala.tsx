import React from "react";

interface ArticleCakrawalaProps {
    title: string;
    description: string;
    salary: string;
}

const ArticleCakrawala: React.FC<ArticleCakrawalaProps> = ({ title, description, salary}) => {
    return (
        <>
            <div className="flex gap-10">
            <div className="flex gap-2 w-[540px] h-[132px] p-4 border border-[#7F5EA3] rounded-[6px]">
                    <div className="flex items-center h-[92px] w-[92px]">
                        <img src="/image/article-salary.png" alt="" className="flex h-[92px]"/>
                    </div>
                    <div className="grid grid-flow-row gap-y-1 items-center justify-center">
                        <h2 className="text-[20px] font-medium text-left">
                            Gaji Seorang {title}
                        </h2>
                        <p className="text-[24px] font-normal text-left">
                            {salary}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 w-[540px] h-[132px] p-4 border border-[#7F5EA3] rounded-[6px]">
                    <div className="flex items-center h-[92px] w-[140px]">
                        <img src="/image/article-kriteria.png" alt="" className="flex h-[92px]"/>
                    </div>
                    <div className="grid grid-flow-row gap-y-1 items-center justify-center">
                        <h2 className="text-[20px] font-medium text-left">
                            Kriteria Kelulusan {title}
                        </h2>
                        <p className="text-[16px] font-normal text-left">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            
                
        </>
        
    );
};

export default ArticleCakrawala;