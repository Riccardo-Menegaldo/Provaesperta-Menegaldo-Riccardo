import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottonText from './components/bottontext';
import { Card, CardGrid } from './components/Card';
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
  const cardsData = [
    //{
      //immagine: "/images/article_page_attività_fisica.webp",
      //titolo: "Sport e Digestione",
      //descrizione: "Il movimento è importante, si sa. Ma lo sapevi che può influenzare la digestione?",
      //link: "#"
   // },
    // {
      //immagine:"/images/4 - IN ARTICLE.webp",
      //titolo: "Bruciore di stomaco e reflusso dopo lo sport",
      //descrizione: "Chi non ha mai sentito dire che lo sport fa bene a tutto? Ma se soffri di reflusso allenamenti intensi potrebbero diventare i tuoi migliori nemici",
      //link: "#"
    //},
    {
      immagine: "/images/Bookcrossing.jpg",
      titolo: "20/05/2025 Gentilissimi",
      descrizione: "il Consiglio di Amministrazione ha il piacere di invitarVi all’inaugurazione delle casette di book crossing che si terrà Lunedì 16 giugno alle ore 16:30 presso il parco della Casa di Riposo Monumento ai Caduti in Guerra Certi di fare cosa gradita, si porgono cordiali saluti.",
      link: "#"
    }
  ];
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

      {/* 
        Imposta il main con padding-top e padding-bottom uguali (distanza dalla navbar e dal footer).
        La minHeight tiene conto di navbar+footer+doppia distanza.
      */}
      <main
        className="flex-grow flex items-center justify-center"
        style={{
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
          paddingTop: `${DISTANZA}px`,
          paddingBottom: `${DISTANZA}px`,
        }}
      >
        <div className="w-full flex justify-center items-center">
          <BottonText
            title="Benvenuti alla Casa di Riposo"
            description="La nostra struttura offre servizi di alta qualità per il benessere e l’assistenza degli ospiti. Personale qualificato, ambienti accoglienti e attenzione quotidiana: ci prendiamo cura di ogni esigenza con professionalità e umanità."
            button1Text="Scopri i Servizi"
            button2Text="Contattaci"
            imageSrc="/images/221386323-illustrazione-di-vettore-del-personaggio-dei-cartoni-animati-di-nonno-e-nonno-su-sfondo-bianco.jpg"
            button1Link="pg11"
            button2Link="pg16"
          />
        </div>
      </main>
      <h1 class="text-center text-4xl text-balck font-bold">NEWS</h1>
      <div className="mt-20">
        <CardGrid>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </CardGrid>
      </div>
      <Footer 
        addressInfo={addressInfo}
        groupContacts={groupContacts}
        individualContacts={individualContacts}
      />
    </div>
  );
}
