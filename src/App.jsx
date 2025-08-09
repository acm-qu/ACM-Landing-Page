import { Navigation, Hero, AboutUs, Events, Internship, Team , Footer, Suggestion} from "./components"
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
        {/* Intenship - Mariam */}
        <Internship />
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
