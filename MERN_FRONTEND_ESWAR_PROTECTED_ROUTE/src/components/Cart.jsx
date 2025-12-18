import { Link } from "react-router-dom";

export default function Cart({ cart,setCart }) {
    const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div className="min-h-screen flex justify-center items-start pt-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <span className="text-lg text-gray-600">{cart.length} items</span>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some products to get started!</p>
            <Link to="/products" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item._id} className="flex items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600 mb-2">₹{item.price}</p>
                  <button 
                    onClick={() => removeItem(item._id)}
                    className="bg-red-100 text-red-700 px-6 py-3 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium border border-red-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-blue-600">₹{totalPrice}</span>
              </div>
              
              <div className="flex space-x-4">
                <Link to="/products" className="flex-1 bg-blue-100 text-blue-700 py-4 px-6 rounded-lg hover:bg-blue-200 transition-colors font-medium text-center border border-blue-200">
                  Continue Shopping
                </Link>
                <button className="flex-1 bg-green-100 text-green-700 py-4 px-6 rounded-lg hover:bg-green-200 transition-colors font-medium border border-green-200">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
