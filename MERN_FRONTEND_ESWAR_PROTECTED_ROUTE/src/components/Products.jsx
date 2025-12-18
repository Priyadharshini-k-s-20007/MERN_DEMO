import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/sleepingproduct`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const res = await fetch(`${API}/deleteProduct/${id}`, { method: "DELETE" });

    if (res.ok) {
      setProducts(products.filter(p => p._id !== id));
      alert("Product deleted successfully");
    } else {
      const err = await res.json();
      alert(`Error: ${err.message}`);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-slate-800 mb-8 tracking-tight">Premium Collection</h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Handpicked products designed for excellence and crafted with precision
          </p>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-32 h-32 mx-auto mb-12 bg-slate-200 rounded-3xl flex items-center justify-center">
              <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-700 mb-6">No products available</h3>
            <p className="text-xl text-slate-500">New arrivals coming soon</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {products.map(p => (
              <div key={p._id} className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-slate-200 hover:border-slate-300 overflow-hidden transform hover:-translate-y-4">
                <div className="relative overflow-hidden bg-slate-50 h-80">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button 
                    onClick={() => deleteProduct(p._id)}
                    className="absolute top-6 right-6 p-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="font-black text-2xl text-slate-900 mb-4 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-black text-emerald-600">
                      ₹{p.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => addToCart(p)}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
                      </svg>
                      Add to Cart
                    </button>
                    <Link 
                      to={`/product/${p._id}`}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}