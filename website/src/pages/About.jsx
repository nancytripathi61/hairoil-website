// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-[#21771A]">About Vedique</h2>

      <p className="mb-4">
        At <span className="font-semibold">Vedique</span>, we believe in the
        power of nature to heal, protect, and rejuvenate. Our journey started
        with a mission to bring ancient Ayurvedic wisdom into modern living.
      </p>

      <p className="mb-4">
        Every product we craft is made with natural ingredients, free from
        harmful chemicals, and carefully tested to ensure premium quality. From
        hair care to wellness solutions, we are dedicated to building a
        healthier tomorrow.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Our Journey</h3>
      <p className="mb-4">
        What started as a small herbal remedy initiative has now grown into a
        trusted wellness brand loved by thousands of customers. Guided by
        Ayurveda and inspired by nature, we continue to innovate while staying
        true to our roots.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Our Promise</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>🌱 100% natural & chemical-free</li>
        <li>✨ Cruelty-free & eco-friendly</li>
        <li>💚 Inspired by Ayurveda</li>
        <li>🌍 Sustainable packaging</li>
      </ul>
    </section>
  );
};

export default About;
