"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi"
import { useCart } from "../../context/CartContext"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { totalItems } = useCart()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary">E-Sales</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <FiSearch className="absolute left-3 text-gray-400" />
                    </div>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/wishlist" className="text-gray-700 hover:text-primary">
                            <FiHeart className="w-6 h-6" />
                        </Link>
                        <Link to="/cart" className="text-gray-700 hover:text-primary relative">
                            <FiShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                            )}
                        </Link>
                        <Link to="/login" className="text-gray-700 hover:text-primary">
                            <FiUser className="w-6 h-6" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Link to="/cart" className="text-gray-700 hover:text-primary relative mr-4">
                            <FiShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                            )}
                        </Link>
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none">
                            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex items-center relative mb-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <FiSearch className="absolute left-3 text-gray-400" />
                        </div>
                        <nav className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/wishlist"
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Wishlist
                            </Link>
                            <Link
                                to="/login"
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Account
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

