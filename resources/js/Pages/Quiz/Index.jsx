import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <Layout>
            <Head title="quizes"/>

            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <h1 className="pb-10 pt-48 mx-auto text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">quiz page skr</h1>
            </div>
        </Layout>
    );
}
