import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [nav, setNav] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "skills" },
    { id: 5, link: "portfolio" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed top-0 z-50 bg-gray-900 text-white shadow-md dark:bg-gray-200 dark:text-gray-900">
      {/* Logo */}
      <h1 className="text-5xl ml-2">PS</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}

        {/* Theme Toggle */}
        <li className="ml-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </li>
      </ul>

      {/* Mobile Menu Icon + Theme Toggle */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300 mr-4 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-gray-300 dark:text-gray-700"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-300 dark:from-gray-200 dark:to-gray-400 dark:text-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200 hover:text-white dark:hover:text-gray-900"
            >
              <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;