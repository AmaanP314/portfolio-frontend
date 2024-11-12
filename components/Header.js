import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../components/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Tablets considered as large screen
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    toggleTheme();
    toggleMenu();
  };

  return (
    <header className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white shadow-md z-50`}>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Dark Theme Toggle for Large Screens */}
        {isLargeScreen && (
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            {theme === 'dark' ? (
              <span className="text-white">🌞</span> // Moon Icon for Dark Mode
            ) : (
              <span className="text-yellow-400">🌙</span> // Sun Icon for Light Mode
            )}
          </button>
        )}

        {/* Portfolio Title */}
        <h1 className="text-2xl font-bold ml-4">
          Portfolio
        </h1>

        {/* Desktop Nav Links */}
        {isLargeScreen && (
          <div className="flex space-x-4">
            <Link href="#hero" className="hover:text-gray-400">Hero</Link>
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
        )}

        {/* Hamburger Menu for Small Screens */}
        {!isLargeScreen && (
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        )}
      </nav>
        
      {/* Slide-in Menu for Small Screens */}
      {!isLargeScreen && (
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-gray-900 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
        >
          {/* Dark Theme Toggle Button in the Slider for Small Screens */}
          <div className="p-4 flex justify-start mt-4"> {/* Reduced margin-top here */}
            <button
              onClick={handleClick}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              {theme === 'dark' ? (
                <span className="text-white">🌞</span>
              ) : (
                <span className="text-yellow-400">🌙</span>
              )}
            </button>
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleMenu}
          >
            &#10005;
          </button>

          <div className="mt-10 p-6 space-y-4"> {/* Reduced margin-top here */}
            <Link href="#hero" className="block hover:text-gray-400" onClick={toggleMenu}>Hero</Link>
            <Link href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About</Link>
            <Link href="#skills" className="block hover:text-gray-400" onClick={toggleMenu}>Skills</Link>
            <Link href="#projects" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</Link>
            <Link href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}

      {/* Overlay to Close Menu when Clicking Outside */}
      {isMenuOpen && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
