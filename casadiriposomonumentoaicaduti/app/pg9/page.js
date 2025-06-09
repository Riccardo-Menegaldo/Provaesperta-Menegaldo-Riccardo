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
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 sm:mt-10 mb-2 text-blue-900 tracking-tight text-center">
              Atti amministrativi <span className="text-blue-600">- Delibere</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center max-w-2xl">
              In questa sezione sono pubblicate le principali delibere del Consiglio. Puoi consultare numero, data e oggetto di ciascun atto.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-white">
            <table className="min-w-full divide-y divide-blue-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider rounded-tl-xl whitespace-nowrap">
                    Tipo atto
                  </th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider whitespace-nowrap">
                    N.
                  </th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider whitespace-nowrap">
                    Data
                  </th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider rounded-tr-xl whitespace-nowrap">
                    Oggetto
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-6 py-4 font-medium text-blue-800 text-xs sm:text-base">Delibera Di Consiglio</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">19</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">10/10/2024</td>
                  <td className="px-2 sm:px-6 py-4 text-gray-700 text-xs sm:text-base">PRESA D'ATTO DIMISSIONI CONSIGLIERE MORETTO ROBERTA</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-6 py-4 font-medium text-blue-800 text-xs sm:text-base">Delibera Di Consiglio</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">18</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">27/08/2024</td>
                  <td className="px-2 sm:px-6 py-4 text-gray-700 text-xs sm:text-base">INCARICO DI SUPPORTO AL SEGRETARIO DIRETTORE</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-6 py-4 font-medium text-blue-800 text-xs sm:text-base">Delibera Di Consiglio</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">17</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">27/08/2024</td>
                  <td className="px-2 sm:px-6 py-4 text-gray-700 text-xs sm:text-base">PRESA D'ATTO DIMISSIONI CONSIGLIERE MIROGLIO CINZIA</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-6 py-4 font-medium text-blue-800 text-xs sm:text-base">Delibera Di Consiglio</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">16</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">15/07/2024</td>
                  <td className="px-2 sm:px-6 py-4 text-gray-700 text-xs sm:text-base">APPROVAZIONE DEL BILANCIO DI ESERCIZIO 2023 E RELATIVI ALLEGATI</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-2 sm:px-6 py-4 font-medium text-blue-800 text-xs sm:text-base">Delibera Di Consiglio</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">15</td>
                  <td className="px-2 sm:px-6 py-4 text-blue-700 text-xs sm:text-base">17/04/2024</td>
                  <td className="px-2 sm:px-6 py-4 text-gray-700 text-xs sm:text-base">GESTIONE DEL SERVIZIO CENTRO DIURNO ANCHISE. ULTERIORI DETERMINAZIONI.</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Mobile card view */}
          <div className="sm:hidden mt-6 space-y-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase">Delibera Di Consiglio</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-blue-700">N. 19</span>
                <span className="text-blue-700">10/10/2024</span>
              </div>
              <div className="text-gray-700 text-xs">PRESA D'ATTO DIMISSIONI CONSIGLIERE MORETTO ROBERTA</div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase">Delibera Di Consiglio</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-blue-700">N. 18</span>
                <span className="text-blue-700">27/08/2024</span>
              </div>
              <div className="text-gray-700 text-xs">INCARICO DI SUPPORTO AL SEGRETARIO DIRETTORE</div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase">Delibera Di Consiglio</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-blue-700">N. 17</span>
                <span className="text-blue-700">27/08/2024</span>
              </div>
              <div className="text-gray-700 text-xs">PRESA D'ATTO DIMISSIONI CONSIGLIERE MIROGLIO CINZIA</div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase">Delibera Di Consiglio</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-blue-700">N. 16</span>
                <span className="text-blue-700">15/07/2024</span>
              </div>
              <div className="text-gray-700 text-xs">APPROVAZIONE DEL BILANCIO DI ESERCIZIO 2023 E RELATIVI ALLEGATI</div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase">Delibera Di Consiglio</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-blue-700">N. 15</span>
                <span className="text-blue-700">17/04/2024</span>
              </div>
              <div className="text-gray-700 text-xs">GESTIONE DEL SERVIZIO CENTRO DIURNO ANCHISE. ULTERIORI DETERMINAZIONI.</div>
            </div>
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
