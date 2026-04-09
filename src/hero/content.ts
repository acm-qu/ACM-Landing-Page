import type { IHighlight } from "./types"

const SUBTITLE = "Association for Computing Machinery"
const TITLE = "Qatar University Chapter"
const DESCRIPTION = "Connecting students with the latest in technology and innovation."

const CTA_1 = "Partner With Us"
const CTA_1_LINK = "https://www.linkedin.com/company/acm-qu/"

const CTA_2 = "Join Us"
const CTA_2_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeMDk3-5B0A2m6yAqwkqPPebE9fP1FXSupT32dYmOeeUHsvbA/closedform"

const HIGHLIGHTS: readonly IHighlight[] = [
  {
    title: "ACM X Camelcode - CTF",
    description: "Collaborated with CamelCode to deliver interactive sessions on Capture The Flag (CTF) competitions, equipping students with essential cybersecurity skills and hands-on experience in ethical hacking."
  },
  {
    title: "Winterbyte",
    description: "Gear up for the ultimate coding adventure! Solve, code, and master challenges over six action-packed sessions this winter, starting January 5th!"
  },
  {
    title: "Road To Big Tech",
    description: "This dynamic discussion explored how higher education could pave the way to exciting career opportunities at top tech companies."
  },
] as const

export { SUBTITLE, TITLE, DESCRIPTION, CTA_1, CTA_1_LINK, CTA_2, CTA_2_LINK, HIGHLIGHTS }