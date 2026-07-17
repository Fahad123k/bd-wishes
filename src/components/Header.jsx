import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaBirthdayCake,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-pink-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-pink-600"
                >
                    <FaBirthdayCake className="text-3xl text-pink-500" />
                    <span>Birthday Wishes</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link
                        to="/"
                        className="hover:text-pink-500 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/gallery"
                        className="hover:text-pink-500 transition"
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-pink-500 transition"
                    >
                        Contact
                    </Link>

                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition">
                        <HiSparkles />
                        Celebrate
                    </button>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-pink-600"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <nav className="bg-white border-t border-pink-100 px-6 py-5 flex flex-col gap-5">

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-pink-500"
                    >
                        Home
                    </Link>

                    <Link
                        to="/gallery"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-pink-500"
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-pink-500"
                    >
                        Contact
                    </Link>

                    <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-3 flex justify-center items-center gap-2">
                        <HiSparkles />
                        Celebrate
                    </button>

                </nav>
            </div>
        </header>
    );
}