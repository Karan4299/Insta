'use client';
import React from 'react';

interface HeaderProps {
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogin }) => {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold italic font-serif">Instagram</h1>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onLogin}
          className="text-[#1877F2] hover:text-blue-400 transition-colors"
        >
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;