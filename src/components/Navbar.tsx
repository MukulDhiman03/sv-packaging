"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
            {/* Left - Brand Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Packaging Products</summary>
                                <ul className="p-2">
                                    <li><a>Product 1</a></li>
                                    <li><a>Product 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Corporate Info</summary>
                                <ul className="p-2">
                                    <li><a>Profile</a></li>
                                    <li><a>Industries We Serve</a></li>
                                    <li><a>Why Us</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-2xl font-bold text-primary">
                    SV Packaging
                </Link>
            </div>

            {/* Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg gap-2">
                    <li><Link href="/" className="hover:text-primary">Home</Link></li>
                    <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                    <li>
                        <details>
                            <summary className="hover:text-primary">Packaging Products</summary>
                            <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                                <li><a>Product 1</a></li>
                                <li><a>Product 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-primary">Corporate Info</summary>
                            <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                                <li><a>Profile</a></li>
                                <li><a>Industries We Serve</a></li>
                                <li><a>Why Us</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Right - Contact Button (only large screens) */}
            <div className="navbar-end hidden lg:flex">
                <a className="btn btn-primary text-lg font-semibold">
                    Contact / Enquiry 📞
                </a>
            </div>
        </div>
    );
};

export default Navbar;
