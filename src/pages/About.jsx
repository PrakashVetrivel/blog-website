import React from 'react';
import './About.css';
import image1 from '../assets/image1.JPG';

function About() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="introduction">
        <h2>Welcome to Our Website</h2>
        <p>
          We are dedicated to providing the best content and resources for developers and tech enthusiasts. Our mission is to empower individuals with the knowledge and skills they need to succeed in the tech industry.
        </p>
      </section>
      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 2023, our website started as a small blog sharing coding tutorials. Over the years, we have grown into a comprehensive platform offering a wide range of articles, courses, and resources.
        </p>
      </section>
      <section className="team">
        <h2>Founder</h2>
        <div className="team-members">
            <img src={image1} alt="Team Member 1" />
            <h3 className="center-text">PRAKASH VETRIVEL</h3>

            </div>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Community</li>
        </ul>
      </section>
      <section className="services">
        <h2>What We Offer</h2>
        <p>
          From coding tutorials and courses to tech news and career advice, we provide a wide range of resources to help you grow in your tech career.
        </p>
      </section>
      <section className="achievements">
        
      </section>
      <section className="testimonials">
        
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? Feel free to <a href="/contact">reach out to us</a>.
        </p>
      </section>
    </div>
  );
}

export default About;
