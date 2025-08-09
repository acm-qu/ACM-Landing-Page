// Navigation.jsx
import { useState } from 'react'
import '../styles/navigation.css'

const Navigation = () => {

  const [active, setActive] = useState(false)

  const handleToggle = () => setActive(p => !p)

  return (
    <div className="nav-container">
      <nav className="navigation">
        <a href="#hero" className="navigation-logo">{"<ACM.QU />"}</a>
        <ul className="navigation-links desktop">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#team">Suggest</a></li>
        </ul>
        <a href="https://quqa.campuslabs.com/engage/organization/acm" target='_blank' className="join desktop">Join Us!</a>
        <div onClick={handleToggle} className={'mobile toggle ' + (active ? "active" : "")}></div>
      </nav>
      <div className={'mobile-navigation ' + (active ? "active" : "")}>
        <ul className="navigation-links">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#team">Suggest</a></li>
        </ul>
        <a href="https://quqa.campuslabs.com/engage/organization/acm" target='_blank' className="join">Join Us!</a>
      </div>
    </div>
  )
}



export default Navigation

