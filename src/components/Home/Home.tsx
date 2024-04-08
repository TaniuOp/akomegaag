import React, { useEffect } from 'react';
import './Home.css';
import Lance from '../../assets/lance.jpg';
import Logo from '../../assets/akomegaag_logo.png';
import Services from './Services/Services';
import Map from './Map/Map';
import Projects from './Projects/Projecsts';

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxFactor = 0.2;

      const headerImage = document.querySelector('.home-header img') as HTMLImageElement;
      if (headerImage) {
        headerImage.style.transform = `translateY(${scrollTop * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home-container'>
      <header className='home-header'>
        <section className='big-image'>
          <h1>AK-Omega-AG</h1>
          <p> Design & Konstruktion im modernstem Stil.</p>
        </section>
        <img src={Lance} alt='image' />
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

        <div className='projects-container'>
          <h2> PROJEKTE</h2>
          <Projects />
        </div>

        <section className='contact-container'>
          <h2> KONTAKTIERE UNS </h2>

          <div className={'contact-sections'}>
            <div className={'contact-image-container'}>
              <img src={Lance} alt='image' className={'contact-image'} />
              <img src={Logo} alt='logo' className={'contact-logo'} />
            </div>
            <div className={'contact-texts'}>
              <p> AK Omega GU AG</p>
              <p> Hauptstrasse 69</p>
              <p> 5734 Reinach</p>
            </div>
            <div className={'contact-texts'}>
              <p> Montag - Freitag</p>
              <p> 08:00 - 12:00 & 13:30 - 17:00</p>
            </div>
            <Map />
            <div className={'contact-texts'}>
              <p> Diana Heger</p>
              <p> E-Mail: info@omega-gu-ag.ch </p>
              <p> Telefon: 062 771 50 07</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
