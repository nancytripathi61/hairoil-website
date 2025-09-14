import React from 'react'

const store = [
  {
    id: 1,
    name: "Mumbai Flagship Store",
    address: "123 Marine Drive, Mumbai, MH",
    phone: "+91 98765 43210",
    timing: "Mon–Sat: 10:00 AM – 9:00 PM",
  },
  {
    id: 2,
    name: "Delhi Experience Center",
    address: "45 Connaught Place, New Delhi, DL",
    phone: "+91 91234 56789",
    timing: "Mon–Sun: 11:00 AM – 8:00 PM",
  },
  {
    id: 3,
    name: "Bangalore Boutique",
    address: "78 MG Road, Bangalore, KA",
    phone: "+91 99887 66554",
    timing: "Mon–Fri: 10:30 AM – 7:30 PM",
  },
  {
    id: 4,
    name: "Satna Boutique",
    address: "78 GK Road, Satna",
    phone: "+91 99887 00554",
    timing: "Mon–Fri: 10:30 AM – 7:30 PM",
  },
  {
    id: 5,
    name: "Bhopal Plaza",
    address: "19 MP Nagar, Bhopal",
    phone: "+91 98987 66554",
    timing: "Mon–Fri: 10:30 AM – 7:30 PM",
  },
  {
    id: 6,
    name: "Ahmedabad",
    address: "78 MG Road, Ahmedabad, KA",
    phone: "+91 99007 66554",
    timing: "Mon–Fri: 10:30 AM – 7:30 PM",
  },
];

const Stores = () => {
  return (
    <>
 <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Visit Our Stores</h2>

      <div className="grid md:grid-cols-3 gap-8">
  {store.map((s) => (
    <div key={s.id} className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-green-600 mb-2">Store {s.id}</h3>
      <h4 className="text-xl font-semibold">{s.name}</h4>
      <p className="text-gray-600 mt-1">{s.address}</p>
      <p className="text-gray-800 mt-3"><span className="font-medium">Phone:</span> {s.phone}</p>
      <p className="text-gray-800 mt-1"><span className="font-medium">Timing:</span> {s.timing}</p>
    </div>
  ))}
</div>
      </div>
    </section>
    </>
  )
}

export default Stores
