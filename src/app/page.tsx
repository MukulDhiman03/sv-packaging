"use client";
import Image from "next/image";

export default function Home() {
  const deals = [
    {
      title: "TSC TE244 Desktop Thermal Transfer Barcode Label Printer",
      price: 15616,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Tapes",
      price: 1102,
      img: "https://packaging.shiprocket.in/cdn/shop/files/5.jpg?v=1725967769&width=1400",
    },
    {
      title: "Honeycomb Sleeves - Pack of 100 - 200 MM",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Boxes",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/2_d743da5a-fddc-455f-8c22-b708248eaad5.jpg?v=1725967742&width=1400",
    },
    {
      title: "TSC TE244 Desktop Thermal Transfer Barcode Label Printer",
      price: 15616,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Tapes",
      price: 1102,
      img: "https://packaging.shiprocket.in/cdn/shop/files/5.jpg?v=1725967769&width=1400",
    },
    {
      title: "Honeycomb Sleeves - Pack of 100 - 200 MM",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Boxes",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/2_d743da5a-fddc-455f-8c22-b708248eaad5.jpg?v=1725967742&width=1400",
    },
    {
      title: "TSC TE244 Desktop Thermal Transfer Barcode Label Printer",
      price: 15616,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Tapes",
      price: 1102,
      img: "https://packaging.shiprocket.in/cdn/shop/files/5.jpg?v=1725967769&width=1400",
    },
    {
      title: "Honeycomb Sleeves - Pack of 100 - 200 MM",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
    {
      title: "Boxes",
      price: 1350,
      img: "https://packaging.shiprocket.in/cdn/shop/files/2_d743da5a-fddc-455f-8c22-b708248eaad5.jpg?v=1725967742&width=1400",
    },
    {
      title: "TSC TE244 Desktop Thermal Transfer Barcode Label Printer",
      price: 15616,
      img: "https://packaging.shiprocket.in/cdn/shop/files/Honeycomb.png?v=1718872863&width=800",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center text-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Smart & Sustainable Packaging Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          “Delivering Innovation, Protecting the Future.”
        </p>
        <p className="mt-2 text-gray-500">
          We provide eco-friendly and cost-effective packaging solutions tailored to your business needs.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="card bg-base-200 shadow-lg p-6">
          <h3 className="text-xl font-semibold">Eco-Friendly Materials</h3>
          <p className="mt-2 text-gray-500">Sustainable products to reduce environmental impact.</p>
        </div>
        <div className="card bg-base-200 shadow-lg p-6">
          <h3 className="text-xl font-semibold">Custom Designs</h3>
          <p className="mt-2 text-gray-500">Tailored packaging solutions for your brand identity.</p>
        </div>
        <div className="card bg-base-200 shadow-lg p-6">
          <h3 className="text-xl font-semibold">Global Shipping</h3>
          <p className="mt-2 text-gray-500">Reliable delivery wherever your customers are.</p>
        </div>
      </div>

      {/* Products Section */}
      <section className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">Products to Buy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deals.map((item, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
            >
              <figure className="bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body text-left">
                <h3 className="card-title text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-xl font-bold text-black">₹ {item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
}
