import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { MAX_WIDTH_CLASS } from "@/Components/Common/MaxWidthClass.js";

export default function Guest({ children, maxWidth }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div
                className={`w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ${
                    maxWidth ? MAX_WIDTH_CLASS[maxWidth] : "max-w-md"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
