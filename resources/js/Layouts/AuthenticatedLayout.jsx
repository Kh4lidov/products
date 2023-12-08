import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";

export default function Authenticated({ children, navigation }) {
    const { auth } = usePage().props;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <nav className="bg-gray-700 w-48">
                <div className="flex">
                    <div className="flex items-center justify-center bg-white h-14 w-[4.5rem] rounded-br-2xl">
                        <Link href="/">
                            <ApplicationLogo className="h-14" />
                        </Link>
                    </div>

                    <div className="w-16 h-fit ml-3 mt-1.5 text-white text-xs leading-3">
                        Enterprise Resource Planning
                    </div>
                </div>

                <div className="mt-3 ml-8">
                    <ul>
                        {navigation.map((n, index) => (
                            <li
                                key={index}
                                className="text-sm text-white opacity-75 hover:opacity-100 w-fit hover:cursor-pointer"
                            >
                                <Link href={route(n.route)}>{n.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="w-full bg-[#F2F6FA]">
                <div className="flex justify-between px-5 bg-white h-16">
                    <div className="flex items-center text-sm uppercase text-red-500 border-b-4 border-red-500">
                        {
                            navigation.find(
                                (n) => n.route === route().current(),
                            ).title
                        }
                    </div>

                    <div className="flex items-center ml-6">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Выйти
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <main>{children}</main>
            </div>
        </div>
    );
}
