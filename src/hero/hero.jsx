import DesktopSplitter from './assets/splitter'
import classes from './styles.module.css'
import { useEffect, useState } from 'react'

import { subtitleTransition } from './transitions'

import { SUBTITLE, TITLE, DESCRIPTION, CTA_1, CTA_2 } from './content'
import { JOIN_US, PARTNER, HIGHLIGHTS } from './constants'

import { motion } from 'motion/react'

const Hero = () => {
  const [typedDescription, setTypedDescription] = useState('')

  useEffect(() => {
    let currentIndex = 0
    let timeoutId

    const startDelay = 2200
    const typeNextCharacter = () => {
      currentIndex += 1
      setTypedDescription(DESCRIPTION.slice(0, currentIndex))

      if (currentIndex < DESCRIPTION.length) {
        timeoutId = window.setTimeout(typeNextCharacter, 28)
      }
    }

    setTypedDescription('')
    timeoutId = window.setTimeout(typeNextCharacter, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.text}>
          <motion.h2
            className={classes.subtitle}
            initial={{ clipPath: "inset(0 0 100% 0)", y: 28 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={subtitleTransition}
          >
            {SUBTITLE}
          </motion.h2>
          <DesktopSplitter height={450} />
          <img className={classes.mobileSplitter} src="/hero_heading_splitter.svg" />
          <motion.h1
            initial={{ clipPath: "inset(0 0 100% 0)", y: -16 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={subtitleTransition}
            className={classes.title}>{TITLE}</motion.h1>
          <motion.p
            className={classes.description}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.2 }}
          >
            {typedDescription}
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, ease: 'linear', repeat: 5, repeatType: 'loop' }}
            >
              |
            </motion.span>
          </motion.p>
        </div>
        <div className={classes.heroCta}>
          <a href={PARTNER}>{CTA_2}</a>
          <a href={JOIN_US}>{CTA_1}</a>
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