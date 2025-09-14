import React from 'react'
import { motion } from "framer-motion";
// import stackImg from "../assets/stack-sample.jpg"; 
import { Link } from 'react-router-dom';
const Hero = ({ videoSrc, fallbackImages = [], index = 0 }) => {
    const hasVideo = true; 

  return (
    <>
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {hasVideo ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={videoSrc} autoPlay muted loop playsInline />
      ) : (
        <img className="absolute inset-0 w-full h-full object-cover" src={fallbackImages[index]} alt="hero" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">Natural hair care, crafted with love</h1>
          <p className="mt-4 text-lg opacity-90 text-gray-700">Organic oils, paraben-free formulas, proven results.</p>
          <div className="mt-6 flex gap-3">
            <Link to='/shop' className="bg-gray-700 text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition">Shop Now</Link>
            <Link to='/stores' className="bg-white text-gray-700 px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-green-800 transition">View Stores</Link>
          </div>
        </motion.div>
        {/* <motion.div className="ml-auto hidden md:block w-56 h-56 rounded-lg overflow-hidden shadow-2xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
          <img src={stackImg} alt="stack" className="w-full h-full object-cover" />
        </motion.div> */}
      </div>
    </section>      
    </>
  )
}

export default Hero
