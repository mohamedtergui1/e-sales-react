"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiChevronRight, FiCreditCard, FiLock } from "react-icons/fi"
import { useCart } from "../../context/CartContext"

const Checkout = () => {
    const { items, totalItems, totalPrice, clearCart } = useCart()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "US",
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    })

    const [step, setStep] = useState(1)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Order submitted:", { items, totalPrice, shippingInfo: formData })

        clearCart()
        navigate("/order-success")
    }

    if (items.length === 0) {
        navigate("/cart")
        return null
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                    Home
                </Link>
                <FiChevronRight className="mx-2 text-gray-500" />
                <Link to="/cart" className="text-gray-500 hover:text-gray-700">
                    Cart
                </Link>
                <FiChevronRight className="mx-2 text-gray-500" />
                <span className="text-gray-900 font-medium">Checkout</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold">Checkout</h2>
                        </div>

                        <div className="p-6">
                            <div className="flex mb-8">
                                <div
                                    className={`flex-1 text-center pb-4 border-b-2 ${
                                        step >= 1 ? "border-primary text-primary font-medium" : "border-gray-200"
                                    }`}
                                >
                                    1. Shipping
                                </div>
                                <div
                                    className={`flex-1 text-center pb-4 border-b-2 ${
                                        step >= 2 ? "border-primary text-primary font-medium" : "border-gray-200"
                                    }`}
                                >
                                    2. Payment
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <h3 className="text-lg font-medium">Shipping Information</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                                    ZIP / Postal Code
                                                </label>
                                                <input
                                                    type="text"
                                                    id="zipCode"
                                                    name="zipCode"
                                                    value={formData.zipCode}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                >
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="UK">United Kingdom</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => setStep(2)}
                                                className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md font-medium"
                                            >
                                                Continue to Payment
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <h3 className="text-lg font-medium">Payment Information</h3>

                                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <FiLock className="mr-2" />
                                                Your payment information is secure and encrypted
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6" />
                                                <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6" />
                                                <img src="https://via.placeholder.com/40x25?text=Amex" alt="American Express" className="h-6" />
                                                <img src="https://via.placeholder.com/40x25?text=Disc" alt="Discover" className="h-6" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Name on Card
                                                </label>
                                                <input
                                                    type="text"
                                                    id="cardName"
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div className="md:col-span-2 relative">
                                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Card Number
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="cardNumber"
                                                        name="cardNumber"
                                                        value={formData.cardNumber}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="1234 5678 9012 3456"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-primary focus:border-primary"
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                        <FiCreditCard className="text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Expiry Date
                                                </label>
                                                <input
                                                    type="text"
                                                    id="expiryDate"
                                                    name="expiryDate"
                                                    value={formData.expiryDate}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="MM/YY"
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    id="cvv"
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="123"
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="text-gray-600 hover:text-gray-900 font-medium"
                                            >
                                                Back to Shipping
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md font-medium"
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Items ({totalItems}):</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Shipping:</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Tax:</span>
                                <span>${(totalPrice * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                                <span>Order Total:</span>
                                <span>${(totalPrice * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-medium mb-4">Order Items</h3>
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li key={item.id} className="flex">
                                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-sm font-medium text-gray-900">
                                                <h4>{item.name}</h4>
                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout

