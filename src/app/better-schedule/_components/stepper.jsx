const STEPS = [["Paste", 1], ["Customize", 2], ["Export", 3]]

// Mantine-style horizontal stepper. Steps 2–3 are clickable only once text exists.
const Stepper = ({ step, allowed, onGo, theme, animate = false }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 10,
    animation: animate ? "bs-rise 0.7s cubic-bezier(0,.8,.2,1) 0.1s both" : "none"
  }}>
    {STEPS.map(([label, n], i) => {
      const done = step > n, act = step === n
      return (
        <span key={n} style={{ display: "contents" }}>
          {i > 0 && <span style={{ width: 56, height: 1, background: step >= n ? "#3ae4d1" : theme.hair, flexShrink: 0 }} />}
          <button
            type="button"
            onClick={(n === 1 || allowed) ? () => onGo(n) : undefined}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{
              width: 34, height: 34, borderRadius: "50%", boxSizing: "border-box",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: done ? "#3ae4d1" : "transparent",
              border: act ? "2px solid #42a7ae" : done ? "2px solid #3ae4d1" : "1px solid " + theme.muted,
              color: done ? "#010000" : act ? "#42a7ae" : theme.muted,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700
            }}>
              {done ? "◆" : "0" + n}
            </span>
            <span style={{ fontSize: 14, color: (act || done) ? theme.ink : theme.muted, fontWeight: act ? 500 : 400, fontFamily: "var(--paragraph)", whiteSpace: "nowrap" }}>
              {label}
            </span>
          </button>
        </span>
      )
    })}
  </div>
)

export default Stepper
