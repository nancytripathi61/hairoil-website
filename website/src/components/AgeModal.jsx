import React from 'react'
import { motion } from "framer-motion";

const AgeModal = ({ onAccept, onDecline }) => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 10, scale: 0.98 }} className="bg-white rounded-lg p-6 w-full max-w-md text-center">
        <h3 className="text-xl font-bold">Confirm your age</h3>
        <p className="mt-3 text-sm text-gray-600">Are you 18 years old or older?</p>
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={onDecline} className="px-4 py-2 rounded border">No, I'm not</button>
          <button onClick={onAccept} className="px-4 py-2 rounded bg-green-600 text-white">Yes, I am</button>
        </div>
      </motion.div>
    </motion.div>
        
    </>
  )
}

export default AgeModal
