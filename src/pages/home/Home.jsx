import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import ProductCard from "../../components/ui/ProductCard"
import { products } from "../../data/products"

const Home = () => {
    const featuredProducts = products.filter((product) => product.featured).slice(0, 8)
    const newArrivals = products.filter((product) => product.new).slice(0, 4)
    const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4)

    return (
        <div>
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop the Latest Trends</h1>
                            <p className="text-lg mb-8 text-blue-100">
                                Discover our curated collection of premium products at unbeatable prices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/product/1"
                                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
                                >
                                    Shop Now
                                </Link>
                                <Link
                                    to="/about"
                                    className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src="https://via.placeholder.com/600x400" alt="Hero" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {["Electronics", "Clothing", "Home & Kitchen", "Beauty"].map((category, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={`https://via.placeholder.com/300x300?text=${category}`}
                                    alt={category}
                                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-4 w-full">
                                        <h3 className="text-white font-bold text-xl mb-1">{category}</h3>
                                        <Link to="/" className="text-white/80 hover:text-white flex items-center text-sm transition-colors">
                                            Shop Now <FiArrowRight className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <Link to="/" className="text-primary hover:text-primary-dark flex items-center transition-colors">
                            View All <FiArrowRight className="ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
                            <p className="text-gray-300 mb-6">Get up to 50% off on selected items. Limited time offer.</p>
                            <Link
                                to="/"
                                className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-md font-medium transition-colors inline-block"
                            >
                                Shop Now
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://via.placeholder.com/500x300" alt="Special Offer" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* New Arrivals */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">New Arrivals</h2>
                                <Link to="/" className="text-primary hover:text-primary-dark flex items-center transition-colors">
                                    View All <FiArrowRight className="ml-1" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {newArrivals.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Best Sellers</h2>
                                <Link to="/" className="text-primary hover:text-primary-dark flex items-center transition-colors">
                                    View All <FiArrowRight className="ml-1" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {bestSellers.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-600 mb-6">Stay updated with our latest products and exclusive offers.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

