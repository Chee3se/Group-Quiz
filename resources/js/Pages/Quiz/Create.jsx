import { Head, Link } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import { useState } from 'react';

export default function Create({ auth }) {
    const [questions, setQuestions] = useState([{ id: 1, quizTitle: '', questionTitle: '', answers: ['', '', '', ''], selectedAnswer: null }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { id: questions.length + 1, quizTitle: '', questionTitle: '', answers: ['', '', '', ''], selectedAnswer: null }]);
    };

    const handleInputChange = (index, field, event) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex, aIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerClick = (qIndex, answer) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].selectedAnswer = answer;
        setQuestions(newQuestions);
    };

    return (
        <>
            <Layout auth={auth}>
                <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                    {questions.map((question, qIndex) => (
                        <div key={question.id} className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 mb-6">
                            <div className="flex justify-between items-center mb-6">
                                <input
                                    className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text rounded-lg w-60 focus:outline-none"
                                    placeholder='Quiz title'
                                    value={question.quizTitle}
                                    onChange={(e) => handleInputChange(qIndex, 'quizTitle', e)}
                                />
                            </div>
                            
                            <div className="text-center mb-8">
                                <input
                                    className="text-xl font-semibold rounded-lg focus:outline-none"
                                    placeholder='Question title'
                                    value={question.questionTitle}
                                    onChange={(e) => handleInputChange(qIndex, 'questionTitle', e)}
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                {question.answers.map((answer, aIndex) => (
                                    <input
                                        key={aIndex}
                                        className={`bg-gray-100 border-2 rounded-lg p-6 m-2 focus:outline-none ${question.selectedAnswer === answer ? 'border-green-500' : 'border-gray-200'}`}
                                        placeholder={`Answer ${aIndex + 1}`}
                                        value={answer}
                                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                                        onClick={() => handleAnswerClick(qIndex, answer)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        className="fixed bottom-10 right-10 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none"
                        onClick={handleAddQuestion}
                    >
                        +
                    </button>
                </div>
            </Layout>
        </>
    );
}
