import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="border-b-4 border-yellow-500 bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="bg-gradient-to-br from-yellow-400 via-yellow-600 to-black rounded-full p-2 flex items-center justify-center shadow-lg">
                        <img
                            src="https://ik.imagekit.io/ic3wa6ghc/FOURGREENINDIA/logo"
                            className="h-16 w-16 object-contain bg-black rounded-full border-4 border-yellow-400"
                            alt="FOUR GREEN INDIA LOGO"
                        />
                    </div>
                    <span className="self-center text-2xl font-extrabold whitespace-nowrap text-yellow-400 drop-shadow-lg">
                        FOUR GREEN 
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-black/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 md:p-0 text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-sm font-bold transition md:bg-transparent md:hover:bg-yellow-400 md:hover:text-black"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/properties"
                                className="block py-2 px-3 md:p-0 text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-sm font-bold transition md:bg-transparent md:hover:bg-yellow-400 md:hover:text-black"
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/layout"
                                className="block py-2 px-3 md:p-0 text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-sm font-bold transition md:bg-transparent md:hover:bg-yellow-400 md:hover:text-black"
                            >
                                Layout
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/testimonials"
                                className="block py-2 px-3 md:p-0 text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-sm font-bold transition md:bg-transparent md:hover:bg-yellow-400 md:hover:text-black"
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 px-3 md:p-0 text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-sm font-bold transition md:bg-transparent md:hover:bg-yellow-400 md:hover:text-black"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;