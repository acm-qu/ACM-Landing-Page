// Navigation.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { LINKS } from './content'
import './navigation.css'
import { motion, AnimatePresence, cubicBezier } from 'motion/react'

const Navigation = () => {

  const [active, setActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [show, setShow] = useState(true)

  const handleToggle = () => setActive(p => !p)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= scrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setScrollY(window.scrollY)
      console.log(window.scrollY, scrollY)
    })

    return () => window.removeEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })

  }, [window.scrollY, scrollY])

  return (
    <AnimatePresence>
      {show && 
        <motion.div
          initial={{ marginTop: -67, opacity: 0 }}
          whileInView={{ marginTop: 0, opacity: 1 }}
          exit={{ marginTop: -67, opacity: 0 }}
          transition={{
            duration: 1,
            ease: cubicBezier(0.00, 0.97, 0.42, 1.00),
          }}
          className="nav-container">
          <nav className="navigation">
            <Link to="/" className="navigation-logo">{"<ACM.QU />"}</Link>
            <ul className="navigation-links desktop">
              {LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <a href="https://www.instagram.com/acm.qu/" target='_blank' className="join desktop">Check our IG Page</a>
            <div onClick={handleToggle} className={'mobile toggle ' + (active ? "active" : "")}></div>
          </nav>
          <div className={'mobile-navigation ' + (active ? "active" : "")}>
            <div className='filter' />
            <ul className="navigation-links">
              {LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href} onClick={handleToggle}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <a href="https://www.instagram.com/acm.qu/" onClick={handleToggle} target='_blank' className="join">Check our IG Page</a>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}



export default Navigation
