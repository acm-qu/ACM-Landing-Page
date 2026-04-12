import { /* Internship, */ Footer, Suggestion } from "../components"
import Hero from "./hero/Hero"
import AboutUs from "./about-us/about-us"
import Navigation from "./navigation/Navigation"
import Team from "./team/Team"
import Events from "./events/Events"
import OurProjects from "./our-projects/our-projects"
import './globals.css'

function App() {

  return (
    <>
      <header>
        {/* Navigation - M. Al-Ansary */}
        <Navigation />
        {/* Hero section - Abdelhakim */}
        <Hero />
      </header>
      <main>
        {/* About Us - M. Al-Ansary */}
        <AboutUs />
        {/* Events - Subzi */}
        <Events />
        {/* Internship - Mariam */}

        {/* <Internship /> - Disabled until we actually have the program */}

        {/* Team - Mariam */}
        <Team />
        {/* Our Projects - Abdelhakim */}
        <OurProjects />
        {/* Suggestion - Abdelhakim */}
        <Suggestion />
      </main>
      <footer>
        {/* Footer - M. Al-Ansary */}
        <Footer />
      </footer>
    </>
  )
}

export default App
