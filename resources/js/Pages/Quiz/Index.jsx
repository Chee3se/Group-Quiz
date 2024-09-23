import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Correct answers for each quiz
    const correctAnswers = {
        quiz1: [0, 1, 1], // Correct answers for quiz 1
        quiz2: [2, 0, 1], // Correct answers for quiz 2
        quiz3: [1, 3, 0], // Correct answers for quiz 3
        quiz4: [0, 2, 3], // Correct answers for quiz 4
    };

    // Questions for each quiz
    const quiz1Questions = [
        {
            question: "What is the highest-grossing movie of all time?",
            options: [
                "Avatar",
                "Avengers: Endgame",
                "Titanic",
                "Star Wars: The Force Awakens"
            ]
        },
        {
            question: "Who directed 'Inception'?",
            options: [
                "Christopher Nolan",
                "Steven Spielberg",
                "James Cameron",
                "Quentin Tarantino"
            ]
        },
        {
            question: "Which actor played the Joker in 'The Dark Knight'?",
            options: [
                "Jared Leto",
                "Heath Ledger",
                "Joaquin Phoenix",
                "Jack Nicholson"
            ]
        }
    ];

    const quiz2Questions = [
        {
            question: "What is the longest novel ever written?",
            options: [
                "War and Peace",
                "Les Misérables",
                "In Search of Lost Time",
                "The Stand"
            ]
        },
        {
            question: "Who wrote 'The Great Gatsby'?",
            options: [
                "Ernest Hemingway",
                "F. Scott Fitzgerald",
                "Mark Twain",
                "George Orwell"
            ]
        },
        {
            question: "In '1984', who is Big Brother?",
            options: [
                "The leader of the Party",
                "A famous television personality",
                "A character in a dream",
                "A mythological figure"
            ]
        }
    ];

    const quiz3Questions = [
        {
            question: "What is the capital of France?",
            options: [
                "Berlin",
                "Paris",
                "Rome",
                "Madrid"
            ]
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            options: [
                "China",
                "Brazil",
                "Japan",
                "Russia"
            ]
        },
        {
            question: "Who won the FIFA World Cup in 2018?",
            options: [
                "Brazil",
                "Germany",
                "France",
                "Argentina"
            ]
        }
    ];

    const quiz4Questions = [
        {
            question: "Which sport is known as the 'king of sports'?",
            options: [
                "Basketball",
                "Football (Soccer)",
                "Tennis",
                "Cricket"
            ]
        },
        {
            question: "How many players are on a baseball team?",
            options: [
                "9",
                "11",
                "8",
                "10"
            ]
        },
        {
            question: "In which year were the first modern Olympic Games held?",
            options: [
                "1896",
                "1900",
                "1924",
                "1912"
            ]
        }
    ];

    // State to track selected answers for each quiz
    const [selectedAnswers, setSelectedAnswers] = useState({
        quiz1: Array(quiz1Questions.length).fill(null),
        quiz2: Array(quiz2Questions.length).fill(null),
        quiz3: Array(quiz3Questions.length).fill(null),
        quiz4: Array(quiz4Questions.length).fill(null)
    });

    const [scores, setScores] = useState({ quiz1: null, quiz2: null, quiz3: null, quiz4: null });

    // Handle answer selection
    const handleAnswerChange = (quiz, questionIndex, answerIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [quiz]: selectedAnswers[quiz].map((answer, i) =>
                i === questionIndex ? answerIndex : answer
            )
        });
    };

    // Handle quiz submission
    const handleSubmit = (quiz) => {
        const userAnswers = selectedAnswers[quiz];
        const correct = correctAnswers[quiz];
        let score = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === correct[index]) {
                score += 1;
            }
        });

        setScores({
            ...scores,
            [quiz]: score
        });
    };

    return (
        <Layout>
            <Head title="Quizzes" />

            <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text mb-12 text-center">
                    Quiz Selection
                </h1>

                <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-6">
                    <div className="grid grid-cols-1 gap-6">

                        {/* Quiz 1: Movies */}
                        <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-400 hover:text-white transition duration-300">
                            <div className="text-xl font-semibold">🎬 Quiz 1: Movies</div>
                            <div className="text-sm mt-1">Theme: Movies 🎥</div>
                            <div className="text-sm mb-4">Questions: {quiz1Questions.length}</div>

                            {quiz1Questions.map((question, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Question {index + 1}: {question.question}</h3>
                                    <div className="grid grid-cols-1 gap-4 pl-4">
                                        {question.options.map((option, i) => (
                                            <label key={i} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`quiz1-question-${index}`}
                                                    className="mr-2"
                                                    onChange={() => handleAnswerChange('quiz1', index, i)}
                                                    checked={selectedAnswers.quiz1[index] === i}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={() => handleSubmit('quiz1')}
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-4"
                            >
                                Submit 
                            </button>

                            {scores.quiz1 !== null && (
                                <div className="mt-4 text-lg font-semibold">
                                    Your score: {scores.quiz1}/{quiz1Questions.length}
                                </div>
                            )}
                        </div>

                        {/* Quiz 2: Books */}
                        <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-600 hover:text-white transition duration-300">
                            <div className="text-xl font-semibold">📚 Quiz 2: Books</div>
                            <div className="text-sm mt-1">Theme: Books 📖</div>
                            <div className="text-sm mb-4">Questions: {quiz2Questions.length}</div>

                            {quiz2Questions.map((question, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Question {index + 1}: {question.question}</h3>
                                    <div className="grid grid-cols-1 gap-4 pl-4">
                                        {question.options.map((option, i) => (
                                            <label key={i} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`quiz2-question-${index}`}
                                                    className="mr-2"
                                                    onChange={() => handleAnswerChange('quiz2', index, i)}
                                                    checked={selectedAnswers.quiz2[index] === i}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={() => handleSubmit('quiz2')}
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-4"
                            >
                                Submit 
                            </button>

                            {scores.quiz2 !== null && (
                                <div className="mt-4 text-lg font-semibold">
                                    Your score: {scores.quiz2}/{quiz2Questions.length}
                                </div>
                            )}
                        </div>

                        {/* Quiz 3: General Knowledge */}
                        <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-600 hover:text-white transition duration-300">
                            <div className="text-xl font-semibold">🌍 Quiz 3: General Knowledge</div>
                            <div className="text-sm mt-1">Theme: General Knowledge 🌐</div>
                            <div className="text-sm mb-4">Questions: {quiz3Questions.length}</div>

                            {quiz3Questions.map((question, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Question {index + 1}: {question.question}</h3>
                                    <div className="grid grid-cols-1 gap-4 pl-4">
                                        {question.options.map((option, i) => (
                                            <label key={i} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`quiz3-question-${index}`}
                                                    className="mr-2"
                                                    onChange={() => handleAnswerChange('quiz3', index, i)}
                                                    checked={selectedAnswers.quiz3[index] === i}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={() => handleSubmit('quiz3')}
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-4"
                            >
                                Submit 
                            </button>

                            {scores.quiz3 !== null && (
                                <div className="mt-4 text-lg font-semibold">
                                    Your score: {scores.quiz3}/{quiz3Questions.length}
                                </div>
                            )}
                        </div>

                        {/* Quiz 4: Sports */}
                        <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-600 hover:text-white transition duration-300">
                            <div className="text-xl font-semibold">🏆 Quiz 4: Sports</div>
                            <div className="text-sm mt-1">Theme: Sports ⚽</div>
                            <div className="text-sm mb-4">Questions: {quiz4Questions.length}</div>

                            {quiz4Questions.map((question, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Question {index + 1}: {question.question}</h3>
                                    <div className="grid grid-cols-1 gap-4 pl-4">
                                        {question.options.map((option, i) => (
                                            <label key={i} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`quiz4-question-${index}`}
                                                    className="mr-2"
                                                    onChange={() => handleAnswerChange('quiz4', index, i)}
                                                    checked={selectedAnswers.quiz4[index] === i}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={() => handleSubmit('quiz4')}
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-4"
                            >
                                Submit 
                            </button>

                            {scores.quiz4 !== null && (
                                <div className="mt-4 text-lg font-semibold">
                                    Your score: {scores.quiz4}/{quiz4Questions.length}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
