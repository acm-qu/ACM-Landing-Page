import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router'
import SiteLayout from './layout'
import Home from './home'
import Projects from './projects/projects'
import ScrollManager from './scroll-manager'
import './globals.css'

// Navigate only handles in-app paths, so external URLs need a real redirect
function ExternalRedirect({ to }) {
  window.location.replace(to)
  return null
}

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
          <Route path="projects/better-schedule" element={<ExternalRedirect to="https://better-schedule.qu.acm.org" />} />
          <Route path="projects/csewiki" element={<ExternalRedirect to="https://csewiki.qu.acm.org" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
