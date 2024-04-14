import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className='projects-container'>
      <h2>WAS BAUEN WIR JETZT</h2>
      <p className='projects-text'>
        Unter unseren jüngsten Projekten finden Sie drei Wohngemeinschaften. Wir
        sind in der Lage, unsere Skizzen für die Bedürfnisse und Anforderungen
        unserer Kunden in die Realität umzusetzen. Kontaktieren Sie uns noch
        heute, um weitere Informationen zu erhalten.
      </p>
      <h3 className='brugg-title'>BRUGG Terrassenhäuser</h3>
      <div>
        <p className='brugg-text'>
          Chilhalde, Umiken Chilhalde, Umiken - Brugg ​ Neubau Terrassenhäuser -
          Auf der Baulandparzelle 5080 besteht ein bewilligtes Bauprojekt, mit
          17 Terrassenhäuser. ​ Haben wir Ihr Interesse geweckt? Wir freuen uns
          auf Ihre Kontaktaufnahme
        </p>

        <p className='brugg-text'>
          Terrassenhäuser Chilhalde, Umiken - BRUGG Bei unserem Entwurf wurde
          darauf geachtet, luxuriöse Familienresidenzen mit einer gut
          ausgebauten Infrastruktur und Minergie-P zu schaffen
        </p>
        <button className='projects-more-info'>Mehr Info</button>
      </div>
      <div className='projects-grid-container'>
        <div className='projects-grid'>
          <div className='projects-grid-image'></div>
          <h4 className='projects-grid-title'>MYRTENSTRASSE</h4>
          <p className='projects-grid-description'>
            Die 2 MFH Myrtenstrasse soll auf jeden Fall beeindrucken und bietet
            viele Möglichkeiten, die Natur zu genießen, die Sie umgibt. Es hat
            eine außergewöhnliche Lage im Zentrum von Menziken, wir empfehlen
            Ihnen, sich einen kurzen Einblick in dieses Projekt zu verschaffen.
            <p className='projects-grid-adress'>
              Myrtenstrasse 6+8 5737 Menziken AG
            </p>
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'></div>
          <h4 className='projects-grid-title'>SCHÄCHENFELDSTRASSE</h4>
          <p className='projects-grid-description'>
            Unser Design hat dafür gesorgt, dass luxuriöse Familienresidenzen
            eine gut ausgebaute Infrastruktur und Minergie-P-zertifiziert sind.
            Wir empfehlen Ihnen, sich dieses Meisterwerk bei jeder Gelegenheit
            anzusehen .
            <p className='projects-grid-adress'>
              Schachenfeldstrasse 19+21 8967 Widen
            </p>
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'></div>
          <h4 className='projects-grid-title'>BODENFELDSTRASSE</h4>
          <p className='projects-grid-description'>
            Als öffentlicher Raum ist das Wohngebäude eines unserer
            Lieblingsprojekte. Aus unserer Sicht die perfekte Kombination aus
            Design und Funktionalität.
            <p className='projects-grid-adress'>
              Bodenfeldstrasse 1 5737 Menziken AG
            </p>
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'></div>
          <h4 className='projects-grid-title'>OBERKULM</h4>
          <p className='projects-grid-description'>
            Die MFH Oberkulm ist definitiv darauf ausgelegt, zu beeindrucken und
            den Reaktionen der Besucher nach zu urteilen, genau das schafft sie.
            <p className='projects-grid-adress'>Schrägweg 21 5727 Oberkulm</p>
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'></div>
          <h4 className='projects-grid-title'>BAHNHOFSTRASSE</h4>
          <p className='projects-grid-description'>
            Unser Design stellte sicher, dass behinderte Besucher leicht
            zugänglich sind und gleichzeitig ein königliches und majestätisches
            Ambiente erhalten bleiben. Wir empfehlen Ihnen, dieses Meisterwerk
            bei jeder Gelegenheit zu sehen.
          </p>
          <p className='projects-grid-adress'>
            Bahnhofstrasse 18 5737 Menziken
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
