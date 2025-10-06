import React from 'react';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="site-root">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="brand">GymFit</div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#classes" className="nav-link">Classes</a>
            <a href="#pricing" className="nav-link cta">Pricing</a>
          </div>
        </div>
      </nav>

      <main>
        <section
          id="home"
          className="section hero"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,13,18,0.55), rgba(11,13,18,0.85)), url('/assets/images/hero.jpg') center / cover no-repeat",
          }}
        >
          <div className="container hero-content">
            <h1>Best Gym in Avadi</h1>
            <p>Premium fitness studio in Avadi with personal training, HIIT, and yoga.</p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">View Pricing</a>
              <a href="#classes" className="btn-outline">Explore Classes</a>
            </div>
          </div>
        </section>

        <section id="classes" className="section classes">
          <div className="container">
            <h2 className="section-title">Our Classes</h2>
            <div className="grid-3">
              <article className="card">
                <img
                  src="/assets/images/strength.jpg"
                  alt="Strength training at GymFit Avadi"
                  className="card-img"
                />
                <h3>Strength Training</h3>
                <p>Build power with guided barbell and kettlebell sessions.</p>
                <ul>
                  <li>Technique-first coaching</li>
                  <li>Progressive overload plans</li>
                  <li>Small group format</li>
                </ul>
              </article>
              <article className="card">
                <img
                  src="/assets/images/hiit.jpg"
                  alt="HIIT and conditioning class in Avadi"
                  className="card-img"
                />
                <h3>HIIT & Conditioning</h3>
                <p>High intensity intervals to boost endurance and burn calories.</p>
                <ul>
                  <li>Scalable to all levels</li>
                  <li>Heart-rate guided</li>
                  <li>45-minute sessions</li>
                </ul>
              </article>
              <article className="card">
                <img
                  src="/assets/images/yoga.jpg"
                  alt="Yoga and mobility session in Avadi"
                  className="card-img"
                />
                <h3>Mobility & Yoga</h3>
                <p>Recover, strengthen stabilizers, and improve flexibility.</p>
                <ul>
                  <li>Breathwork focus</li>
                  <li>Beginner-friendly flows</li>
                  <li>Balance & core work</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="container">
            <h2 className="section-title">Pricing</h2>
            <div className="plans">
              <article className="plan">
                <div className="plan-header">
                  <h3>Basic</h3>
                  <div className="price">$29<span><small>/mo</small></span></div>
                </div>
                <ul className="features">
                  <li>Gym floor access</li>
                  <li>Locker room + showers</li>
                  <li>Free fitness assessment</li>
                </ul>
                <div className="cta-row">
                  <button type="button" className="btn-outline">Details</button>
                  <button type="button" className="btn-primary">Choose Basic</button>
                </div>
              </article>

              <article className="plan popular">
                <div className="plan-header">
                  <h3>Plus</h3>
                  <div className="price">$49<span><small>/mo</small></span></div>
                </div>
                <ul className="features">
                  <li>All Basic features</li>
                  <li>Unlimited classes</li>
                  <li>Sauna & recovery lounge</li>
                </ul>
                <div className="cta-row">
                  <button type="button" className="btn-outline">Details</button>
                  <button type="button" className="btn-primary">Choose Plus</button>
                </div>
              </article>

              <article className="plan">
                <div className="plan-header">
                  <h3>Elite</h3>
                  <div className="price">$79<span><small>/mo</small></span></div>
                </div>
                <ul className="features">
                  <li>All Plus features</li>
                  <li>1:1 monthly coaching</li>
                  <li>Nutrition plan & check-ins</li>
                </ul>
                <div className="cta-row">
                  <button type="button" className="btn-outline">Details</button>
                  <button type="button" className="btn-primary">Choose Elite</button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} GymFit</span>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
