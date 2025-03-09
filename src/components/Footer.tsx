import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About EvilX</h3>
            <p className="text-gray-300 text-sm mb-4">
              EvilX is your ultimate destination for fun, free browser games.
              Whether you&apos;re after casual play or a challenge, our wide range of
              games offers something for everyone. Dive in and enjoy endless
              hours of entertainment, all in your browser!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                {/* Facebook Icon */}
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                {/* Instagram Icon */}
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white"
              >
                {/* Twitter Icon */}
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-300 hover:text-white"
              >
                {/* YouTube Icon */}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="hover:text-green-400 transition-colors"
                >
                  All Games
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-green-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Game Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Game Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/category/Action"
                  className="hover:text-green-400 transition-colors"
                >
                  Action & Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="/category/education"
                  className="hover:text-green-400 transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/category/Platformers"
                  className="hover:text-green-400 transition-colors"
                >
                  Platformers
                </Link>
              </li>
              <li>
                <Link
                  href="/category/Shooting"
                  className="hover:text-green-400 transition-colors"
                >
                  Shooting
                </Link>
              </li>
              <li>
                <Link
                  href="/category/Arcade "
                  className="hover:text-green-400 transition-colors"
                >
                 Arcade 
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Need to get in touch with us?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Send us your queries or feedback
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={2}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="./EvilXlogo.png" alt="PW Games" className="h-8 mr-2" />
          </div>
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} EvilX. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
