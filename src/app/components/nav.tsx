"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-gray-800 shadow-sm fixed w-full bg-white dark:bg-black z-50">
            <div className="flex justify-between items-center px-6 sm:px-12 md:px-20 lg:px-24 py-4">

                <Link href="/" className="text-2xl font-bold hover:opacity-70 transition-opacity">A.</Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 font-semibold">
                    <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
                    <Link href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</Link>
                    <Link href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
                >
                    <span
                        className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"
                            }`}
                    ></span>

                    <span
                        className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    ></span>

                    <span
                        className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"
                            }`}
                    ></span>
                </button>

            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 py-4" : "max-h-0"} bg-white dark:bg-black px-6`}>
                <div className="flex flex-col gap-4 font-semibold">
                    <Link href="#about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
                    <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
                    <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            </div>

        </div>
    );
}
