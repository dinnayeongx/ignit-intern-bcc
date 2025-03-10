import React from "react";
import Button from "../elements/button";
import InputForm from "../elements/Input";

interface PopUpEduProps {
    children: React.ReactNode;
    onClose: () => void;
}

const FormEduPopUp: React.FC<PopUpEduProps> = ({children, onClose}) => {
    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="w-[720px] h-[550px] bg-white rounded-[40px] items-center justify-center pb-8 pt-6 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25),0px_7px_10px_0px_rgba(0,0,0,0.25),0px_2px_16px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between px-6">
                        <h1 className="text-[28px] font-medium text-[#584270]">Tambah Edukasi</h1>
                        <button className="flex float-right mr-1 -mt-1"
                        onClick={handleClose}>
                            <img src="/image/x.svg" alt="" />
                        </button>
                    </div>
                    
                    <hr className="bg-[rgba(0,0,0,0.10)] mt-3" />

                    <div className="w-full h-auto items-center justify-center mt-5 px-[120px]">
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex. Undergraduate"
                                name="degree"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="Degree"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex: Universitas Brawijaya"
                                name="school"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="School"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3">
                            <InputForm
                                type="text"
                                placeholder="Ex. Sistem Informasi"
                                name="field"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1"
                                label="Field of Study"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <div className="mb-3 flex gap-3 justify-stretch">
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="start"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
                                label="Tahun Mulai"
                                note="Required"
                            >
                            </InputForm>
                            <InputForm
                                type="text"
                                placeholder="Tahun"
                                name="end"
                                className="rounded-md border border-[rgba(0,0,0,0.10)] h-8 mb-0 p-3 px-1 flex-none"
                                label="Tahun Berakhir"
                                note="Required"
                            >
                            </InputForm>
                        </div>
                        <Button classname="w-[240px] text-white mt-3 p-3 rounded-lg justify-center items-center mx-auto"
                        >Tambah Edu</Button>
                    
                    </div>
                    
                    {children}
                </div>
            </div>
        </>
    );
};

export default FormEduPopUp;