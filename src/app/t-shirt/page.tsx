"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

const TShirtsPage = () => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu

  const handleSizeChange = (size: string) => {
    setSelectedSize(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="flex">
      <header className="p-4 absolute w-full z-10">
        <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="text-white text-xl font-bold">"LOGO"</div>
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <ul className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[4vw] ${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
            <li>
              <Link href="/t-shirt" className="text-white hover:text-gray-500 text-sm md:text-base ">T-shirt</Link>
            </li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Zip & Hoodies</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Pants</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Accessories</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">FAQ</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Contact</a></li>
          </ul>
          <div className="hidden md:block">
            <a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">CART</a>
          </div>
        </nav>
      </header>

      <aside className="w-1/4 h-screen p-4 bg-gray-400 mt-16">
        <h2 className="text-lg font-bold">Filter by Size</h2>
        <div>
          {['S', 'M', 'L', 'XL'].map(size => (
            <label key={size} className="block">
              <input 
                type="checkbox" 
                checked={selectedSize.includes(size)} 
                onChange={() => handleSizeChange(size)} 
              />
              {size}
            </label>
          ))}
        </div>
        <h2 className="text-lg font-bold mt-4">Filter by Color</h2>
        <div>
          {['Red', 'Blue', 'Green', 'Black'].map(color => (
            <label key={color} className="block">
              <input 
                type="checkbox" 
                checked={selectedColor.includes(color)} 
                onChange={() => handleColorChange(color)} 
              />
              {color}
            </label>
          ))}
        </div>
      </aside>

      <main className="w-3/4 p-4 mt-16"> {/* Contenu principal à droite de la sidebar */}
        <h1 className="text-2xl font-bold mb-4">T-Shirts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example T-shirt items */}
          {['T-shirt 1', 'T-shirt 2', 'T-shirt 3'].map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <Image src={`/path/to/tshirt${index + 1}.png`} alt={item} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-lg">{item}</h2>
                <Link href={`/tshirt/${index + 1}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TShirtsPage;