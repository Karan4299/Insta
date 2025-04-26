import React from 'react';
import GradientText from './GradientText';

interface HeroProps {
  onLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLogin }) => {
  return (
    <>
    <div className="language-selector mb-12 flex flex-col items-center justify-center" >
      <button className="text-gray-400 hover:text-white transition-colors flex items-center text-[12]">
        English (UK)
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <main className="flex-1 flex flex-col items-center justify-center px-4 gap-14">
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        
        <h1 className="text-5xl font-semibold italic font-serif mb-5">Instagram</h1>
        
        <div className="text-center max-w-lg">
          <h2 className="text-2xl md:text-4xl font-light mb-4">
            Share what you're into{' '}
            <GradientText text="with the people who get you." />
          </h2>
        </div>
        
        <div className="text-[14]">
          <button 
            onClick={onLogin}
            className="text-[#1877F2] hover:text-blue-400 transition-colors"
          >
            Log In
          </button>
          <span className="mx-2">or</span>
          <button className="text-[#1877F2] hover:text-blue-400 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </main>
    </>
  );
};

export default Hero;