// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import review1 from "../assets/review-1.mp4";
// import review2 from "../assets/review-2.mp4";
// import review3 from "../assets/review-3.mp4";
// import review4 from "../assets/review-4.mp4";

// const customerReviews = [
//   { productId: 1, video:review1 },
//   { productId: 2, video: review2 },
//   { productId: 3, video: review3},
//   { productId: 4, video:review4 },
// ];


// const Shop = ({ products, addToCart }) => {
//    const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [toast, setToast] = useState(null);
//   const [hoverVideo, setHoverVideo] = useState(null);

  
//   const categories = ["all", "Hair Oil", "Hair Pills", "Cream"];


//   const filteredProducts = products.filter((p) => {
//       const query = search.trim().toLowerCase(); 
//       const matchesSearch =
//         p.title.toLowerCase().includes(query) ||
//         p.category.toLowerCase().includes(query);  

//       const matchesCategory =
//         category === "all" || p.category.toLowerCase().includes(category.toLowerCase());  
//         return matchesSearch && matchesCategory;
//       });


//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setToast(`${product.title} added to cart!`);
//     setTimeout(() => setToast(null), 2000);
//   };

//   const getReviewVideo = (productId) => {
//     const review = customerReviews.find((r) => r.productId === productId);
//     return review ? review.video : null;
//   };

//   return (
//      <>
//           <section className="max-w-6xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-semibold mb-6">Shop Products</h2>

    
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border p-2 rounded w-full md:w-1/2"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border p-2 rounded w-full md:w-1/4"
//         >
//           {categories.map((c) => (
//             <option key={c} value={c}>{c}</option>
//           ))}
//         </select>
//       </div>

   
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {filteredProducts.map((p) => (
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             key={p.id}
//             className="bg-white rounded-lg p-4 shadow relative overflow-hidden"
//             onMouseEnter={() => setHoverVideo(getReviewVideo(p.id))}
//             onMouseLeave={() => setHoverVideo(null)}
//           >
//             <div className="h-40 mb-3 bg-gray-100 rounded overflow-hidden relative">
//               <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
//               {hoverVideo && getReviewVideo(p.id) && (
//                 <video
//                   src={getReviewVideo(p.id)}
//                   autoPlay
//                   loop
//                   muted
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               )}
//             </div>
//             <h3 className="font-medium">{p.title}</h3>

      
//             <div className="flex mt-1 text-yellow-400">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i}>{i < p.rating ? "★" : "☆"}</span>
//               ))}
//             </div>

//             <p className="mt-2 text-sm text-gray-600">{p.description}</p>
//             <div className="mt-3 flex items-center justify-between">
//               <div className="font-bold text-[#21771A] text-[20px]">₹{p.price}</div>
//               <button
//                 onClick={() => handleAddToCart(p)}
//                 className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
//               >
//                 Add
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

      
//       {toast && (
//         <div className="fixed bottom-4 right-4 bg-[#21771A] text-white px-4 py-2 rounded shadow-lg">
//           {toast}
//         </div>
//       )}
//     </section>
//      </>
//   )
// }

// export default Shop


import React, { useState } from "react";
import { motion } from "framer-motion";
import review1 from "../assets/review-1.mp4";
import review2 from "../assets/review-2.mp4";
import review3 from "../assets/review-3.mp4";
import review4 from "../assets/review-4.mp4";

const customerReviews = [
  { productId: 1, video: review1 },
  { productId: 2, video: review2 },
  { productId: 3, video: review3 },
  { productId: 4, video: review4 },
];

const Shop = ({ products, cartItems, addToCart, increaseQuantity, decreaseQuantity }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [hoverVideo, setHoverVideo] = useState(null);

  const categories = ["all", "Hair Oil", "Hair Pills", "Cream"];

  const filteredProducts = products.filter((p) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const matchesCategory =
      category === "all" || p.category.toLowerCase().includes(category.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const getQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const getReviewVideo = (productId) => {
    const review = customerReviews.find((r) => r.productId === productId);
    return review ? review.video : null;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6">Shop Products</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={p.id}
            className="bg-white rounded-lg p-4 shadow relative overflow-hidden"
            onMouseEnter={() => setHoverVideo(getReviewVideo(p.id))}
            onMouseLeave={() => setHoverVideo(null)}
          >
            <div className="h-40 mb-3 bg-gray-100 rounded overflow-hidden relative">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              {hoverVideo && getReviewVideo(p.id) && (
                <video
                  src={getReviewVideo(p.id)}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>

            <h3 className="font-medium">{p.title}</h3>
            <div className="flex mt-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < p.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>

            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold text-[#21771A] text-[20px]">₹{p.price}</div>

              {/* Quantity Controls */}
              {getQuantity(p.id) > 0 ? (
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold hover:bg-red-600"
                    onClick={() => decreaseQuantity(p.id)}
                  >
                    -
                  </button>
                  <span className="font-semibold">{getQuantity(p.id)}</span>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-green-700"
                    onClick={() => increaseQuantity(p.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
                  onClick={() => addToCart(p)}
                >
                  Add
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
