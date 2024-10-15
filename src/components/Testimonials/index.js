import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alice', feedback: 'Thanks to this mentorship, I transitioned into tech!' },
    { name: 'Sofia', feedback: 'This program helped me build the skills and confidence I needed.' }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.feedback}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
