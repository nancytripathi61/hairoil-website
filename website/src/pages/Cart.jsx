import React from 'react'
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {

  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );


  const handleBuyNow = () => {
    if(cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };


  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>

      
      {cartItems.length === 0 ? (   
        <div className="text-center">
    <p className="text-gray-700 mb-4">Your cart is empty.</p>
    <button
      onClick={() => navigate("/shop")}
      className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
    >
      Continue Shopping
    </button>
  </div>
        
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (   
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 mx-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p>₹{item.price}</p>
                
             
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={() => decreaseQuantity(item.id)} 
                    className="px-2 py-1 bg-gray-300 rounded"
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => increaseQuantity(item.id)} 
                    className="px-2 py-1 bg-gray-300 rounded"
                  >+</button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Total: ₹{totalPrice.toFixed(0)}
          </div>

          <div className="text-right mt-4">
              <button
                onClick={handleBuyNow}
                className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
              >
                Buy Now
              </button>
            </div>

        </div>
      )}
    </div>
    </>
  )
}

export default Cart
