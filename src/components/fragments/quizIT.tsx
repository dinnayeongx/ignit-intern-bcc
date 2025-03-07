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
    const [image, setImage] = useState('');
    const [nav, setNav] = useState('');
    const navigate = useNavigate();

    const handleAnswer = (answer: string) => {
        if (answer === questions[0].answer) {
            setPopupMessage('🎉 Selamat! Kamu Jawab dengan Benar! 🎉<br/>Biar lebih jago lagi, explore di ');
            setImage('/image/popup-true.png');
            setNav('BelajarYuk! 🎨👨‍💻');
        } else {
            setPopupMessage('Oops! Jawabanmu Belum Sepenuhnya Tepat 😕 Sepertinya masih ada yang perlu dipelajari lagi, buka ');
            setImage('/image/popup-false.png');
            setNav('BelajarYuk! 📚💡');
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
                <PopUpVerif image={image} onClose={() => setShowPopup(false)}>
                    <p className="text-center mt-4 text-2xl mx-auto font-bold" dangerouslySetInnerHTML={{ __html: popupMessage }}>
                    </p>
                    <div className="text-center mt-2">
                        <button
                            onClick={handleNavigate}
                            className="text-[#584270] text-2xl font-bold"
                        >{nav}
                        </button>
                    </div>
                </PopUpVerif>
            )}
        </>
    )
};

export default QuizIT;