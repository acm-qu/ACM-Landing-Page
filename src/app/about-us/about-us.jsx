import './about-us.css';
import { Fragment } from 'react/jsx-runtime';
import { ABOUT_US } from './content';
import { parseAboutUs } from '../../util';

const AboutUs = () => {
  
  const aboutUs = parseAboutUs(ABOUT_US);

  return (
  <section className="about-us" id="mission">
    <div className="about-header">
      <h2>About us</h2>
    </div>

    <div className="about-content">
      <div className="about-grid">
        <img
          src="/about-us/about-left-img.jpg"
          alt="ACM members collaborating"
          className="about-image"
        />

        <div className="about-center">
          <img src="/about-us/about-us-logo.png" alt="acm" className="about-logo" />
          <div className="about-description">
            <p>
              {aboutUs.map((word, i) => <Fragment key={i}>{word} </Fragment>)}
            </p>
          </div>
        </div>

        <img
          src="/about-us/about-right-img.jpg"
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
  )
};

export default AboutUs;
