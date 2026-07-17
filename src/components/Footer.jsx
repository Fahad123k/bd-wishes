import {
    FaBirthdayCake,
    FaHeart,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>
                        <div className="flex items-center gap-3 text-pink-500 text-2xl font-bold">
                            <FaBirthdayCake />
                            Birthday Wishes
                        </div>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Celebrate birthdays with beautiful wishes,
                            unforgettable memories, and heartfelt greetings
                            for your loved ones.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-pink-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/gallery"
                                    className="hover:text-pink-400 transition"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-pink-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-pink-500" />
                                hello@example.com
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-pink-500" />
                                +91 98765 43210
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
                            >
                                <FaGithub />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">

                    <p className="text-sm">
                        © {new Date().getFullYear()} Birthday Wishes.
                        All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-2 text-sm">
                        Made with
                        <FaHeart className="text-red-500 animate-pulse" />
                        using React & Tailwind CSS
                    </p>

                </div>

            </div>
        </footer>
    );
}