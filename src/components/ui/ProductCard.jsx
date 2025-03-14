"use client"
import { Link } from "react-router-dom"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { useCart } from "../../context/CartContext"

const ProductCard = ({ product }) => {
    const { addItem } = useCart()

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        addItem(product)
    }

    return (
        <div className="card group">
            <div className="relative overflow-hidden">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                    </div>
                )}

                <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Add to wishlist"
                >
                    <FiHeart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-gray-900 mb-1 hover:text-primary transition-colors">{product.name}</h3>
                </Link>

                <p className="text-gray-500 text-sm mb-2">{product.category}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {product.discount > 0 ? (
                            <>
                <span className="font-bold text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                                <span className="text-gray-500 text-sm line-through ml-2">${product.price.toFixed(2)}</span>
                            </>
                        ) : (
                            <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        )}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full shadow-md transition-colors"
                        aria-label="Add to cart"
                    >
                        <FiShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

