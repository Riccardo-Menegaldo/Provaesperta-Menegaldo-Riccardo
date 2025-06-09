import React from 'react';

export function Card(props) {
    return (
        <a
            href={props.link}
            className="block relative rounded-3xl w-full aspect-[3/4] overflow-hidden shadow-lg bg-white border border-red-200 transition-all duration-300"
            tabIndex={0}
        >
            <img
                src={props.immagine}
                alt={props.altText || "Card image"}
                className="w-full h-full object-cover scale-100 transition-transform duration-300"
                loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/95 via-red-900/60 to-transparent px-6 py-5 rounded-b-3xl transition-all duration-300">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-black drop-shadow-lg mb-1 transition-colors duration-200">
                    {props.titolo}
                </h1>
                <p className="text-base mt-1 text-white font-medium drop-shadow-sm transition-colors duration-200">
                    {props.descrizione}
                </p>
            </div>
            <span className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md opacity-0 transition-opacity duration-300">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#b91c1c">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
        </a>
    );
}

export function CardGrid({ children }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-12 max-w-7xl mx-auto">
            {children}
        </div>
    );
}
