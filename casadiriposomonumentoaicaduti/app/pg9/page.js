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
      <CenteredText title="Atti amministrativi
Delibere

" 
text="Tipo atto
N.
Data
Oggetto
Delibera Di Consiglio	19	10/10/2024	
PRESA D'ATTO DIMISSIONI CONSIGLIERE MORETTO ROBERTA
Delibera Di Consiglio	18	27/08/2024	
INCARICO DI SUPPORTO AL SEGRETARIO DIRETTORE
Delibera Di Consiglio	17	27/08/2024	
PRESA D'ATTO DIMISSIONI CONSIGLIERE MIROGLIO CINZIA
Delibera Di Consiglio	16	15/07/2024	
APPROVAZIONE DEL BILANCIO DI ESERCIZIO 2023 E RELATIVI ALLEGATI
Delibera Di Consiglio	15	17/04/2024	
GESTIONE DEL SERVIZIO CENTRO DIURNO ANCHISE. ULTERIORI DETERMINAZIONI.

" />
<br></br><br></br>
      <Footer 
        addressInfo={addressInfo}
        groupContacts={groupContacts}
        individualContacts={individualContacts}
      />
    </div>
  );
}
