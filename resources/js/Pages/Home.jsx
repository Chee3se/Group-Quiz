import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";
import Waves from "@/Components/Waves.jsx";

export default function Home({ auth }) {

    return (
        <Layout auth={auth}>
            <Head title="Home"/>
            <Waves/>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <h1 className="pb-10 pt-48 mx-auto text-9xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-700 inline-block text-transparent bg-clip-text">Quizy</h1>
            </div>
        </Layout>
    );
}
``