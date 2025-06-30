// Navigation.jsx
import '../styles/navigation.css'

const Navigation = () => (
  <div className="nav-container">
    <nav className="navigation">
      <div className="navigation-logo">acm</div>

      <ul className="navigation-links">
        <li><a href="#mission">Mission</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#internship">Internship</a></li>
        <li><a href="#team">Team</a></li>
      </ul>

      <a href="#join" className="join">Join Us!</a>
    </nav>
  </div>
)

export default Navigation

