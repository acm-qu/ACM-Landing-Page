import Hero from "./hero/hero"
import AboutUs from "./about-us/about-us"
import Team from "./team/team"
import Events from "./events/events"
import Suggestion from "./suggestion/suggestion"
import CurrentEvent from "./current-event/current-event"

const Home = () => {

  return (
    <>
      <header>
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
    </>
  )
}

export default Home
