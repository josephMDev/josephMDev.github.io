"use client";

import { useState } from 'react';
import { navLinks } from '../constants/index';

interface NavItemProps {
  onClick?: () => void;
}

const NavItems: React.FC<NavItemProps> = ({ onClick = () => {} }) => (
  <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="text-white hover:text-gray-300" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Logo</div>
        <button
          className="text-white sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
          <NavItems onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;