import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
              <span className="text-xl font-semibold text-white">MS</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              MERN Store
            </h1>
            <p className="text-lg text-gray-600">
              Your premium shopping destination
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Get Started</h2>
            <Link 
              to="/products"
              className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 focus:from-purple-700 focus:to-blue-700 active:from-purple-800 active:to-blue-800 transition-all duration-300 hover:scale-105 shadow-xl text-center"
            >
              Explore Products
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Why Choose Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">Free Shipping Worldwide</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">100% Secure Payments</p>
    </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-700">Premium Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}