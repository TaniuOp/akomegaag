import React from 'react';
import './Footer.css';
import Logo from '../../assets/akomegaag_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='footer-info'>
        <p>AK Omega GU AG</p>
        <p>Hauptstrasse 69</p>
        <p>5734 Reinach</p>
      </div>
      <div className='footer-info'>
        <p>Diana Heger</p>
        <a href='#'>
          <i className='fa fa-twitter'>E-Mail: info@omega-gu-ag.ch</i>
        </a>
        <p className='fa fa-twptter'>Telefon: 062 771 50 07</p>
      </div>
      <div className='footer-info'>
        <p> Öffnungszeiten: </p>
        <p> Montag - Freitag </p>
        <p> 08:00 - 12:00 & 13:30 - 17:00</p>
      </div>
    </footer>
  );
};

export default Footer;
