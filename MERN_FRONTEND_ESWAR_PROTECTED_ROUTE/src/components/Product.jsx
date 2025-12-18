import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API } from '../utils/api';

export default function Product({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/sleepingproduct`)
      .then(res => res.json())
      .then(allproducts => {
        const foundProduct = allproducts.find((p) => p._id === id);
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert('Product added to cart!');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-blue-500 hover:underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-6">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium Quality Materials
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Fast & Free Shipping
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1 Year Warranty
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                24/7 Customer Support
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-100 text-blue-700 py-5 px-8 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center font-medium text-lg shadow-sm border border-blue-200"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
              </svg>
              Add to Cart
            </button>
            
            <Link 
              to={`/buynow/${product._id}`}
              className="w-full bg-orange-100 text-orange-700 py-5 px-8 rounded-lg hover:bg-orange-200 transition-colors text-center block font-medium text-lg shadow-sm border border-orange-200"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
