import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { usePageTitle } from '../../hooks/use-page-title'
import { BREAK_MIN_GAP, PRESETS, THEMES } from './content'
import { exportSheetAsJpeg } from './export-jpeg'
import { buildSheetGeometry, countCourses } from './geometry'
import { applyRamadan, getBannerCourseData, getCourseData } from './parser'
import StepCustomize from './_components/step-customize'
import StepPaste from './_components/step-paste'
import StepPreview from './_components/step-preview'
import { MoonIcon, SunIcon } from './_components/icons'
import classes from './styles.module.css'

// Better.Schedule — 3-step schedule generator (Paste → Customize → Export).
// Standalone page with its own chrome, per the design handoff.
const BetterSchedule = () => {
  const [step, setStep] = useState(1)
  const [tab, setTab] = useState("myqu")
  const [text, setText] = useState("")
  const [dark, setDark] = useState(false)
  const [ramadan, setRamadan] = useState(false)
  const [fmt24, setFmt24] = useState(false)
  const [pph, setPph] = useState(66)
  const [showBreaks, setShowBreaks] = useState(true)
  const [fields, setFields] = useState({ code: false, name: true, timing: true, bcode: true, bname: false, room: true, icon: true })
  const [college, setCollege] = useState("ACM QU")
  const [font, setFont] = useState("ACM")
  const [custom, setCustom] = useState({})

  usePageTitle("Better.Schedule | ACM QU Chapter")

  // Scopes the print rules (and overscroll background) to this page only.
  useEffect(() => {
    document.body.classList.add("better-schedule-page")
    return () => document.body.classList.remove("better-schedule-page")
  }, [])
  useEffect(() => {
    document.body.classList.toggle("bs-dark", dark)
    return () => document.body.classList.remove("bs-dark")
  }, [dark])

  const theme = THEMES[dark ? "dark" : "light"]
  const preset = PRESETS[college] || PRESETS["ACM QU"]
  const allowed = text.trim().length > 0

  // Re-parsed from the raw text on every settings change.
  let sched = null
  if (allowed) {
    try {
      sched = tab === "banner" ? getBannerCourseData(text, false) : getCourseData(text, false)
      if (ramadan) sched = applyRamadan(sched)
    } catch (e) {
      console.error(e)
      sched = null
    }
  }
  const count = sched ? countCourses(sched) : 0

  const geo = step === 3 && sched && count > 0
    ? buildSheetGeometry({ sched, text, pph, fmt24, fields, palette: preset.colors, custom, showBreaks, breakMinGap: BREAK_MIN_GAP })
    : null

  const fontSel = {
    titleFontCss: font === "Code" ? "'JetBrains Mono', monospace" : font === "University" ? "'Helvetica Neue', sans-serif" : "'Lexend', sans-serif",
    bodyFontCss: font === "Code" ? "'JetBrains Mono', monospace" : font === "University" ? "'Helvetica Neue', sans-serif" : "'Poppins', sans-serif",
    boldW: font === "Code" ? 700 : 500
  }

  const goto = n => {
    window.scrollTo(0, 0)
    setStep(n)
  }

  const stepProps = {
    theme,
    step,
    allowed,
    onGo: goto
  }

  return (
    <div className={classes.page} style={{
      minHeight: "100vh", background: theme.pageBg, transition: "background-color 0.3s",
      "--ink": theme.ink, "--body": theme.body, "--muted": theme.muted, "--hair": theme.hair,
      "--inputbg": theme.inputBg, "--popbg": theme.popBg, fontFamily: "var(--paragraph)"
    }}>
      <nav style={{
        position: "fixed", top: 28, left: "50%", transform: "translate(-50%, 0)", zIndex: 50,
        display: "flex", alignItems: "center", gap: 40, padding: "13px 32px",
        borderBottom: "1px solid #010000", background: theme.navBg, transition: "background-color 0.3s"
      }}>
        <Link to="/projects" style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 800, fontSize: 17, color: dark ? "#3ae4d1" : theme.ink, whiteSpace: "nowrap", textDecoration: "none" }}>
          {"<Better.Schedule />"}
        </Link>
        <button
          type="button"
          title="Toggle dark mode"
          onClick={() => setDark(d => !d)}
          style={{
            cursor: "pointer", border: "2px solid #42a7ae", borderRadius: "50%", width: 32, height: 32,
            boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
            color: theme.ink, background: "transparent", flexShrink: 0, padding: 0
          }}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      {step === 1 && (
        <StepPaste
          {...stepProps}
          tab={tab}
          text={text}
          showNote={allowed && count === 0}
          onPickTab={setTab}
          onText={setText}
          onNext={() => goto(2)}
        />
      )}
      {step === 2 && (
        <StepCustomize
          {...stepProps}
          accent={preset.accent}
          ramadan={ramadan}
          fmt24={fmt24}
          showBreaks={showBreaks}
          fields={fields}
          college={college}
          font={font}
          onRamadan={() => setRamadan(r => !r)}
          onFmt24={() => setFmt24(f => !f)}
          onBreaks={() => setShowBreaks(b => !b)}
          onField={key => setFields(f => ({ ...f, [key]: !f[key] }))}
          onCollege={setCollege}
          onFont={setFont}
        />
      )}
      {step === 3 && (
        <StepPreview
          {...stepProps}
          accent={preset.accent}
          palette={preset.colors}
          geo={geo}
          pph={pph}
          custom={custom}
          fontSel={fontSel}
          tabLabel={tab === "banner" ? "myBanner" : "myQU"}
          onPph={setPph}
          onRecolor={(key, color) => setCustom(c => ({ ...c, [key]: color }))}
          onExportPdf={() => window.print()}
          onExportJpeg={() => { if (geo) exportSheetAsJpeg({ geo, theme, accent: preset.accent, font }) }}
        />
      )}
    </div>
  )
}

export default BetterSchedule
