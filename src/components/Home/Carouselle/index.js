import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carouselle = () => (
  <carousel>
    <Carousel.Item>
      <video className="d-block w-100" autoPlay loop muted>
        <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <Carousel.Caption>
        <h3>First Video</h3>
        <p>Description for the first video.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <video className="d-block w-100" autoPlay loop muted>
        <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <Carousel.Caption>
        <h3>Second Video</h3>
        <p>Description for the second video.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <video className="d-block w-100" autoPlay loop muted>
        <source src="/videos/video3.mp4" type="video/mp4" />
      </video>
      <Carousel.Caption>
        <h3>Third Video</h3>
        <p>Description for the third video.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </carousel>
);
export default Carouselle;
