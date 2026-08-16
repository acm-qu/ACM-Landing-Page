const MIN = 44, MAX = 110, RANGE = MAX - MIN, TRACK_W = 220

// Custom px-per-hour slider: teal fill, tick marks every 55px and a rotated
// square thumb. Pointer down or drag anywhere on the track sets the value.
const HeightSlider = ({ value, onChange, hair }) => {
  const fillW = Math.round(((value - MIN) / RANGE) * TRACK_W)

  const handleDown = e => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const setFrom = cx => {
      const f = Math.min(1, Math.max(0, (cx - rect.left) / rect.width))
      onChange(Math.round((MIN + f * RANGE) / 2) * 2)
    }
    setFrom(e.clientX)
    const mv = ev => setFrom(ev.clientX)
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up) }
    window.addEventListener("pointermove", mv)
    window.addEventListener("pointerup", up)
  }

  return (
    <div onPointerDown={handleDown} style={{ position: "relative", width: TRACK_W, height: 28, cursor: "pointer", touchAction: "none", flexShrink: 0 }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 13, height: 2, background: hair }} />
      <div style={{ position: "absolute", left: 0, top: 13, height: 2, width: fillW, background: "#3ae4d1" }} />
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{
          position: "absolute", top: 19, left: Math.min(TRACK_W - 1, i * 55), width: 1, height: 6,
          background: (i * 55) <= fillW ? "#42a7ae" : hair
        }} />
      ))}
      <div style={{
        position: "absolute", top: 7, left: Math.max(0, Math.min(TRACK_W - 14, fillW - 7)),
        width: 14, height: 14, background: "#3ae4d1", border: "2px solid #42a7ae",
        transform: "rotate(45deg)", boxSizing: "border-box", pointerEvents: "none"
      }} />
    </div>
  )
}

export default HeightSlider
