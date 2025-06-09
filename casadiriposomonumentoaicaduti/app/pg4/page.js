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
      <CenteredText title="SPORTELLO ASSISTENTI FAMILIARI" text="In un contesto storico caratterizzato da un generale miglioramento delle condizioni di vita e da una maggiore disponibilità di risorse medico-sanitarie, si è registrato un aumento costante della fascia di popolazione over 65. L’innalzamento dell’aspettativa di vita però non corrisponde sempre ad un miglioramento anche della sua qualità, infatti sono sempre più frequenti i casi in cui l’insorgenza di malattie dementigene e di condizioni degenerative ostacolino l’autonomia dell’anziano. Emerge pertanto, come le necessità assistenziali verso gli over 65 siano più consistenti rispetto al passato e che quindi vi sia un’evoluzione dell’offerta dei servizi socio-sanitari e di supporto alle famiglie, evitando il più possibile l’istituzionalizzazione dell’anziano.
Nasce così l’esigenza di offrire nuovi servizi alla popolazione, e le politiche sociali presentano buoni margini di implementazione.
Lo sportello, attraverso la figura dell’assistente sociale, consente una visione d’insieme di tutti i percorsi di sostegno alla fragilità, nonché una forte capacità di connessione con gli altri servizi del territorio; infatti lo Sportello è in grado di fornire con competenza, tutte le informazioni necessarie per accedere alla rete dei servizi a favore delle persone non autosufficienti, mirando al superamento della gestione informale del mercato dell’assistenza familiare finora governato per lo più da associazione di matrice religiosa o da altri soggetti. Lo sportello si configura anche come punto di riferimento per la cultura della legalità del lavoro domestico, a tutela sia del lavoratore che della persona non autosufficiente.
Il progetto ha avuto avvio a seguito di un incarico da parte della Conferenza dei Sindaci al Comune di San Donà di Piave quale ente proponente capofila per la continuazione fino al 31.12.2024 con la collaborazione di IPAB.
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
