import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Checkout from "./components/Checkout"; 
import Footer from "./components/Footer";
import AgeModal from "./components/AgeModal";
import Reviews from "./components/Reviews";

// Pages
import Shop from "./pages/Shop";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart"; 
import About from "./pages/About";

//images
import heroVideo from "./assets/main.mp4";
import hero1 from "./assets/hero-1.jpg";
import hero2 from "./assets/hero-2.jpg";
import hero3 from "./assets/hero-3.jpg";

//product images
import product1 from "./assets/vedique1.jpg";
import product2 from "./assets/vedique2.jpg";
import product3 from "./assets/vedique3.jpg";
import product4 from "./assets/product-4.jpg";
import product5 from "./assets/tea.jpg";
import product6 from "./assets/capsule.jpg";
import product7 from "./assets/product-7.jpg";
import product8 from "./assets/product-8.jpg";




const HERO_VIDEO = heroVideo;
const HERO_IMAGES = [hero1, hero2, hero3];

const productImages = [product1, product2, product3, product4, product5, product6, product7, product8];

const productNames = [
  "Premium Wellness Box",
  "Wellness Herbal Sachets",
  "Healing Herbal Cream",
  "Hair Oil",
  "Hair Powder",
  "Hair Mask",
  "Hair Pills",
  "Scalp Treatment"
];

const productCategories = [
  "Premium Wellness Box", "Wellness Herbal Sachets ", "Healing Herbal Cream", "Hair Oil",
  "Hair Powder", "Hair Mask", "Hair Pills", "Scalp Treatment"
];

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: productNames[i],
  price: (249 + i * 50).toFixed(0),
  img: productImages[i % productImages.length],
  rating: Math.floor(Math.random() * 5) + 1,
  category: productCategories[i],
  description: [
    "A premium box of curated herbal wellness products.",
    "Herbal sachets for natural healing and wellness.",
    "Healing cream made with natural herbs for skin care.",
    "Pure herbal hair oil for strong and shiny hair.",
    "Nourishing hair powder for scalp health.",
    "Herbal hair mask for deep conditioning.",
    "Natural capsules for hair growth support.",
    "Scalp treatment blend for healthy roots."
  ][i],
}));

function App() {
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [acceptedAge, setAcceptedAge] = useState(() => localStorage.getItem("acceptedAge") === "true");
  const [heroIndex, setHeroIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {  
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(productId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  useEffect(() => {
    if (!acceptedAge) setShowAgeModal(true);
  }, [acceptedAge]);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  function acceptAge() {
    localStorage.setItem("acceptedAge", "true");
    setAcceptedAge(true);
    setShowAgeModal(false);
  }

  function declineAge() {
    alert("You must be 18+ to view this site.");
  }

  return (
    <>
     <div className="flex flex-col min-h-screen bg-[#DAECD5] text-gray-800 font-sans">
        <Navbar cartItems={cartItems}/>
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero videoSrc={HERO_VIDEO} fallbackImages={HERO_IMAGES} index={heroIndex} />
                  <section className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Shop by categories</h2> {/* ✅ Updated text color */}
                  
                    <ProductGrid products={products.slice(0, 4)} addToCart={addToCart} />

                    <div className="text-center mt-8">
                      <a
                        href="/shop"
                        className="bg-[#21771A] text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
                      >
                        View All Products
                      </a>
                    </div>
                  </section>
                  <Reviews/>
                </>
              }
            />
            {/* Other Pages */}
            <Route path="/shop" element={<Shop products={products} addToCart={addToCart}/>} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            } />
            <Route path="/checkout" element={<Checkout clearCart={() => setCartItems([])} />} />
            <Route path="/about" element={<About />} />  
          </Routes>
        </main>
        <Footer /> {/* ✅ Footer bg remains white with green accents for consistency */}
        <AnimatePresence>
          {showAgeModal && <AgeModal onAccept={acceptAge} onDecline={declineAge} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
