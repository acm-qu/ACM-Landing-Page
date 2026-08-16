import { cubicBezier } from "motion"

import { DELAY } from "./assets/transitions"

export const subtitleTransition = {
  duration: 1,
  ease: cubicBezier(0, .75, .2, 1.01),
  delay: DELAY
}

export const highlightTransition = {
  duration: 1,
  ease: cubicBezier(0.00, 0.72, 0.23, 0.99),
  delay: DELAY + 1
}

export const ctaAndTrustedByTransition = {
  duration: 1,
  ease: cubicBezier(0.00, 0.44, 0.39, 0.99),
  delay: DELAY + .5
}