import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Show({ quiz }) {
    return (
        <Layout>
            <Head title={quiz.title} />

            <div className="container mx-auto mt-10 py-8">
                <h1 className="text-4xl font-bold text-center mb-6">{quiz.title}</h1>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                    
                </div>
            </div>
        </Layout>
    );
}
