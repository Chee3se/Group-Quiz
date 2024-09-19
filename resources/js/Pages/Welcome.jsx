import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <body className="bg-gradient-to-r from-pink-500 to-yellow-500">
                {/* <!-- Navigation --> */}
                <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
                <div className="flex items-center space-x-2">
                                <img src="favicon.ico" alt="Favicon" className="h-8 w-8" />
                        
                    </div>

                    <div className="font-montserrat hidden md:block">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md py-2 px-4 text-white bg-black ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* <!-- Hero --> */}
                <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
                    <div className="md:flex-1 md:mr-10">
                        <h1 className="font-pt-serif text-5xl font-bold mb-7">
                            Quizy
                        </h1>
                        <p className="font-pt-serif font-normal mb-7">
                            Compete against your friends on general knowledge and any theme!
                        </p>

                        <div className="font-montserrat">
                            <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                                Call to action
                            </button>
                            <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                                Secondary action
                            </button>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}
