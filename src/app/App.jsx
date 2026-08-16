import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import SiteLayout from './layout'
import Home from './home'
import Projects from './projects/projects'
import ScrollManager from './scroll-manager'
import './globals.css'

// Lazy so the wizard's code and fonts only load when the route is visited
const BetterSchedule = lazy(() => import('./better-schedule/better-schedule'))

function App() {

  return (
    <>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          {/* Standalone: ships its own chrome per the design handoff */}
          <Route path="projects/better-schedule" element={<BetterSchedule />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
