import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProducts from "./components/AddProducts";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [cart, setCart] = useState([]);
   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header cart={cart} logout={logout} />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart}/>}/>
          <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart}/>
            </ProtectedRoute>
          } />
          <Route path="/buynow/:id" element={
            <ProtectedRoute>
              <BuyNow />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProducts/>}/>
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App