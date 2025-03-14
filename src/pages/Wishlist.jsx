"use client"
import { Link } from "react-router-dom"
import { FiTrash2, FiShoppingCart, FiHeart, FiArrowLeft } from "react-icons/fi"
import { useCart } from "../context/CartContext"

const wishlistItems = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        image: "https://via.placeholder.com/150?text=T-Shirt",
        category: "Clothing",
    },
    {
        id: 2,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        image: "https://via.placeholder.com/150?text=Headphones",
        category: "Electronics",
    },
    {
        id: 3,
        name: "Stainless Steel Water Bottle",
        price: 24.99,
        image: "https://via.placeholder.com/150?text=Bottle",
        category: "Home & Kitchen",
    },
]

const Wishlist = () => {
    const { addItem } = useCart()

    const handleAddToCart = (item) => {
        addItem(item)
    }

    const handleRemoveFromWishlist = (id) => {
        console.log("Remove item from wishlist:", id)
    }

    if (wishlistItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <FiHeart className="w-24 h-24 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
                    <p className="text-gray-600 mb-8">You haven't added any products to your wishlist yet.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                    >
                        <FiArrowLeft className="mr-2" />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            {wishlistItems.length} {wishlistItems.length === 1 ? "Item" : "Items"}
                        </h2>
                    </div>
                </div>

                <ul className="divide-y divide-gray-200">
                    {wishlistItems.map((item) => (
                        <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-6 mb-4 sm:mb-0">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        <Link to={`/product/${item.id}`} className="hover:text-primary">
                                            {item.name}
                                        </Link>
                                    </h3>
                                    <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                                </div>
                                <p className="text-gray-500 mb-4">{item.category}</p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark"
                                    >
                                        <FiShoppingCart className="mr-2" />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <FiTrash2 className="mr-2" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark">
                    <FiArrowLeft className="mr-2" />
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default Wishlist

