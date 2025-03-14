"use client"

import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
    FiHeart,
    FiShoppingCart,
    FiStar,
    FiChevronRight,
    FiCheck,
    FiTruck,
    FiRefreshCw,
    FiShield,
} from "react-icons/fi"
import { useCart } from "../../context/CartContext"
import { products } from "../../data/products"

const ProductDetail = () => {
    const { id } = useParams()
    const { addItem } = useCart()

    const product = products.find((p) => p.id === Number.parseInt(id)) || products[0]

    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null)
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null)

    const handleAddToCart = () => {
        addItem({
            ...product,
            quantity,
            selectedColor,
            selectedSize,
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center text-sm mb-8">
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                    Home
                </Link>
                <FiChevronRight className="mx-2 text-gray-500" />
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                    {product.category}
                </Link>
                <FiChevronRight className="mx-2 text-gray-500" />
                <span className="text-gray-900 font-medium">{product.name}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Product Images */}
                <div>
                    <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={product.images ? product.images[selectedImage] : product.image}
                            alt={product.name}
                            className="w-full h-96 object-contain"
                        />
                    </div>

                    {product.images && product.images.length > 1 && (
                        <div className="grid grid-cols-5 gap-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`bg-gray-100 rounded-md overflow-hidden border-2 ${
                                        selectedImage === index ? "border-primary" : "border-transparent"
                                    }`}
                                >
                                    <img
                                        src={image || "/placeholder.svg"}
                                        alt={`${product.name} - Image ${index + 1}`}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                    <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                            {[...Array(5)].map((_, i) => (
                                <FiStar
                                    key={i}
                                    className={`w-5 h-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-600">{product.reviewCount} reviews</span>
                    </div>

                    <div className="mb-6">
                        {product.discount > 0 ? (
                            <div className="flex items-center">
                <span className="text-3xl font-bold mr-3">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                                <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                                <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  {product.discount}% OFF
                </span>
                            </div>
                        ) : (
                            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700">{product.description}</p>
                    </div>

                    {product.colors && (
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                            <div className="flex space-x-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 ${
                                            selectedColor === color ? "border-gray-900" : "border-gray-200"
                                        }`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        aria-label={`Color: ${color}`}
                                    >
                                        {selectedColor === color && <FiCheck className="w-5 h-5 mx-auto text-white" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.sizes && (
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">
                                    Size Guide
                                </a>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-2 border rounded-md text-center ${
                                            selectedSize === size
                                                ? "border-primary bg-primary text-white"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                        <div className="flex items-center border border-gray-300 rounded-md w-32">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-3 py-2 text-gray-600 hover:text-primary"
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span className="flex-1 text-center py-2">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-3 py-2 text-gray-600 hover:text-primary"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
                        >
                            <FiShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                        <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-md font-medium flex items-center justify-center">
                            <FiHeart className="mr-2" />
                            Add to Wishlist
                        </button>
                    </div>

                    <div className="border-t pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-start">
                                <FiTruck className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                                <div>
                                    <h4 className="font-medium text-gray-900">Free Shipping</h4>
                                    <p className="text-sm text-gray-500">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiRefreshCw className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                                <div>
                                    <h4 className="font-medium text-gray-900">Easy Returns</h4>
                                    <p className="text-sm text-gray-500">30 day return policy</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiShield className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                                <div>
                                    <h4 className="font-medium text-gray-900">Secure Checkout</h4>
                                    <p className="text-sm text-gray-500">100% protected payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <a href="#" className="border-b-2 border-primary py-4 px-1 text-sm font-medium text-primary">
                            Description
                        </a>
                        <a
                            href="#"
                            className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        >
                            Specifications
                        </a>
                        <a
                            href="#"
                            className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        >
                            Reviews ({product.reviewCount})
                        </a>
                    </nav>
                </div>

                <div className="py-6">
                    <h3 className="text-lg font-medium mb-4">Product Description</h3>
                    <div className="prose max-w-none">
                        <p>
                            {product.longDescription ||
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.`}
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <ul>
                            <li>Premium quality materials</li>
                            <li>Durable and long-lasting</li>
                            <li>Comfortable fit</li>
                            <li>Versatile design</li>
                            <li>Easy to maintain</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products
                        .filter((p) => p.id !== product.id && p.category === product.category)
                        .slice(0, 4)
                        .map((relatedProduct) => (
                            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Link to={`/product/${relatedProduct.id}`}>
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={relatedProduct.image || "/placeholder.svg"}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <Link to={`/product/${relatedProduct.id}`}>
                                        <h3 className="font-medium text-gray-900 mb-1 hover:text-primary transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-500 text-sm mb-2">{relatedProduct.category}</p>
                                    <div className="flex items-center justify-between">
                                        {relatedProduct.discount > 0 ? (
                                            <div className="flex items-center">
                        <span className="font-bold text-gray-900">
                          ${(relatedProduct.price * (1 - relatedProduct.discount / 100)).toFixed(2)}
                        </span>
                                                <span className="text-gray-500 text-sm line-through ml-2">
                          ${relatedProduct.price.toFixed(2)}
                        </span>
                                            </div>
                                        ) : (
                                            <span className="font-bold text-gray-900">${relatedProduct.price.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

