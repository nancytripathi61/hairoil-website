import React from 'react'
import { motion } from "framer-motion";

const StoresSection = () => {

  const stores = [
    { city: "Porbandar", phone: "+91 72729 39314" },
    { city: "Ahmedabad", phone: "+91 94594 60202" },
    { city: "Junagadh", phone: "+91 94594 60404" },
  ];

  return (
     <>
      <section className="bg-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Visit our stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 border rounded">
              <h3 className="font-bold text-lg">{s.city}</h3>
              <p className="mt-2 text-sm">Call: {s.phone}</p>
              <button className="mt-4 inline-block border px-3 py-1 rounded">View Store</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
         
     </>
  )
}

export default StoresSection
