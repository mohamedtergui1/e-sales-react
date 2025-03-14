import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ProductDetail from "./pages/product/ProductDetail"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Wishlist from "./pages/Wishlist"
import OrderSuccess from "./pages/checkout/OrderSuccess"

function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  )
}

export default App

