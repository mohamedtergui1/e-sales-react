"use client"

import { useState } from "react"
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Form submitted:", formData)

        setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message! We will get back to you soon.",
        })

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Have questions or feedback? We'd love to hear from you. Our team is always here to help.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <FiMapPin className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Our Location</h3>
                    </div>
                    <p className="text-gray-600 ml-16">
                        123 E-Commerce Street
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <FiPhone className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Phone Number</h3>
                    </div>
                    <p className="text-gray-600 ml-16">
                        Customer Service: +1 (800) 123-4567
                        <br />
                        Support: +1 (800) 765-4321
                        <br />
                        <span className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</span>
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <FiMail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Email Address</h3>
                    </div>
                    <p className="text-gray-600 ml-16">
                        Customer Support: support@esales.com
                        <br />
                        General Inquiries: info@esales.com
                        <br />
                        <span className="text-sm text-gray-500">We respond within 24 hours</span>
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                    {formStatus.submitted && (
                        <div
                            className={`mb-6 p-4 rounded-md ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                        >
                            {formStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md font-medium inline-flex items-center"
                        >
                            <FiSend className="mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6">Our Hours</h2>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <div className="flex items-center mb-4">
                            <FiClock className="w-6 h-6 text-primary mr-3" />
                            <h3 className="text-xl font-bold">Business Hours</h3>
                        </div>

                        <ul className="space-y-3 text-gray-600">
                            <li className="flex justify-between">
                                <span>Monday - Friday:</span>
                                <span className="font-medium">9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday:</span>
                                <span className="font-medium">10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday:</span>
                                <span className="font-medium">Closed</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Find Us</h3>
                        <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">

                            <img
                                src="https://via.placeholder.com/600x400?text=Map"
                                alt="Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

