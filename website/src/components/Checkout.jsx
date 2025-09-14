// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Checkout = ({ cartItems = [], clearCart }) => {  
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [orderNo, setOrderNo] = useState(null);
//   const [orderCartItems, setOrderCartItems] = useState([]);
//   const [orderTotalPrice, setOrderTotalPrice] = useState(0);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );  

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = () => {
//     if (!form.name || !form.address || !form.city || !form.pincode) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const generatedOrderNo = Math.floor(100000 + Math.random() * 900000);
//     setOrderNo(generatedOrderNo);
//         setOrderCartItems(cartItems);
//     setOrderTotalPrice(totalPrice);
//     setOrderPlaced(true);
    
//     clearCart();  
//   };

//   const handleGoHome = () => {
//     navigate("/");
//   };

//   if (orderPlaced) {
//     return (
//       <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow text-center">
//         <h2 className="text-2xl font-bold mb-4">Thank You! 🎉</h2>
//         <p>Your order has been successfully placed.</p>
//         <p>Order No.: <strong>#{orderNo}</strong></p>
//         <p>Total Items: {orderCartItems}</p>
//         <p>Total Price: ₹{totalPrice.toFixed(0)}</p>
//         <p>Estimated Delivery: {new Date(new Date().setDate(new Date().getDate() + 5)).toDateString()}</p>

//         <button
//           onClick={handleGoHome}
//           className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Go to Home Page
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={form.city}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           value={form.pincode}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />

//         <button
//           onClick={handlePlaceOrder}
//           className="w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = ({ clearCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get cartItems and totalPrice from navigation state
  const { cartItems = [], totalPrice = 0 } = location.state || {};

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNo, setOrderNo] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.city || !form.pincode) {
      alert("Please fill all fields!");
      return;
    }

    const generatedOrderNo = Math.floor(100000 + Math.random() * 900000);
    setOrderNo(generatedOrderNo);
    setOrderPlaced(true);

    clearCart(); // Clear the cart after placing order
  };

  if (orderPlaced) {
    // ✅ Calculate total items
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You! 🎉</h2>
        <p>Your order has been successfully placed.</p>
        <p>Order No.: <strong>#{orderNo}</strong></p>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ₹{totalPrice.toFixed(0)}</p>
        <p>Estimated Delivery: {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString()}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#21771A] text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Go to Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-[#21771A] text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
