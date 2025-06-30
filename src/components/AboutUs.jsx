import '../styles/about-us.css';

const AboutUs = () => (
  <section className="about-us" id="mission">
    <header className="about-header">
      <h2>About us</h2>
    </header>

    <div className="about-grid">
      <img
        src="about-left-img.jpg"
        alt="ACM members collaborating"
        className="about-image"
      />

      <div className="about-center">
        <img src="about-us-logo.png" alt="acm" className="about-logo" />

        <div className="about-keywords">
          <span>workshops</span>
          <span>seminars</span>
          <span>experience</span>
          <span>networking</span>
          <span>hackathons</span>
          <span>student-led</span>
          <span>hands-on</span>
        </div>
      </div>

      <img
        src="about-right-img.jpg"
        alt="ACM members in session"
        className="about-image"
      />
    </div>

    <footer className="about-footer">
      <div className="about-ticker">
        {Array(4).fill('ASSOCIATION FOR COMPUTING MACHINERY ◆ ').join('')}
      </div>
    </footer>
  </section>
);

export default AboutUs;
