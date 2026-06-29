import Hero from "./hero/hero"
import AboutUs from "./about-us/about-us"
import Navigation from "./navigation/navigation"
import Team from "./team/team"
import Events from "./events/events"
import Suggestion from "./suggestion/suggestion"
import Footer from "./footer/footer"
import CurrentEvent from "./current-event/current-event"
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
        {/* Current Event - Mariam */}
        <CurrentEvent />

        {/* Team - Mariam */}
        <Team />
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
