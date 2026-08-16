import { Outlet } from 'react-router'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

// Shared chrome for the main site. Better.Schedule ships its own and lives
// outside this layout.
const SiteLayout = () => {

  return (
    <>
      {/* Navigation - M. Al-Ansary */}
      <Navigation />
      <Outlet />
      <footer>
        {/* Footer - M. Al-Ansary */}
        <Footer />
      </footer>
    </>
  )
}

export default SiteLayout
