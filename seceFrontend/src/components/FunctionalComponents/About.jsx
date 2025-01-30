import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Travel Bucket List</h1>
        <p>Your journey to unforgettable experiences begins here</p>
      </header>

      <section className="about-info">
        <h2>Our Mission</h2>
        <p>At Travel Bucket List, we aim to provide a platform that helps you explore and plan your dream destinations with ease. From finding the best spots to offering exclusive travel packages, we have it all covered for you.</p>
      </section>

      <section className="about-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          <div className="destination-card">
            <h3>Paris</h3>
            <p>The City of Light awaits with its iconic Eiffel Tower, art, and cuisine.</p>
            <p><strong>Package:</strong> 5 Days, 4 Nights</p>
            <p><strong>Price:</strong> $1500</p>
            <img src="paris.jpg" alt="Paris" />
          </div>
          <div className="destination-card">
            <h3>Bali</h3>
            <p>Explore the tropical paradise with its beautiful beaches and vibrant culture.</p>
            <p><strong>Package:</strong> 7 Days, 6 Nights</p>
            <p><strong>Price:</strong> $1800</p>
            <img src="bali.jpg" alt="Bali" />
          </div>
          <div className="destination-card">
            <h3>Kyoto</h3>
            <p>Experience the rich history and serene temples of Japan's cultural heart.</p>
            <p><strong>Package:</strong> 6 Days, 5 Nights</p>
            <p><strong>Price:</strong> $1600</p>
            <img src="tokiyo.jpg" alt="Kyoto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
