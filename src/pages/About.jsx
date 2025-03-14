import { Link } from "react-router-dom"
import { FiUsers, FiTarget, FiAward, FiTruck } from "react-icons/fi"

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">About E-Sales</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're on a mission to provide high-quality products at affordable prices with exceptional customer service.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-gray-700 mb-4">
                        Founded in 2015, E-Sales began with a simple idea: to create an online shopping experience that truly puts
                        customers first. What started as a small operation in a garage has grown into a thriving e-commerce platform
                        serving thousands of customers worldwide.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our founder, Jane Smith, recognized a gap in the market for an online retailer that combined quality
                        products, competitive prices, and exceptional customer service. Drawing on her background in retail and
                        technology, she built E-Sales from the ground up with these principles at its core.
                    </p>
                    <p className="text-gray-700">
                        Today, we offer thousands of products across multiple categories, but our commitment to our founding
                        principles remains unchanged. Every decision we make is guided by our desire to create the best possible
                        experience for our customers.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://via.placeholder.com/600x400?text=Our+Story"
                        alt="Our Story"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
                            <FiUsers className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Customer First</h3>
                        <p className="text-gray-600">
                            We prioritize our customers' needs in everything we do, from product selection to after-sales support.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
                            <FiTarget className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Quality Focus</h3>
                        <p className="text-gray-600">
                            We carefully curate our product selection to ensure we offer only high-quality items that meet our
                            standards.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
                            <FiAward className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Integrity</h3>
                        <p className="text-gray-600">
                            We operate with honesty and transparency in all our business practices and communications.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
                            <FiTruck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Reliability</h3>
                        <p className="text-gray-600">
                            We strive to provide consistent, dependable service that our customers can count on every time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Jane Smith", role: "Founder & CEO", image: "https://via.placeholder.com/300x300?text=Jane" },
                        { name: "John Doe", role: "CTO", image: "https://via.placeholder.com/300x300?text=John" },
                        {
                            name: "Sarah Johnson",
                            role: "Head of Operations",
                            image: "https://via.placeholder.com/300x300?text=Sarah",
                        },
                        {
                            name: "Michael Brown",
                            role: "Marketing Director",
                            image: "https://via.placeholder.com/300x300?text=Michael",
                        },
                        {
                            name: "Emily Davis",
                            role: "Customer Service Manager",
                            image: "https://via.placeholder.com/300x300?text=Emily",
                        },
                        { name: "David Wilson", role: "Product Manager", image: "https://via.placeholder.com/300x300?text=David" },
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    We're constantly growing and looking for passionate individuals to join our team. Check out our current
                    openings or shop our latest products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                        View Careers
                    </a>
                    <Link
                        to="/"
                        className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About

