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
      <CenteredText 
        title="PagoPA - Credenziali di Pagamento" 
        text={`
Per effettuare un pagamento tramite il sistema PagoPA, utilizzare le seguenti credenziali di pagamento:

Codice Ente: 12345678901
IBAN: IT60X0542811101000000123456
Causale: Pagamento retta mensile IPAB
Codice Avviso: 2024-000001
Importo: € 1.234,56

Per ulteriori informazioni o assistenza sui pagamenti, contattare l'ufficio amministrativo all'indirizzo email: pagamenti@casadiripososandona.it oppure al numero +39 0421 330 802.
        `}
      />
<br></br><br></br>
      <Footer 
        addressInfo={addressInfo}
        groupContacts={groupContacts}
        individualContacts={individualContacts}
      />
    </div>
  );
}
