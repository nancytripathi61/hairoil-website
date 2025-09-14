import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#E0F0E9] text-[#3A2E2B] py-8 mt-auto shadow-inner">  
      
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg">Vedique</h4>
            <p className="mt-2 text-sm">Natural products for hair, skin and smile.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 text-sm space-y-1">
              <li className="hover:text-green-600 transition">About</li>  
              <li className="hover:text-green-600 transition">Contact</li>
              <li className="hover:text-green-600 transition">Privacy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="mt-2 text-sm">dnglobaldirect@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
