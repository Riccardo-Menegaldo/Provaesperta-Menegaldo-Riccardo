'use client';

import React from 'react';

const CenteredText = ({ title = "Titolo", text }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-3xl w-full text-left flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-6 drop-shadow-sm text-left w-full">
            {title}
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium whitespace-pre-line text-left w-full">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenteredText; 