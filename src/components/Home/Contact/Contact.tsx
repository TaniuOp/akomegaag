import React from 'react';
import './Contact.css';
import Map from '../Map/Map';
import Lance from '../../../assets/lance.jpg';
import Logo from '../../../assets/akomegaag_logo.png';

const Contact: React.FC = () => {
  return (
    <>
      <h2> KONTAKTIERE UNS </h2>
      <div className={'contact-sections-container'}>
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
          <div className={'contact-texts'}>
            <p> Diana Heger</p>
            <p> E-Mail: info@omega-gu-ag.ch </p>
            <p> Telefon: 062 771 50 07</p>
          </div>
        </div>
        <Map />
      </div>
    </>
  );
};
export default Contact;
