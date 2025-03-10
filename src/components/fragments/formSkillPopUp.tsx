import React from "react";
import Button from "../elements/button";
import InputForm from "../elements/Input";

interface PopUpSKillProps {
    children: React.ReactNode;
    onClose: () => void;
}

const FormSKillPopUp: React.FC<PopUpSKillProps> = ({children, onClose}) => {
    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="w-[650px] h-[530px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between px-6">
                        <h1 className="text-[28px] font-medium text-[#584270]">Tambah Skills</h1>
                        <button className="flex float-right mr-1 -mt-1"
                        onClick={handleClose}>
                            <img src="/image/x.svg" alt="" />
                        </button>
                    </div>
                    
                    <hr className="bg-[rgba(0,0,0,0.10)] mt-5" />

                    <div className="w-full h-auto items-center justify-center mt-10 px-[80px]">
                        <div className="mb-5">
                            <InputForm
                                type="text"
                                placeholder="Ex. UI/UX Design"
                                name="skill"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                                label="Skills"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-5">
                            <InputForm
                                type="text"
                                placeholder="Ex: Proficient in creating intuitive interfaces"
                                name="description"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                                label="Deskripsi Singkat"
                                note="Optional"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-5">
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="pengalaman"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                                label="Pengalaman"
                                note="Optional"
                            >
                            </InputForm>
                        </div>
                        <Button classname="w-[240px] text-white mt-10 p-3 rounded-lg justify-center items-center mx-auto"
                        >Tambah Skill</Button>
                    
                    </div>
                    
                    {children}
                </div>
            </div>
        </>
    );
};

export default FormSKillPopUp;