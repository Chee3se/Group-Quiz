import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import Waves from "@/Components/Waves.jsx";

export default function Index({ auth, quizzes }) {

    return (
        <Layout auth={auth}>
            <Head title="Quizzes" />
            <Waves/>
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
