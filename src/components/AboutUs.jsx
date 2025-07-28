import '../styles/about-us.css';

const AboutUs = () => (
  <section className="about-us" id="mission">
    <header className="about-header">
      <h2>About us</h2>
    </header>

    <div className="about-content">
      <div className="about-grid">
        <img
          src="about-left-img.jpg"
          alt="ACM members collaborating"
          className="about-image"
        />

        <div className="about-center">
          <img src="about-us-logo.png" alt="acm" className="about-logo" />

          <div className="about-description">
            <p>
              The Qatar University ACM Chapter is a <span className="highlight">student-led</span> group
              focused on advancing computer science and technology. We
              host <span className="highlight">workshops</span>, <span className="highlight">seminars</span>, and <span className="highlight">hackathons</span> to offer <span className="highlight">hands-on experience</span> and <span className="highlight">networking</span> for students passionate about
              technology.
            </p>
          </div>
        </div>

        <img
          src="about-right-img.jpg"
          alt="ACM members in session"
          className="about-image"
        />
      </div>
    </div>

    <footer className="about-footer">
      <div className="about-ticker">
        <div className="about-ticker-content">
          {Array(6).fill('ASSOCIATION FOR COMPUTING MACHINERY ◆ ').join('')}
        </div>
        <div className="about-ticker-content">
          {Array(6).fill('ASSOCIATION FOR COMPUTING MACHINERY ◆ ').join('')}
        </div>
      </div>
    </footer>
  </section>
);

export default AboutUs;
