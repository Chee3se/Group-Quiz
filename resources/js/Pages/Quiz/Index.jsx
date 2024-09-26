import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Index({ auth, quizzes }) {
    console.log(quizzes);

    return (
        <Layout auth={auth}>
            <Head title="Quizzes" />
            <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text mb-12 text-center">
                    Quiz Selection
                </h1>
                <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-6">
                    <div className="grid grid-cols-1 gap-6">
                        {quizzes.map((quiz, index) => (
                            <Link href={route('quizzes.show', {"id": quiz.id})} as="button" key={quiz.id} className={`bg-gray-100 border-2 border-gray-200 rounded-lg p-6 hover:bg-purple-400 hover:text-white transition duration-300`}>
                                <div className="text-xl font-semibold">{`${quiz.title}`}</div>
                                <div className="text-sm mb-4">{`Question Count: ${quiz.questions_count}`}</div>
                            </Link>
                            
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
