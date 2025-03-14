import { Link } from "react-router-dom"
import { FiCheckCircle, FiArrowRight } from "react-icons/fi"

const OrderSuccess = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-lg mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <FiCheckCircle className="w-24 h-24 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been received and is being processed. You will receive an email
                    confirmation shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                    <h2 className="text-lg font-medium mb-4">Order Details</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Order Number:</span>
                            <span className="font-medium">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Payment Method:</span>
                            <span className="font-medium">Credit Card</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Shipping Method:</span>
                            <span className="font-medium">Standard Shipping</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md font-medium inline-flex items-center justify-center"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        to="/"
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-md font-medium inline-flex items-center justify-center"
                    >
                        Track Order <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess

