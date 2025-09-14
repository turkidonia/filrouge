import React from 'react';
import './legal.css';

function Confidentialite() {
  return (
    <div className="legal-container">
      <h1>Politique de confidentialité</h1>
      <p>
        La protection de vos données personnelles est une priorité pour <strong>START HER</strong>.
        Cette Politique explique quelles informations nous collectons, pourquoi et comment nous les
        utilisons.
      </p>

      <h2>1. Données collectées</h2>
      <p>
        Lors de votre inscription et utilisation de la plateforme, nous collectons les données
        suivantes : nom, prénom, email, mot de passe, préférences de navigation et données liées à
        votre activité sur START HER.
      </p>

      <h2>2. Finalité de la collecte</h2>
      <p>
        Ces données sont utilisées pour : créer et sécuriser votre compte, personnaliser votre
        expérience, améliorer nos services et vous proposer un accompagnement adapté.
      </p>

      <h2>3. Partage avec des tiers</h2>
      <p>
        Vos données ne sont jamais revendues. Elles peuvent être partagées uniquement avec des
        prestataires de confiance (par exemple pour l’hébergement, le paiement ou l’envoi d’emails)
        dans le respect du RGPD.
      </p>

      <h2>4. Sécurité</h2>
      <p>
        Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger
        vos données contre tout accès non autorisé, perte ou divulgation.
      </p>

      <h2>5. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et de
        suppression de vos données. Pour exercer vos droits, contactez-nous via la page{' '}
        <a href="/contact">Contact</a>.
      </p>

      <p className="legal-footer">Dernière mise à jour : Mars 2025</p>
    </div>
  );
}

export default Confidentialite;
