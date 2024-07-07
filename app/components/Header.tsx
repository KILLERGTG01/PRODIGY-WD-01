import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-amber-700 text-white p-4">
      <div className="text-left">
        <h1 className="text-xl">Landing Page</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
