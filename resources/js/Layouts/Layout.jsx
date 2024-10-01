import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Layout({ children, role }) {
    const { url } = usePage();
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <nav className="bg-transparent p-4 border-b border-gray-500">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="/favicon.ico" alt="Favicon" className="h-8 w-8"/>
                        <div className="text-2xl font-bold">
                            <Link href="/">Quizy</Link>
                        </div>
                    </div>
                    <div className={`flex-1 flex justify-center hidden sm:block space-x-4 ${!user ? 'ml-20' : 'mr-8'}`}>
                        <div className="flex justify-center space-x-4">
                            <Link href="/" className={`text-gray-800 relative group ${url === '/' ? 'hover:text-gray-600' : 'hover:text-gray-600'}`}>
                                Home
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                            </Link>
                            <Link href={route("quizzes.index")} className={`text-gray-800 relative group ${url === '/quiz' ? 'hover:text-gray-600' : 'hover:text-gray-600'}`}>
                                Quizzes
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/quiz' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                            </Link>
                            {user && (
                                <Link href="/profile" className={`text-gray-800 relative group ${url === '/profile' ? 'hover:text-gray-600' : 'hover:text-gray-600'}`}>
                                    Profile
                                    <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/profile' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 hidden sm:block">
                        {user ? (
                            <Link method="post" href="/logout" as="button" className='text-gray-800 relative group hover:text-gray-600 font-bold'>
                                Logout
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${url === '/logout' ? 'bg-gray-800' : 'bg-gray-800 transform scale-x-0'} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-800 relative group hover:text-gray-600">
                                    <span className="font-bold">Login</span>
                                </Link>
                                <Link href="/register" className="text-gray-800 relative group hover:text-gray-600">
                                    <span className="text-white font-bold bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-2 rounded-full">Sign Up</span>
                                </Link>
                            </>
                        )}
                    </div>
                    {/* Hamburger Menu */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-300 ease-in-out transform ${showingNavigationDropdown ? 'rotate-180' : 'rotate-0'}`}
                        >
                            <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path className={`${showingNavigationDropdown ? 'hidden' : 'inline-flex'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                <path className={`${showingNavigationDropdown ? 'inline-flex' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Responsive Navigation Menu */}
                <div className={`sm:hidden transition-all duration-500 ease-in-out transform ${showingNavigationDropdown ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>Home</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('quizzes.index')} active={route().current('quizzes.index')}>Quizzes</ResponsiveNavLink>
                        {user && (
                            <ResponsiveNavLink href="/profile" active={route().current('profile')}>Profile</ResponsiveNavLink>
                        )}
                        {user ? (
                            <ResponsiveNavLink method="post" href="/logout" as="button">Logout</ResponsiveNavLink>
                        ) : (
                            <>
                                <ResponsiveNavLink href="/login">Login</ResponsiveNavLink>
                                <ResponsiveNavLink href="/register">Sign Up</ResponsiveNavLink>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <div className="waves-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none"></div>
        </>
    );
}
