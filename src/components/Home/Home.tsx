import React from 'react';
import './Home.css';
import Lance from '../../assets/lance.jpg';
import Services from './Services/Services';

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <header className='home-header'>
        <section className='big-image'>
          <h1>AK-Omega-AG</h1>
          <p> Design & Konstruktion im modernstem Stil.</p>
        </section>
        <img src={Lance} alt='Logo' />
      </header>

      <main>
        <section className='projects'>
          <p>
            Wir sind ein Architekturbüro, dass sich durch sein soziales, ökologisches und
            kulturelles Bewusstsein auszeichnet.
          </p>
          <p>
            Mit Berücksichtigung der neusten Generation von technologischen Verfahren, welche
            Umweltinnovationen beinhalten, bieten wir Ihnen die bestmögliche Lösung für Ihr Projekt.
          </p>
        </section>
        <section className='team'>
          <h2>ÜBER UNS</h2>
          <p>
            AK Omega AG ist ein Bauunternehmen mit mehr als 10 Jahren Erfahrung, das sich auf den
            Wohnungsbau spezialisiert hat. AK Architekten AG ist ein junges Unternehmen mit
            Anerkennung im Kanton Aargau, zusammen haben sie mehr als 27.000 Quadratmeter Bau
            entwickelt.
          </p>

          <p>
            Das Team arbeitet unter der Leitung der Architekturabteilung, die von der Architektin
            Diana Heger geführt wird. Der Leiter der Bauabteilung ist Stefan Schüpfer. Die
            administrative und immobilienwirtschaftliche Projektleitung liegt bei Ivan J.
          </p>

          <p>
            Darüber hinaus verfügen wir über ein professionelles Team von Spezialisten in jedem
            Arbeitsbereich (Baumeister, Sanitär, Elektro, Landschaftsbau...) für die Ausführung und
            ganzheitliche Entwicklung unserer Projekte.
          </p>
        </section>
        <section>
          <Services />
        </section>
        <section className='contact'>
          <p> Contact content </p>
        </section>
      </main>
      <footer>
        <div className='social-links'>
          <p> Social links content </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
