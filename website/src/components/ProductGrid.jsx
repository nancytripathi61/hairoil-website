import React from 'react'
import { motion } from "framer-motion";

const ProductGrid = ({ products = [] , addToCart }) => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <motion.article whileHover={{ scale: 1.03 }} key={p.id} className="bg-white rounded-lg p-4 shadow">
<div className="h-40 mb-3 bg-[#E6F0E4] rounded overflow-hidden">
  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
</div>
          <h3 className="font-medium">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-600">Small description about the product.</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="font-bold text-[#21771A] text-[20px]">₹{p.price}</div>
            <button className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition" onClick={() => addToCart(p)}>Add</button>
          </div>
        </motion.article>
      ))}
    </div>      
    </>
  )
}

export default ProductGrid
