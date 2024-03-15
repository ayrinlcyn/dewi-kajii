import React from "react";
import { IconUserCircle } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="bg-black bg-nav p-2 fixed-top-0 z-10">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <span className="text-white font-bold text-xl ml-4">
                <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
              </span>
              <a
                href="#"
                className="text-white hover:text-cream px-1 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-cream px-1 py-2 rounded-md text-sm font-medium"
              >
                Atraksi
              </a>
              <a
                href="#"
                className="text-white hover:text-cream px-1 py-2 rounded-md text-sm font-medium"
              >
                Paket Wisata
              </a>
              <a
                href="#"
                className="text-white hover:text-cream px-1 py-2 rounded-md text-sm font-medium"
              >
                Katalog Ikan
              </a>
              <a
                href="#"
                className="text-white hover:text-cream px-1 py-2 rounded-md text-sm font-medium"
              >
                Homestay
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={""} className="text-white font-bold text-xl">
              <IconUserCircle stroke={2} className="h-10 w-10" /> {}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
