import React from "react";
import InputForm from "../elements/Input";
import Button from "../elements/button";

const FormUpdate = () => {
    return (
        <div className="w-full h-auto items-center justify-left">
            <div className="mb-10">
                <InputForm
                    type="text"
                    placeholder="John Doe"
                    name="fullname"
                    className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                    label="Full Name"
                    note="Required"
                >
                </InputForm>
            </div>
            <div className="mb-10">
                <InputForm
                    type="text"
                    placeholder="Ex: Product Design"
                    name="passion"
                    className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                    label="Passion"
                    note="Required"
                >
                </InputForm>
            </div>
            <div className="mb-10">
                <InputForm
                    type="text"
                    placeholder="Enter your summary here"
                    name="summary"
                    className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                    label="Summary"
                    note="Required"
                >
                </InputForm>
            </div>
            <Button classname="w-[240px] text-white p-3 rounded-lg"
            >Simpan Perubahan</Button>
            
        </div>
    );
}

export default FormUpdate;