import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
            <p className="text-gray-600 text-center max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
                <FiArrowLeft className="mr-2" />
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound

