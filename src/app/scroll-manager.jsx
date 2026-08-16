import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// Router navigations don't touch scroll on their own. Same-page hash links
// scroll smoothly (the global scroll-behavior), hash links from another page
// jump instantly like a native page load, and plain route changes reset to
// the top. Keyed on location.key so repeating the same hash link re-scrolls,
// like a native anchor.
const ScrollManager = () => {

  const { key, pathname, hash } = useLocation()
  const lastKey = useRef(null)
  const lastPathname = useRef(null)

  useEffect(() => {
    const isFirst = lastKey.current === null
    if (lastKey.current === key) return
    const samePage = lastPathname.current === pathname
    lastKey.current = key
    lastPathname.current = pathname
    if (hash) {
      // A smooth scroll started in the same commit as a fresh page mount gets
      // cancelled by its first paint, so cross-page jumps are instant
      document.getElementById(hash.slice(1))?.scrollIntoView(samePage ? undefined : { behavior: "instant" })
    } else if (!isFirst) {
      // First render keeps the browser's own scroll restoration
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [key, pathname, hash])

  return null
}

export default ScrollManager
