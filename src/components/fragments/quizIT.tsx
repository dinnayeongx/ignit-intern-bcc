import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpVerif from "./popUpVerif";

interface QuizITType {
    question: string,
    options: string[],
    answer: string,
}

const questions: QuizITType[] = [
    {
        question: 'Menurut kamu, manakah yang paling penting dibutuhkan pada bidang UI/UX Designer?',
        options: [
            'Kemampuan membuat desain yang menarik secara estetika',
            'Pemahaman tentang perilaku pengguna dan user experience',
            'Keahlian dalam menulis kode pemrograman secara mendetail',
            'Menguasai semua software desain grafis tanpa pengecualian',
            'Menyelesaikan proyek tanpa mempertimbangkan usability',
        ],
        answer: 'Pemahaman tentang perilaku pengguna dan user experience',
    },
];

const QuizIT: React.FC = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const navigate = useNavigate();

    const handleAnswer = (answer: string) => {
        if (answer === questions[0].answer) {
            setPopupMessage('Jawabanmu benar!');
        } else {
            setPopupMessage('Jawabanmu salah!');
        }
        setShowPopup(true);
    }

    const handleNavigate = () => {
        setShowPopup(false);
        navigate('/belajaryuk');
    }

    return (
        <>
            <div>
                <p className="text-[20px] font-medium mb-[40px] text-center">{questions[0].question}</p>
                <div className="items-center justify-center">
                    
                    {questions[0].options.map((option, index) => (
                        <button className="shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25),0px_4px_5px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(0,0,0,0.25)] text-center mb-6 w-full h-auto bg-[#D4CBE7] rounded-2xl py-1 justify-center items-center hover:bg-opacity-50"
                        onClick={() => handleAnswer(option)}>
                        {option}
                        </button>
                    ))}
                </div>
            </div>

            {showPopup && (
                <PopUpVerif image="/image/verif-magang.png" onClose={() => setShowPopup(false)}>
                    <p className="text-center mt-4 text-3xl mx-10 font-bold">{popupMessage}</p>
                    <div className="text-center mt-4">
                        <button
                            onClick={handleNavigate}
                            className="text-[#584270] text-3xl font-bold"
                        >BelajarYuk
                        </button>
                    </div>
                </PopUpVerif>
            )}
        </>
    )
};

export default QuizIT;