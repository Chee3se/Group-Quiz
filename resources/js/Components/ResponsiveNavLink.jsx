import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full rounded-t-xl flex items-center px-4 py-2 text-gray-800 relative group ${
                active ? '' : ''
            } transition duration-300 ease-in-out ${className}`}
        >
            {children}
            <span className={`absolute left-0 bottom-0 w-full h-0.5 ${active ? '' : ''} group-hover:scale-x-100 transition-transform origin-bottom-right`}></span>
        </Link>
    );
}
