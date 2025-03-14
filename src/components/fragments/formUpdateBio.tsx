import React, { useState } from "react";
import InputForm from "../elements/input";
import Button from "../elements/button";

interface FormUpdateProps {
    initialFullname?: string;
    initialPassion?: string;
    initialSummary?: string;
    onSubmit: (data: { fullName: string; passion: string; summary: string }) => void;
}

const FormUpdate: React.FC<FormUpdateProps> = ({
    initialFullname = "",
    initialPassion = "",
    initialSummary = "",
    onSubmit
}) => {
    const [formData, setFormData] = useState({
        fullName: initialFullname,
        passion: initialPassion,
        summary: initialSummary,
    });
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value || "" }));
        setError(null); // Reset error when user starts typing
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure formData properties exist
        if (!formData?.fullName?.trim() || !formData?.passion?.trim() || !formData?.summary?.trim()) {
            setError("All fields are required.");
            return;
        }

        onSubmit(formData);
        setSuccessMessage("Profile updated successfully!");
    };

    return (
        <div className="w-full h-auto items-center justify-left">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="John Doe"
                        name="fullName"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Full Name"
                        note="Required"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="Ex: Product Design"
                        name="passion"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Passion"
                        note="Required"
                        value={formData.passion}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-10">
                    <InputForm
                        type="text"
                        placeholder="Enter your summary here"
                        name="summary"
                        className="rounded-md border border-[rgba(0,0,0,0.10)] h-auto mb-0 p-3 px-1"
                        label="Summary"
                        note="Required"
                        value={formData.summary}
                        onChange={handleChange}
                    />
                </div>
                <Button classname="w-[240px] text-white p-3 rounded-lg" type="submit">
                    Simpan Perubahan
                </Button>
            </form>
        </div>
    );
};

export default FormUpdate;
