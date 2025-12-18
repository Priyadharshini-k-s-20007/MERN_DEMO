import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              MERN Store
            </h3>
            <p className="text-gray-300">
              Your one-stop destination for amazing products at unbeatable prices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors">Products</Link>
              <Link to="/cart" className="block text-gray-300 hover:text-white transition-colors">Cart</Link>
              <Link to="/login" className="block text-gray-300 hover:text-white transition-colors">Login</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Categories</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Electronics</p>
              <p className="text-gray-300">Gadgets</p>
              <p className="text-gray-300">Accessories</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@mernstore.com</p>
              <p>📞 +91 12345 67890</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MERN Store. Made with ❤️ using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}