import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
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
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-gray-800 hover:text-gray-600 relative group">
                            Home
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        <Link href="/profile" className="text-gray-800 hover:text-gray-600 relative group">
                            Profile
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        <Link href="/about" className="text-gray-800 hover:text-gray-600 relative group">
                            About
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        {user ? (
                            <Link href="/logout" className="text-gray-800 hover:text-gray-600 relative group">
                                Logout
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                            </Link>
                        ) : (
                            <Link href="/login" className="text-gray-800 hover:text-gray-600 relative group">
                                <span className="px-4 py-2 border border-gray-800 rounded-full">
                                    Login
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
