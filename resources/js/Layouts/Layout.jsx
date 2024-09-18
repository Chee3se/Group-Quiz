import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const { url } = usePage();
    const user = usePage().props.auth.user;

    return (
        <div>
            <nav className="bg-transparent p-4 border-b border-gray-300">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="favicon.ico" alt="Favicon" className="h-8 w-8" />
                        <div className="text-gray-800 text-2xl font-bold">
                            <Link href="/">Quizy</Link>
                        </div>
                    </div>
                    <div className={`flex-1 flex justify-center space-x-4 ${!user ? 'ml-20' : 'mr-8'}`}>
                        <div className="flex justify-center space-x-4">
                            <Link href="/" className={`text-gray-800 relative group ${url === '/' ? 'hover:text-gray-600' : 'hover:text-gray-600'}`}>
                                Home
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/' ? 'bg-yellow-600' : 'bg-yellow-600 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                            </Link>
                            {user && (
                                <Link href="/profile" className={`text-gray-800 relative group ${url === '/profile' ? 'hover:text-gray-600' : 'hover:text-gray-600'}`}>
                                    Profile
                                    <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/profile' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <Link method="post" href="/logout" className='text-gray-800 relative group hover:text-gray-600 font-bold'>
                                Logout
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/logout' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-800 relative group hover:text-gray-600">
                                    <span className="font-bold">
                                        Login
                                    </span>
                                </Link>
                                <Link href="/register" className="text-gray-800 relative group hover:text-gray-600">
                                    <span className="text-white font-bold bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-2 rounded-full">
                                        Sign Up
                                    </span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
