"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  const addressInfo = [
    'Sede legale: Via delle Rose, 123',
    '10100 Torino (TO), Italia',
    'C.F. e P.IVA: 12345678901',
  ];

  const groupContacts = [
    { type: 'Telefono Generale', value: '+39 011 123 4567' },
    { type: 'Fax', value: '+39 011 765 4321' },
    { type: 'Email Generale', value: 'info@esempio.it' },
    { type: 'Orari Ufficio', value: 'Lun-Ven 9:00-13:00 / 14:00-18:00' },
  ];

  const individualContacts = [
    { type: 'Responsabile', value: 'Mario Rossi' },
    { type: 'Telefono Responsabile', value: '+39 333 987 6543' },
    { type: 'Email Responsabile', value: 'mario.rossi@esempio.it' },
  ];

  const NAVBAR_HEIGHT = 80;
  const FOOTER_HEIGHT = 80;
  const DISTANZA = 64;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        titolo1="PERCHE' L'IPAB"
        titolo2="SERVIZI"
        titolo3="I.P.A.B. informa"
        titolo4="Accessi riservati"
        soc1="PRIVACY"
        soc2="CONTATTI"
        soc4="EXTRANET"
        dt='• CENTRO DIURNO "ANCHISE"'
        dt1='• CENTRO ANZIANI "COLORA IL TUO TEMPO"'
        dt2='• SERVIZIO ASSISTENZA DOMICILIARE S.A.D.'
        dt3='• SPORTELLO ASSISTENTI FAMILIARI'
        dt4='• PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO'
        dt20='• VISION E MISSION'
        dt25='• STATUTO'
        dt50="ACCESSO AGLI ATTI"
        dt55="Il servizio consente la consultazione degli atti amministrativi in corso di pubblicazione all'Albo Pretorio on-line, nonché degli atti la cui pubblicazione è scaduta."
        dt60="• Albo pretorio"
        dt65="• Delibere"
        dt70="• Determine"
        dt75="AMMINISTRAZIONE TRASPARENTE"
        dt80="In questa sezione sono pubblicati, raggruppati secondo le indicazioni di legge, documenti, informazioni e dati concernenti l'organizzazione dell'amministrazione, le attività e le sue modalità di realizzazione."
        dt85="• Amministrazione trasparente"
        dt90="Intranet sito"
        dt95="• Area Dipendenti"
        img="/images/SFONDO_BIANCO_PICCOLO-removebg-preview.png"
      /> 
      <br /><br /><br /><br />
      <div className="flex flex-col items-center justify-center flex-grow" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px - ${FOOTER_HEIGHT}px - 128px)` }}>
        <h1 className="text-4xl font-bold mb-8">Contatti</h1>
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Dati di contatto</h2>
          <ul className="mb-6">
            {groupContacts.map((contact, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-medium">{contact.type}:</span> {contact.value}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Referente</h2>
          <ul>
            {individualContacts.map((contact, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-medium">{contact.type}:</span> {contact.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br /><br />
      <Footer 
        addressInfo={addressInfo}
        groupContacts={groupContacts}
        individualContacts={individualContacts}
      />
    </div>
  );
}
