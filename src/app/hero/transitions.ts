import { cubicBezier } from "motion"

export const subtitleTransition = {
  duration: 1,
  ease: cubicBezier(0, .75, .2, 1.01),
  delay: 1
}

export const highlightTransition = {
  duration: 1,
  ease: cubicBezier(0.00, 0.72, 0.23, 0.99),
  delay: 2
}

export const ctaAndTrustedByTransition = {
  duration: 1,
  ease: cubicBezier(0.00, 0.44, 0.39, 0.99),
  delay: 1.5
}