import { motion } from 'motion/react'
import { Link } from 'react-router'
import { usePageTitle } from '../../hooks/use-page-title'
import { DESCRIPTION, PROJECTS, TITLE } from './content'
import { cardTransition, descriptionTransition, eyebrowTransition, titleTransition } from './transitions'
import classes from './styles.module.css'

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
)

const ArrowUpRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 7l-10 10" />
    <path d="M8 7h9v9" />
  </svg>
)

const ProjectCard = ({ project, index }) => {
  const internal = project.link.startsWith("/")
  const cta = (
    <>
      Check it out
      <ArrowUpRightIcon />
    </>
  )

  return (
    <motion.article
      className={classes.card}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={cardTransition(index)}
    >
      <div className={classes.image}>
        <span className={classes.imagePlaceholder} />
        <img src={project.image} alt={project.name} onError={e => { e.currentTarget.style.display = "none" }} />
      </div>
      <h3 className={classes.name}>{project.name}</h3>
      <div className={classes.body}>
        <p>{project.description}</p>
        <div className={classes.actions}>
          {internal
            ? <Link to={project.link} className={classes.cta}>{cta}</Link>
            : <a href={project.link} target="_blank" rel="noreferrer" className={classes.cta}>{cta}</a>}
          <a href={project.repo} target="_blank" rel="noreferrer" className={classes.repo} aria-label={project.name + " on GitHub"} title="GitHub">
            <GithubIcon />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  usePageTitle("Projects | ACM QU Chapter")

  return (
    <main className={classes.page}>
      <motion.p
        className={classes.eyebrow}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={eyebrowTransition}
      >
        What we build
      </motion.p>
      <motion.h1
        initial={{ clipPath: "inset(0 0 100% 0)", y: 28 }}
        animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        transition={titleTransition}
      >
        {TITLE}
      </motion.h1>
      <motion.p
        className={classes.description}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={descriptionTransition}
      >
        {DESCRIPTION}
      </motion.p>
      <div className={classes.grid}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </main>
  )
}

export default Projects
