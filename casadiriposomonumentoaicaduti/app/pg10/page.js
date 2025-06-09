import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenteredText from '../components/CenteredText';

export default function Home() {
  
  const addressInfo = [
    'Sede legale: Via Unità d’Italia, 22',
    '30027 San Donà di Piave (VE), Italia',
    'C.F. e P.IVA: 82002250277',
  ];

  const groupContacts = [
    { type: 'Telefono Ufficio', value: '+39 0421 330 800' },
    { type: 'Fax', value: '+39 0421 330 899' },
    { type: 'Email Ufficio', value: 'info@casadiripososandona.it' },
    { type: 'Orari Segreteria', value: 'Lun-Ven 8:30-12:30 / 14:00-16:00' },
  ];

  const individualContacts = [
    { type: 'Telefono Assistenza', value: '+39 0421 330 801' },
    { type: 'Email Assistenza', value: 'assistenza@casadiripososandona.it' },
    { type: 'Supporto', value: 'Per informazioni su accoglienza, servizi e visite agli ospiti' },
  ];

  // Altezza della navbar e del footer (in pixel)
  const NAVBAR_HEIGHT = 80;
  const FOOTER_HEIGHT = 80;
  // Distanza desiderata tra BottonText e navbar/footer
  const DISTANZA = 64; // px (es. 4rem, tailwind: mt-16 = 4rem = 64px)

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
<br></br><br></br><br></br><br></br>
      <section className="flex flex-col items-center w-full px-2">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-extrabold mt-10 mb-2 text-blue-900 tracking-tight text-center">
              Atti amministrativi <span className="text-blue-600">- Determine</span>
            </h2>
            <p className="text-gray-500 text-base text-center max-w-2xl">
              In questa sezione sono pubblicate le principali determine. Puoi consultare numero, data e oggetto di ciascun atto.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-white w-full">
            <table className="min-w-full divide-y divide-blue-200 text-sm sm:text-base">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-2 sm:px-4 md:px-6 py-3 text-left font-bold text-blue-900 uppercase tracking-wider rounded-tl-xl whitespace-nowrap">
                    Unità organizzativa
                  </th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 text-left font-bold text-blue-900 uppercase tracking-wider whitespace-nowrap">
                    Reg.Gen.
                  </th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 text-left font-bold text-blue-900 uppercase tracking-wider whitespace-nowrap">
                    Data Reg. Gen.
                  </th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 text-left font-bold text-blue-900 uppercase tracking-wider rounded-tr-xl">
                    Oggetto
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-4 font-medium text-blue-800 whitespace-nowrap">DETERMINAZIONE</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">4</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">29/03/2024</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-700">
                    AFFIDAMENTO DIRETTO PER ELABORAZIONE CEDOLINI AMMINISTRATORI E ADEMPIMENTI OBBLIGATORI CONNESSI - Consulente del Lavoro SILVIA GIANDILETTI P.I. 01565010293 - CIG: B0E1AD1F10
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-4 font-medium text-blue-800 whitespace-nowrap">DETERMINAZIONE</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">3</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">29/03/2024</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-700">
                    PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FINO AL 31.12.2024
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-4 font-medium text-blue-800 whitespace-nowrap">DETERMINAZIONE</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">2</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">19/02/2024</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-700">
                    PRESA D'ATTO DIFFIDA VIOLAZIONI FORMALI IN CUMULO MATERIALE
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-4 font-medium text-blue-800 whitespace-nowrap">DETERMINAZIONE</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">1</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">05/02/2024</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-700">
                    AFFIDAMENTO DIRETTO PER RINNOVO CONTRATTO ANNUALE DI MANUTENZIONE ED ASSISTENZA AI SISTEMI INFORMATICI - ditta ZUCCHETTI HEALTHCARE SRL di Rovereto (TN) P.I. 02649530280 - CIG B03FC04FF9
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-4 font-medium text-blue-800 whitespace-nowrap">DETERMINAZIONE</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">45</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-blue-700 whitespace-nowrap">21/12/2023</td>
                  <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-700">
                    PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FINO AL 31.03.2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
<br></br><br></br>
      <Footer 
        addressInfo={addressInfo}
        groupContacts={groupContacts}
        individualContacts={individualContacts}
      />
    </div>
  );
}
