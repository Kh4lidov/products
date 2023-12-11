import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children, maxWidth }) {
    const maxWidthClass = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
    }[maxWidth];

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div
                className={`w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ${
                    maxWidth ? maxWidthClass : "max-w-md"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
