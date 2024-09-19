import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden">
            <nav className="bg-transparent p-4 border-b border-gray-300">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="favicon.ico" alt="Favicon" className="h-8 w-8" />
                        <div className="text-white text-2xl font-bold">
                            <Link href="/">Quizy</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-white hover:text-gray-300 relative group">
                            Home
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        <Link href="/profile" className="text-white hover:text-gray-300 relative group">
                            Profile
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-300 relative group">
                            About
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                        </Link>
                        {user ? (
                            <Link href="/logout" className="text-white hover:text-gray-300 relative group">
                                Logout
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right"></span>
                            </Link>
                        ) : (
                            <Link href="/login" className="text-white hover:text-gray-300 relative group">
                                <span className="px-4 py-2 border border-white rounded-full">
                                    Login
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <main>{children}</main>

            <div className="waves-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <svg className="absolute bottom-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        {/* <!-- First wave layer --> */}
        <path fill="#ffffff" fillOpacity="0.6" d="M0,128L40,138.7C80,149,160,171,240,176C320,181,400,171,480,144C560,117,640,75,720,64C800,53,880,75,960,106.7C1040,139,1120,181,1200,176C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        {/* <!-- Second wave layer --> */}
        <path fill="#ffffff" fillOpacity="0.4" d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        {/* <!-- Third wave layer --> */}
        <path fill="#ffffff" fillOpacity="0.2" d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,240C672,224,768,160,864,149.3C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>dd
</div>
        </div>
    );
}