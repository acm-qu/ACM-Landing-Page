import DesktopSplitter from './assets/splitter'
import classes from './styles.module.css'
import { JOIN_US, PARTNER, HIGHLIGHTS } from './constants'

import { motion } from 'motion/react'

const Hero = () => {

  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h2>Association for Computing Machinery</h2>
          <DesktopSplitter height={450} />
          <img className={classes.mobileSplitter} src="/hero_heading_splitter.svg" />
          <h1>Qatar University Chapter</h1>
          <p>Connecting students with the latest in technology and innovation.</p>
        </div>
        <div className={classes.heroCta}>
          <a href={PARTNER}>Partner with Us</a>
          <a href={JOIN_US}>Join Us</a>
        </div>
        <div className={classes.heroPartners}>
          <p>Trusted by</p>
          <div>
            <img src="/hero_qu_sa.png" height={54} alt="qatar-university-student-affairs" />
            <img src="/hero_acm.png" height={54} alt="acm" />
          </div>
        </div>
      </div>
      <div className={classes.heroHighlights}>
        <p className={classes.heroHighlightsTitle}>Highlights</p>
        <div className={classes.heroHighlightsContainer}>
          {HIGHLIGHTS.map(highlight => (
            <div className={classes.heroHighlight} key={highlight.title}>
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