import React from 'react';

const BottonText = ({ 
  title, 
  description, 
  button1Text, 
  button2Text, 
  imageSrc,
  button1Link,
  button2Link,
  button3Text = "Amministrazione",
  button4Text = "PagoPa",
  button3Link = "pg7",
  button4Link = "pg17"
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight drop-shadow-sm">
            {title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href={button1Link}
              className="flex-1 px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300 text-center text-lg"
            >
              {button1Text}
            </a>
            <a 
              href={button2Link}
              className="flex-1 px-8 py-3 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-full shadow-md hover:bg-red-50 hover:text-red-700 hover:scale-105 transition-all duration-300 text-center text-lg"
            >
              {button2Text}
            </a>
          </div>
       
          <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
            <a 
              href={button3Link}
              className="flex-1 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-center text-lg"
            >
              {button3Text}
            </a>
            <a 
              href={button4Link}
              className="flex-1 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-50 hover:text-blue-700 hover:scale-105 transition-all duration-300 text-center text-lg"
            >
              {button4Text}
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-100 via-white to-blue-100 rounded-3xl blur-lg opacity-70"></div>
            <img 
              src={imageSrc} 
              alt={title} 
              className="relative w-full h-auto rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottonText;
