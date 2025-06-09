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
      <CenteredText title="PVISION E MISSION

" text="LA NASCITA DELL’IPAB
La Casa di Riposo “Monumento ai Caduti in Guerra” è stata istituita nel 1925 ed eretta come Ente Morale con autonoma amministrazione sulla base del Regio Decreto del 29 Ottobre 1936.
L’ente è un I.P.A.B. (Istituzione Pubblica di Assistenza e Beneficienza) disciplinata dalla Legge Crispi del 1890 e dal D.Lgs 4/5/01 m. 207 ed ha quindi natura giuridica pubblica.
Tra i gestori dell’amministrazione Comunale del dopoguerra, si formò un comitato pro “Monumento ai Caduti in Guerra 1915-1918” per erigere un monumento dove poter piangere i propri morti, essendo loro stessi appartenuti ad un territorio coinvolto nel conflitto, e per i quali la realizzazione del monumento aveva profonda importanza.
A seguito della legge del 1917 che prevedeva e favoriva la nascita di organizzazioni con finalità di assistenza alle famiglie di caduti in guerra, nasce a San Donà “L’associazione tra le madri e vedove dei Caduti”, la quale contribuisce a divulgare la volontà della costruzione di un Monumento.
Solo però nel 1925, durante un consiglio di Giunta Comunale, venne proposta l’idea della casa di ricovero, nella quale riunire tutte quelle istituzioni come l’asilo, l’orfanotrofio, la casa di riposo, … ecc. L’idea venne votata all’unanimità decidendo così che il “Monumento ai Caduti” sarebbe stata una casa di ricovero.
San Donà divenne l’unico paese ad erigere un monumento dedicato ai caduti con insita un’opera residenziale per gli anziani e gli invalidi di guerra.
Il monumento verrà inaugurato nel 1930, ma l’operatività partirà a regime nel 1932 e verrà riconosciuta ufficialmente il 29 ottobre del 1936 con Regio Decreto emanato da Re Vittorio Emanuele e da Mussolini, inserito in Gazzetta Ufficiale il 7 dicembre 1936.
La casa di riposo che oggi è Ente Pubblico, si formò con fondi di beneficienza provenienti da privati ed, inizialmente, per il suo funzionamento venne gestita sempre con parte di fondi privati. Molti sono i soggetti che con il volontariato hanno portato avanti il funzionamento della struttura, testimonianza che il monumento è nato dalla volontà dei cittadini sandonatesi.

COS’E’ OGGI L’IPAB
L’IPAB di oggi è un Centro Servizi con obiettivo fondamentale quello del raggiungimento ed il mantenimento del miglior livello possibile della qualità di vita degli utenti, valorizzando ogni risorsa psico-fisica e ogni potenzialità residua, al fine di favorire l’autonomia, le relazioni familiari e sociali, per tramite anche della fattiva collaborazione delle associazioni di volontariato del nostro territorio.

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
