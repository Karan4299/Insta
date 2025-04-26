import React from 'react';

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#C32AA3] text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export default GradientText;