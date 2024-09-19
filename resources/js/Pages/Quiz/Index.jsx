import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import QuestionLayout from './QuestionLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
        <Layout>
            <Head title="quizes"/>

            {/* <QuestionLayout>
            <Head title="Home"/>

            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <h1 className="pb-10 pt-48 mx-auto text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Quizy</h1>
            </div>
            </QuestionLayout> */}
            <div class="bg-purple-600 w-[90%] h-[750px] m-10 p-10 rounded-lg">
                
                <div class="bg-gray-400 w-[90%] h-[100px] rounded-lg p-5 m-5 hover:bg-slate-600 duration-300 hover:text-white text-lg">
                    quiz 1
                    <div class="text-sm">
                        Theme: movies
                    </div>
                    <div class="text-sm">
                        Questions: 10
                    </div>
                </div>

                <div class="bg-gray-400 w-[90%] h-[100px] rounded-lg p-5 m-5 hover:bg-slate-600 duration-300 hover:text-white text-lg">
                    quiz 2
                    <div class="text-sm">
                        Theme: books
                    </div>
                    <div class="text-sm">
                        Questions: 10
                    </div>
                </div>

                <div class="bg-gray-400 w-[90%] h-[100px] rounded-lg p-5 m-5 hover:bg-slate-600 duration-300 hover:text-white text-lg">
                    quiz 3
                    <div class="text-sm">
                        Theme: idk
                    </div>
                    <div class="text-sm">
                        Questions: 10
                    </div>
                </div>

                <div class="bg-gray-400 w-[90%] h-[100px] rounded-lg p-5 m-5 hover:bg-slate-600 duration-300 hover:text-white text-lg">
                    quiz 4
                    <div class="text-sm">
                        Theme: sports
                    </div>
                    <div class="text-sm">
                        Questions: 10
                    </div>
                </div>

            </div>
        </Layout>
        
            </>
    );
}
