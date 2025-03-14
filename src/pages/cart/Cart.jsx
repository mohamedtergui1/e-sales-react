"use client"
import { Link } from "react-router-dom"
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from "react-icons/fi"
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const { items, totalItems, totalPrice, addItem, removeItem, clearCart } = useCart()

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <FiShoppingBag className="w-24 h-24 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
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
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">
                                    {totalItems} {totalItems === 1 ? "Item" : "Items"}
                                </h2>
                                <button
                                    onClick={clearCart}
                                    className="text-red-500 hover:text-red-700 flex items-center text-sm font-medium"
                                >
                                    <FiTrash2 className="mr-1" />
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        <ul className="divide-y divide-gray-200">
                            {items.map((item) => (
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
                                            <p className="text-lg font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <p className="text-gray-500 mb-4">{item.category}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    onClick={() => removeItem(item)}
                                                    className="p-2 text-gray-600 hover:text-primary"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FiMinus className="w-4 h-4" />
                                                </button>
                                                <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                                                <button
                                                    onClick={() => addItem(item)}
                                                    className="p-2 text-gray-600 hover:text-primary"
                                                    aria-label="Increase quantity"
                                                >
                                                    <FiPlus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    // Remove all of this item
                                                    for (let i = 0; i < item.quantity; i++) {
                                                        removeItem(item)
                                                    }
                                                }}
                                                className="text-gray-500 hover:text-red-500"
                                                aria-label="Remove item"
                                            >
                                                <FiTrash2 className="w-5 h-5" />
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

                <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">$0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span className="font-bold text-xl">${(totalPrice * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                to="/checkout"
                                className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md font-medium flex items-center justify-center"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

