import { motion } from 'motion/react'

import { useMemo, useEffect, useState } from 'react'

import DesktopSplitter from './assets/splitter'
import { SUBTITLE, TITLE, DESCRIPTION, CTA_1, CTA_2, CTA_1_LINK, CTA_2_LINK, HIGHLIGHTS } from './content'
import { subtitleTransition, highlightTransition, ctaAndTrustedByTransition } from './transitions'

import { truncate } from '../../util/truncate'
import { useResponsive } from '../../hooks/use-responsive'

import classes from './styles.module.css'

const Hero = () => {
  // State for the typing animation of the description
  const [typedDescription, setTypedDescription] = useState('')

  const descriptionWordCount = DESCRIPTION.split(' ').length
  const typingDuration = descriptionWordCount * 0.28 // 0.28 seconds per word

  const startDelay = 2200

  useEffect(() => {
    let currentIndex = 0
    let timeoutId

    const typeNextCharacter = () => {
      currentIndex += 1
      setTypedDescription(DESCRIPTION.slice(0, currentIndex))

      if (currentIndex < DESCRIPTION.length) {
        const durationPerCharacter = typingDuration / DESCRIPTION.length

        timeoutId = window.setTimeout(typeNextCharacter, durationPerCharacter * 1000)
      }
    }

    setTypedDescription('')
    timeoutId = window.setTimeout(typeNextCharacter, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  // Truncated highlights array
  const { isDesktop, isMobile, isBigTablet, isTablet } = useResponsive()

  const displayedHighlights = useMemo(() => (isBigTablet || isDesktop) ? truncate(HIGHLIGHTS, 3) : HIGHLIGHTS, [isBigTablet, isDesktop])

  return (
    <section id="hero" className={`${classes.hero} ${isMobile ? classes.mobile : isBigTablet ? classes.bigTablet : isTablet ? classes.tablet : ''}`}>
      <div className={classes.container}>
        <div className={`${classes.text} ${isMobile ? classes.mobile : ''}`}>
          <motion.h2
            className={classes.subtitle}
            initial={{ clipPath: "inset(0 0 100% 0)", y: 28 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={subtitleTransition}
          >
            {SUBTITLE}
          </motion.h2>
          <DesktopSplitter height={isMobile ? 250 : 450} />
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
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, ease: 'linear', repeat: Math.ceil(typingDuration), repeatType: 'loop', delay: startDelay / 1000 }}
            >
              |
            </motion.span>
          </motion.p>
        </div>
        <motion.div
          className={`${classes.ctaContainer} ${isMobile ? classes.mobile : ''}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ctaAndTrustedByTransition}
        >
          <a className={`${classes.cta} ${classes.one}`} target='_blank' href={CTA_1_LINK}>{CTA_1}</a>
          <a className={`${classes.cta} ${classes.two}`} target='_blank' href={CTA_2_LINK}>{CTA_2}</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ctaAndTrustedByTransition}
          className={`${classes.partners} ${isMobile ? classes.mobile : ''}`}>
          <p className={classes.label}>Trusted by</p>
          <div className={classes.images}>
            <img src="/hero/hero-qu-sa.png" height={54} alt="qatar-university-student-affairs" />
            <img src="/hero/hero-acm.png" height={54} alt="acm" />
          </div>
        </motion.div>
      </div>
      <div className={`${classes.highlights} ${isMobile ? classes.mobile : ''}`}>
        <motion.p
          className={classes.label}
          initial={{ clipPath: "inset(100% 0 0 0)", y: 28 }}
          animate={{ clipPath: "inset(0 0 0 0)", y: 0 }}
          transition={{
            ...subtitleTransition,
            delay: subtitleTransition.delay + 2
          }}>Highlights</motion.p>
        <div className={classes.container}>
          {displayedHighlights.map((highlight, i) => (
            <motion.div
              animate={{ scale: [0, 1, 1] }}
              transition={highlightTransition}
              className={classes.highlight} key={highlight.title}>
              <motion.div
                animate={{ height: ["100%", "100%", "0%"] }}
                transition={{ ...highlightTransition, delay: highlightTransition.delay + i * 0.3 }}
                className={classes.background} />
              <h3 className={classes.title}>{highlight.title}</h3>
              <p className={classes.description}>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero