

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";   // ✅ HIGHLIGHT: Import lucide-react icons
import logo from "../assets/logo1.jpg";

const Navbar = ({ cartItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 md:px-0 md:py-0 ${
      location.pathname === path
        ? "text-green-700 font-semibold" 
        : "text-gray-700 hover:text-green-700"   
    }`;

  return (
    <>
<nav className="bg-white shadow-lg sticky top-0 z-40">
  <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src={logo} alt="Vedique" className="w-10 h-10 rounded-full " />
      <span  className="text-[#21771A] font-bold text-xl tracking-wide">Vedique</span>
    </div>

    {/* Desktop links */}
    <div  className="hidden md:flex items-center gap-6 text-gray-700 text-sm">
      <Link to="/" className="hover:text-[#C9A66B] font-semibold transition">Home</Link>
      <Link to="/shop" className="hover:text-[#C9A66B] font-semibold transition">Shop</Link>
      <Link to="/stores" className="hover:text-[#C9A66B] font-semibold transition">Our Stores</Link>
      <Link to="/contact" className="hover:text-[#C9A66B] font-semibold transition">Contact</Link>
      <Link to="/about" className="hover:text-[#C9A66B] font-semibold transition">About</Link>
    </div>

    {/* Cart + Login + Mobile */}
    <div className="flex items-center gap-3">
      <Link to="/cart" className="relative text-gray-700 hover:text-green-700 transition">
        Cart
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
            {cartItems.length}
          </span>
        )}
      </Link>
 <button className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition">
  Login
</button>
      <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-white py-2 space-y-2 shadow">
       <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 px-4 py-1 hover:text-green-700">Home</Link> 
      <Link to="/shop" onClick={() => setIsOpen(false)} className="block text-gray-700 px-4 py-1 hover:text-green-700">Shop</Link>
      <Link to="/stores" onClick={() => setIsOpen(false)} className="block text-gray-700 px-4 py-1 hover:text-green-700">Our Stores</Link>
      <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 px-4 py-1 hover:text-green-700">Contact</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 px-4 py-1 hover:text-green-700">About</Link>
    </div>
  )}
</nav>

    </>
  )
}

export default Navbar
