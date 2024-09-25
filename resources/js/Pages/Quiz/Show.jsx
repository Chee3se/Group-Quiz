import { useState, useEffect } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import Waves from "@/Components/Waves.jsx";

export default function Show({ quiz, auth }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [finalScore, setFinalScore] = useState(null);
    const { post } = useForm();

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const totalQuestions = quiz.questions.length;

    const handleAnswerClick = (answerId) => {
        setSelectedAnswers((prev) => [...prev, answerId]);

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            post(route('quizzes.saveScore', {
                "answers": selectedAnswers,
                "quiz_id": quiz.id,
                "user_id": auth.user.id
            }), {
                onSuccess: (response) => {
                    setFinalScore(response.props.score);
                    setIsQuizCompleted(true);
                }
            });
        }
    };

    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const getProgressColor = () => {
        if (progressPercentage <= 33) return 'bg-red-600';
        if (progressPercentage <= 66) return 'bg-yellow-500';
        return 'bg-green-600';
    };

    const circumference = 2 * Math.PI * 60;
    const strokeDashoffset = finalScore !== null ? circumference - (finalScore / totalQuestions) * circumference : circumference;

    useEffect(() => {
        if (isQuizCompleted) {
            const circle = document.querySelector('.progress-circle');
            circle.style.transition = 'stroke-dashoffset 1s ease-in-out';
            circle.style.strokeDashoffset = strokeDashoffset;
        }
    }, [isQuizCompleted, strokeDashoffset]);

    return (
        <Layout>
            <Head title={quiz.title} />

            <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                            {quiz.title}
                        </h1>
                        <div className="w-1/2 bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className={`h-4 rounded-full transition-all duration-500 ${getProgressColor()}`}
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {isQuizCompleted ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Congrats!</h2>
                            <div className="flex items-center justify-center relative">
                                <svg className="transform -rotate-90 w-36 h-36">
                                    <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-200" />
                                    <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={circumference} strokeDashoffset={circumference} className="text-purple-500 progress-circle" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-2xl">{`${finalScore} / ${totalQuestions}`}</span>
                            </div>
                            <div className="mt-8">
                                <Link
                                    href={route('quizzes.show', { id: quiz.id })}
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                                >
                                    Retake Quiz
                                </Link>
                                <Link
                                    href={route('quiz.index')}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-blue-700 transition duration-300"
                                >
                                    Choose Another Topic
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <h2 className="text-xl font-semibold">{currentQuestion.title}</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-6" style={{ minHeight: '200px' }}>
                                {currentQuestion.answers.map((answer) => (
                                    <button
                                        key={answer.id}
                                        className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-400 hover:text-white transition duration-300"
                                        onClick={() => handleAnswerClick(answer.id)}
                                    >
                                        {answer.title}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}
