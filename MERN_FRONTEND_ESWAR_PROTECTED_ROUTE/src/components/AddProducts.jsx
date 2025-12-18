import { useState } from "react";
import { API } from "../utils/api";

export default function AddProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/addProduct`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image })
      });

      if (res.ok) {
        alert("Product added successfully!");
        setName(""); setDescription(""); setPrice(0); setImage("");
      } else {
        const err = await res.json();
        alert(`Error: ${err.message}`);
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-3xl border-4 border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-12 py-10">
            <h1 className="text-5xl font-black text-white mb-4">Create New Product</h1>
            <p className="text-blue-100 text-xl font-medium">Add your amazing product to the marketplace</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-12 space-y-10">
            <div>
              <label htmlFor="name" className="block text-2xl font-bold text-slate-800 mb-4">
                Product Name
              </label>
              <input 
                id="name"
                type="text" 
                placeholder="Enter an amazing product name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-8 py-6 border-4 border-slate-300 rounded-2xl focus:ring-8 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all text-xl placeholder-slate-400 font-medium"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-2xl font-bold text-slate-800 mb-4">
                Product Description
              </label>
              <textarea 
                id="description"
                placeholder="Describe what makes this product special and unique" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={6}
                className="w-full px-8 py-6 border-4 border-slate-300 rounded-2xl focus:ring-8 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all resize-none text-xl placeholder-slate-400 font-medium"
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-2xl font-bold text-slate-800 mb-4">
                Price (₹)
              </label>
              <div className="relative">
                <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-slate-600">₹</span>
                <input 
                  id="price"
                  type="number" 
                  placeholder="0.00" 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                  className="w-full pl-16 pr-8 py-6 border-4 border-slate-300 rounded-2xl focus:ring-8 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all text-xl placeholder-slate-400 font-medium"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-2xl font-bold text-slate-800 mb-4">
                Product Image URL
              </label>
              <input 
                id="image"
                type="url" 
                placeholder="https://example.com/amazing-product-image.jpg" 
                value={image} 
                onChange={(e) => setImage(e.target.value)}
                required
                className="w-full px-8 py-6 border-4 border-slate-300 rounded-2xl focus:ring-8 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all text-xl placeholder-slate-400 font-medium"
              />
              {image && (
                <div className="mt-8">
                  <p className="text-xl font-bold text-slate-700 mb-4">Image Preview</p>
                  <div className="w-48 h-48 bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-200 shadow-xl">
                    <img 
                      src={image} 
                      alt="Product preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-slate-400 text-lg font-medium">
                      Invalid image URL
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-8">
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-8 px-12 rounded-3xl font-black text-2xl transition-all duration-300 transform hover:scale-105 shadow-3xl hover:shadow-4xl active:scale-95"
              >
                🚀 Launch Product to Store
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}