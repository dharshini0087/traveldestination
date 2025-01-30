import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Travel Bucket List</h1>
        <p>Explore the world, one destination at a time</p>
      </header>

      <section className="home-intro">
        <h2>Your Adventure Awaits</h2>
        <p>Discover new places, meet new people, and create unforgettable memories. Start planning your next trip now!</p>
      </section>

      <section className="home-featured">
        <h2>Featured Destinations</h2>
        <div className="home-cards">
          <div className="home-card" style={{ backgroundImage: "url('/paris.jpg')" }}>
            <h3>Paris</h3>
            <p>The City of Light awaits with its iconic Eiffel Tower, art, and cuisine.</p>
          </div>
          <div className="home-card" style={{ backgroundImage: "url('/bali.jpg')" }}>
            <h3>Bali</h3>
            <p>Explore the tropical paradise with its beautiful beaches and vibrant culture.</p>
          </div>
          <div className="home-card" style={{ backgroundImage: "url('/tokiyo.jpg')" }}>
            <h3>Kyoto</h3>
            <p>Experience the rich history and serene temples of Japan's cultural heart.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
