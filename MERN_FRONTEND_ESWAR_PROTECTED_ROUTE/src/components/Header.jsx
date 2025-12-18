import { Link } from "react-router-dom";

export default function Header({ cart, logout }) {
  return (
    <header className="bg-gradient-to-r from-slate-100 to-gray-200 shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              MERN Store
            </h1>
          </Link>
          
          <div className="absolute top-4 right-4">
            <nav className="flex items-center space-x-20">
              <Link 
                to="/products" 
                className="bg-blue-100 text-blue-700 px-10 py-5 rounded-lg hover:bg-blue-200 transition-colors font-medium shadow-sm text-xl"
              >
                Products
              </Link>
              
              <Link 
                to="/cart" 
                className="bg-green-100 text-green-700 px-10 py-5 rounded-lg hover:bg-green-200 transition-colors font-medium shadow-sm flex items-center space-x-2 text-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
                </svg>
                <span>Cart ({cart.length})</span>
              </Link>
              
              <Link 
                to="/addproduct" 
                className="bg-purple-100 text-purple-700 px-10 py-5 rounded-lg hover:bg-purple-200 transition-colors font-medium shadow-sm text-xl"
              >
                Add Product
              </Link>
              
              {localStorage.getItem("user") ? (
                <button 
                  onClick={logout}
                  className="bg-red-100 text-red-700 px-10 py-5 rounded-lg hover:bg-red-200 transition-colors font-medium shadow-sm text-xl"
                >
                  Logout
                </button>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-orange-100 text-orange-700 px-10 py-5 rounded-lg hover:bg-orange-200 transition-colors font-medium shadow-sm text-xl"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}