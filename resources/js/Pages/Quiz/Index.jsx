import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react'; // Import router for navigation
import Layout from "@/Layouts/Layout.jsx";
import Waves from "@/Components/Waves.jsx";

export default function Index({ auth, quizzes }) {
    const [expandedQuizId, setExpandedQuizId] = useState(null);
    const [highScores, setHighScores] = useState({});

    const toggleScores = (quizId) => {
        setExpandedQuizId(expandedQuizId === quizId ? null : quizId);
    };

    const fetchHighScores = async (quizId) => {
        const response = await fetch(`/quizzes/${quizId}/high-scores`);
        const data = await response.json();
        setHighScores((prevScores) => ({
            ...prevScores,
            [quizId]: data.scores,
        }));
    };

    const handleHighScoresClick = (quizId) => {
        if (!highScores[quizId]) {
            fetchHighScores(quizId);
        }
        toggleScores(quizId);
    };

    const handleQuizClick = (quizId) => {
        router.get(`/quizzes/${quizId}`); // Navigate to the quiz page
    };

    return (
        <Layout auth={auth}>
            <Head title="Quizzes" />
            <Waves />
            <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text mb-12 text-center">
                    Quiz Selection
                </h1>
                <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-6 relative">
                    {auth.role === 'admin' && (
                        <Link
                            href={route('quizzes.create')}
                            className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition duration-300 z-20"
                            style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} // Add shadow for more emphasis
                        >
                            <span className="text-white text-4xl pb-1">+</span>
                        </Link>
                    )}
                    <div className="grid grid-cols-1 gap-6 mt-12">
                        {quizzes.map((quiz, index) => (
                            <>
                                <Link key={quiz.id} href={route('quizzes.show', {"id": quiz.id})} className="bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-400 hover:text-white transition duration-300 flex justify-between items-center">
                                    <div className="flex-1 text-center">
                                        <div className="text-xl font-semibold">{`${quiz.title}`}</div>
                                        <div className="text-sm mb-4">{`Question Count: ${quiz.questions_count}`}</div>
                                    </div>
                                    {auth.role === 'admin' && (
                                        <div className="flex flex-col space-y-2">
                                            <Link href={route('quizzes.edit', {"id": quiz.id})} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-center">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(quiz.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 text-center">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </Link>
                                {/* High Scores Button */}
                                <button
                                    onClick={() => handleHighScoresClick(quiz.id)}
                                    className="mt-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700 transition duration-300"
                                >
                                    High Scores
                                </button>

                                {/* High Scores Dropdown */}
                                {expandedQuizId === quiz.id && highScores[quiz.id] && (
                                    <div className="mt-4 bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold mb-4">High Scores</h3>
                                        <table className="w-full table-auto">
                                            <thead>
                                            <tr>
                                                <th className="px-4 py-2">Player</th>
                                                <th className="px-4 py-2">Score</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {highScores[quiz.id].length > 0 ? (
                                                highScores[quiz.id].map(score => (
                                                    <tr key={score.id}>
                                                        <td className="border px-4 py-2">{score.user.name}</td>
                                                        <td className="border px-4 py-2">{score.score}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="2" className="text-center py-4">No scores yet</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );

    function handleDelete(id) {
        if (confirm('Are you sure you want to delete this quiz?')) {
            // Add your delete logic here
        }
    }
}
