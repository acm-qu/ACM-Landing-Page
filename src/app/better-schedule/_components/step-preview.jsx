import classes from '../styles.module.css'
import Button from './button'
import Sheet from './sheet'
import HeightSlider from './slider'
import Stepper from './stepper'

// Step 3 — live sheet preview, height slider and PDF/JPEG export.
const StepPreview = ({ theme, step, allowed, accent, palette, geo, pph, custom, fontSel, tabLabel, onGo, onPph, onRecolor, onExportPdf, onExportJpeg }) => (
  <section style={{
    minHeight: "100vh", boxSizing: "border-box", display: "flex", flexDirection: "column",
    alignItems: "center", padding: "140px 24px 90px",
    animation: "bs-slide-in 0.5s cubic-bezier(0,.8,.2,1) both"
  }}>
    <Stepper step={step} allowed={allowed} onGo={onGo} theme={theme} />
    <h1 className={classes.title} style={{ color: theme.ink }}>Preview and export</h1>
    <p style={{ color: "var(--body)", fontSize: 16, lineHeight: 1.6, margin: 0, textAlign: "center", maxWidth: 560, textWrap: "pretty" }}>
      Click a class to recolor it. PDF prints to portrait A4; JPEG saves a 2x image.
    </p>
    <div style={{ display: "flex", gap: 14, alignItems: "center", margin: "28px 0 44px", flexWrap: "wrap", justifyContent: "center" }}>
      <Button variant="outline" size="sm" onClick={() => onGo(2)}>Back</Button>
      <Button variant="accent" onClick={onExportPdf}>Export as PDF</Button>
      <Button variant="solid" onClick={onExportJpeg}>Export as JPEG</Button>
    </div>
    {geo ? (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "-20px 0 38px" }}>
          <span style={{ fontSize: 14, color: "var(--body)", whiteSpace: "nowrap" }}>Schedule height</span>
          <HeightSlider value={pph} onChange={onPph} hair={theme.hair} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#42a7ae", border: "2px solid #42a7ae", borderRadius: 9999, padding: "2px 12px", whiteSpace: "nowrap" }}>{pph}px</span>
        </div>
        <div style={{ maxWidth: "100%", overflowX: "auto", padding: "4px 14px 16px 4px" }}>
          <Sheet geo={geo} theme={theme} accent={accent} palette={palette} custom={custom} onRecolor={onRecolor} fontSel={fontSel} />
        </div>
      </>
    ) : (
      <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 480, textAlign: "center", lineHeight: 1.6, textWrap: "pretty" }}>
        No classes were recognized in the pasted text. Go back to <button type="button" className={classes.link} onClick={() => onGo(1)}>step 01</button> and make sure you copied the whole schedule from the {tabLabel} page.
      </p>
    )}
  </section>
)

export default StepPreview
