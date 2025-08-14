import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-2 w-full bg-base-200 py-8">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Address */}
                <div>
                    <h3 className="text-lg font-bold text-primary">Our Office</h3>
                    <p className="mt-2 text-gray-600">
                        Saharanpur, Uttar Pradesh, India
                    </p>
                    <p className="text-gray-600">Contact: +91 1818181818</p>
                    <p className="text-gray-600">Email: info@packagingsolutions.com</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-primary">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-primary">Home</a></li>
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Products</a></li>
                        <li><a href="#" className="hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-bold text-primary">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4 mt-2 text-gray-600">
                        <a href="#">🌐</a>
                        <a href="#">📘</a>
                        <a href="#">🐦</a>
                        <a href="#">📸</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-6 border-t border-gray-300 pt-4">
                Copyright © 2025. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer