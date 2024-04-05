import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to AK-Omega-AG</h1>
        <p> Other header content </p>
      </header>
      <main>
        <section className="big-image">
          <p> Big image content </p>
        </section>
        <section className="projects">
          <p> Projects content </p>
        </section>
        <section className="team">
          <p> Team content </p>
        </section>
        <section className="contact">
          <p> Contact content </p>
        </section>
      </main>
      <footer>
        <div className="social-links">
          <p> Social links content </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
