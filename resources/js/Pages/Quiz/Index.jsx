import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
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
                            className="absolute top-4 right-4 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
                        >
                            <span className="text-white px-6 py-2">Create</span>
                        </Link>
                    )}
                    <div className="grid grid-cols-1 gap-6 mt-12">
                        {quizzes.map((quiz) => (
                            <div key={quiz.id} className="relative bg-gray-100 border-2 border-gray-200 rounded-lg p-6">
                                <div className="flex flex-row">
                                    <Link
                                        href={route('quizzes.show', { "id": quiz.id })}
                                        className="flex-grow transition duration-300 flex justify-between items-center"
                                    >
                                        <div className="flex-1 text-center">
                                            <div className="text-xl font-semibold">{quiz.title}</div>
                                            <div className="text-sm mb-4">{`Question Count: ${quiz.questions_count}`}</div>
                                        </div>
                                    </Link>

                                    <div className="flex flex-col space-y-2">
                                        {auth.role === 'admin' && (
                                            <>
                                                <Link
                                                    href={route('quizzes.edit', { "id": quiz.id })}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
                                                    onClick={(e) => e.stopPropagation()}  // Stop link navigation
                                                >
                                                    <img src="edit.svg" alt="Edit" className="w-4 h-4 inline-block" />
                                                </Link>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent navigation
                                                        handleDelete(quiz.id);
                                                    }}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 text-center"
                                                >
                                                    <img src="delete.svg" alt="Delete" className="w-4 h-4 inline-block" />
                                                </button>
                                            </>
                                        )}
                                        {/* High Scores button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent navigation
                                                handleHighScoresClick(quiz.id);
                                            }}
                                            className="mt-2 bg-yellow-500 text-white rounded-lg p-2 hover:bg-yellow-600 transition duration-300"
                                        >
                                            <img src="trophy.svg" alt="High Scores" className="w-4 h-4 inline-block" />
                                        </button>
                                    </div>
                                </div>
                                {/* High Scores dropdown */}
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
                            </div>
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
