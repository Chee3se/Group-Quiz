import { Head, Link } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import { useState } from 'react';

export default function Create({ auth }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    return (
        <>
            <Layout auth={auth}>
                <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                    <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                                Add a quiz
                            </h1>
                        </div>
                        
                        <div className="text-center mb-8">
                            <input className="text-xl font-semibold rounded-lg" placeholder='Question title'></input>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'].map((answer, index) => (
                                <input
                                    key={index}
                                    className={`bg-gray-100 border-2 rounded-lg p-6 m-2 ${selectedAnswer === answer ? 'border-green-500' : 'border-gray-200'}`}
                                    placeholder={answer}
                                    onClick={() => handleAnswerClick(answer)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
