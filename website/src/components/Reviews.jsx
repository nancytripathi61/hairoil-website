import React from 'react'
import { Star } from "lucide-react"; 
import review1 from "../assets/review-1.mp4";
import review2 from "../assets/review-2.mp4";
import review3 from "../assets/review-3.mp4";
import review4 from "../assets/review-4.mp4";



const reviews = [
  {
    id: 1,
    name: "Anjali Sharma",
    video: review4, 
    rating: 5,
    feedback: "This oil has completely transformed my hair! Highly recommended.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    video: review2,
    rating: 4,
    feedback: "Great product, my hair feels softer and stronger.",
  },
  {
    id: 3,
    name: "Priya Singh",
    video: review3,
    rating: 5,
    feedback: "Absolutely loved it! Smells amazing and works wonders.",
  },
];

const Reviews = () => {
  return (
     <>
        <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
                className="bg-[#CFE8D2] shadow-lg rounded-2xl overflow-hidden p-4 hover:shadow-xl transition"
            >
              {/* Video Review */}
              <video
                src={review.video}
                controls
                className="w-full h-56 rounded-lg mb-4 object-cover"
              ></video>

              {/* Customer Info */}
              <h3 className="text-lg font-semibold">{review.name}</h3>

              {/* Rating */}
              <div className="flex justify-center mt-2 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              {/* Feedback */}
               <p className="text-gray-800 italic">"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     </>
  )
}

export default Reviews
