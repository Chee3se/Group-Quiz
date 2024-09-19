import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Home({ auth }) {

    return (
        <Layout>
            <Head title="Home"/>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <h1 className="pb-10 pt-48 mx-auto text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Quizy</h1>
            </div>
        </Layout>
    );
}
