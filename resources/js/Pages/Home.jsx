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
            <Head title="Home"/>

            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <h1 className="pt-48 mx-auto text-8xl font-bold">Quizy</h1>
            </div>
        </Layout>
    );
}
