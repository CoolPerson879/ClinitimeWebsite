// app/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Clinitime Logo" className="h-8" />
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#features" className="text-gray-700 hover:text-black">
              Features
            </a>
          </li>
          <li>
            <a href="#products" className="text-gray-700 hover:text-black">
              Products
            </a>
          </li>
          <li>
            <a href="/legal" className="text-gray-700 hover:text-black">
              Legal
            </a>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-gray-700 hover:text-black">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
