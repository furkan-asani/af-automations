import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold sm:ml-[-38px] hover:text-gray-300 transition-colors">
            AF Automations
          </a>
        </Link>
        {/* This div will hold the links and potentially the sphere later */}
        <div
          className="flex items-center space-x-6"
          id="navbar-links-container"
        >
          <Link href="/#social-proof" legacyBehavior>
            <a
              id="fallstudien-link"
              className="hover:text-gray-300 transition-colors"
            >
              Fallstudien
            </a>
          </Link>
          <Link href="/#footer-contact" legacyBehavior>
            <a
              id="kontakt-link"
              className="hover:text-gray-300 transition-colors"
            >
              Kontakt
            </a>
          </Link>
          {/* Placeholder for where the sphere might be added or controlled from */}
          {/* <div id="sphere-placeholder" className="absolute"></div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
