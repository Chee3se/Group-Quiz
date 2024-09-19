import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Dashboard() {
    return (
        <Layout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
