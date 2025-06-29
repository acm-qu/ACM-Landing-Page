import '../styles/hero.css'
import HeroSplitter from '../assets/HeroSplitter'

const Hero = () => {

  const joinUsLink = "https://docs.google.com/forms/d/e/1FAIpQLSeMDk3-5B0A2m6yAqwkqPPebE9fP1FXSupT32dYmOeeUHsvbA/closedform"
  const partnerLink = "https://www.linkedin.com/company/acm-qu/"

  const highlights = [
    {
      title: "Internship",
      description: "Solve real-world problems through hands-on projects in AI, data science, and more. Open to students after freshman year. No previous internship experience needed! Learn, grow, and build your future."
    },
    {
      title: "Winterbyte",
      description: "Gear up for the ultimate coding adventure! Solve, code, and master challenges over six action-packed sessions this winter, starting January 5th!"
    },
    {
      title: "Road To Big Tech",
      description: "This dynamic discussion explored how higher education could pave the way to exciting career opportunities at top tech companies."
    },
  ]

  return (
    <section id="hero">
      <div>

        <div id="hero-text">
          <h2>Association for Computing Machinery</h2>
          <HeroSplitter height={450} />
          <img id="hero-splitter" src="/hero_heading_splitter.svg" />
          <h1>Qatar University Chapter</h1>
          <p>Connecting students with the latest in technology and innovation.</p>
        </div>
        <div id="hero-cta">
          <a href={partnerLink}>Partner with Us</a>
          <a href={joinUsLink}>Join Us</a>
        </div>
        <div id="hero-partners">
          <p>Trusted by</p>
          <div>
            <img src="/hero_qu_sa.png" height={54} alt="qatar-university-student-affairs" />
            <img src="/hero_acm.png" height={54} alt="acm" />
          </div>
        </div>
      </div>
      <div id="hero-highlights">
        <p id="hero-highlights-title">Highlights</p>
        <div id="hero-highlights-container">
          {highlights.map(highlight => (
            <div className="hero-highlight">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero