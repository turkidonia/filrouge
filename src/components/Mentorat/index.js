import React from 'react';

function Mentorat() {
  const mentorat = [
    { name: 'Marie Dupont', expertise: 'Marketing Digital' },
    { name: 'Sophie Martin', expertise: 'Développement Web' },
    { name: 'Elena Rossi', expertise: 'Gestion de Projet' }
  ];

  return (
    <div className="mentorat">
      <h2>Nos Mentors</h2>
      <ul>
        {mentorat.map((mentor, index) => (
          <li key={index}>
            <h3>{mentor.name}</h3>
            <p>{mentor.expertise}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mentorat;
