import { Link } from "react-router-dom"
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">E-Sales</h3>
                        <p className="text-gray-300 mb-4">
                            Your one-stop shop for all your shopping needs. Quality products at affordable prices.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FiFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FiInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FiYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/wishlist" className="text-gray-300 hover:text-white transition-colors">
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Shipping Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Return Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} E-Sales. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

