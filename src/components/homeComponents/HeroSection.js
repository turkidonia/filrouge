import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/home/home.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-left">
      <h1>La mission de START HER</h1>
      <p>
        Transformez votre passion en carrière numérique : rejoignez notre programme de mentorat dédié aux femmes en reconversion professionnelle pour un avenir brillant et connecté.
        Nous aidons les femmes à réussir leur reconversion professionnelle
        grâce à l&apos;accompagnement de mentors experts.
      </p>
      <Link to="/contact">
        <button className="btn-hero">Parlez avec un expert</button>
      </Link>
    </div>
    <div className="hero-right">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MM5sNHPQpls"
        title="Vidéo START HER"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default HeroSection;
