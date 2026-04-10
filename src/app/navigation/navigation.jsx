// Navigation.jsx
import { useState } from 'react'
import { LINKS } from './content'
import './navigation.css'

const Navigation = () => {

  const [active, setActive] = useState(false)

  const handleToggle = () => setActive(p => !p)

  return (
    <div className="nav-container">
      <nav className="navigation">
        <a href="#hero" className="navigation-logo">{"<ACM.QU />"}</a>
        <ul className="navigation-links desktop">
          {LINKS.map(link => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
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
              <a href={link.href} onClick={handleToggle}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a href="https://www.instagram.com/acm.qu/" onClick={handleToggle} target='_blank' className="join">Check our IG Page</a>
      </div>
    </div>
  )
}



export default Navigation

