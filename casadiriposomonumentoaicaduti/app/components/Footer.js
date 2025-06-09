import React from 'react';

const Footer = ({
  addressInfo,
  groupContacts,
  individualContacts,
}) => {
  return (
    <footer className="bg-gradient-to-tr from-white via-blue-50 to-red-50 text-gray-800 font-sans border-t border-gray-200 shadow-inner">
      {/* Top Section with Title (no logo) */}
      <div className="py-10 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-2xl tracking-wide text-red-700 drop-shadow-sm">
          CASA DI RIPOSO
"MONUMENTO AI CADUTI IN GUERRA"
SAN DONÀ DI PIAVE
          </span>
          <span className="text-sm text-gray-500 font-medium tracking-wider mt-1">
            Casa di Riposo e Servizi alla Persona
          </span>
        </div>
      </div>

      {/* Middle Section with Info Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-14">
        {/* Sede e Dati */}
        <div>
          <h4 className="font-bold text-lg text-red-700 mb-4 border-b-2 border-red-200 pb-2 uppercase tracking-wide">
            Sede e Dati Societari
          </h4>
          {addressInfo.map((line, index) => (
            <p key={index} className="text-base mb-1 text-gray-700">{line}</p>
          ))}
          <p className="text-xs text-gray-400 mt-3">
            Società specializzata in servizi di assistenza e accoglienza per anziani.
          </p>
        </div>

        {/* Contatti Gruppi */}
        <div>
          <h4 className="font-bold text-lg text-red-700 mb-4 border-b-2 border-red-200 pb-2 uppercase tracking-wide">
            Contatti Gruppi
          </h4>
          <ul>
            {groupContacts.map((contact, index) => (
              <li key={index} className="text-base mb-1 text-gray-700 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>
                <span className="font-medium">{contact.type}:</span>
                <span>{contact.value}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-3">
            Per prenotazioni e informazioni dedicate a gruppi organizzati.
          </p>
        </div>

        {/* Contatti Individuali */}
        <div>
          <h4 className="font-bold text-lg text-red-700 mb-4 border-b-2 border-red-200 pb-2 uppercase tracking-wide">
            Contatti Individuali & Escursioni
          </h4>
          <ul>
            {individualContacts.map((contact, index) => (
              <li key={index} className="text-base mb-1 text-gray-700 flex items-start gap-2">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <span className="font-medium">{contact.type}:</span>{" "}
                  <span>{contact.value}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-3">
            Assistenza personalizzata per ospiti individuali e informazioni sulle escursioni.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200"></div>

  
    
    </footer>
  );
};

export default Footer;