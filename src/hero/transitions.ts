import { cubicBezier } from "motion"

const subtitleTransition = {
  duration: 1,
  ease: cubicBezier(0, .75, .2, 1.01),
  delay: 1.5
}

export {
  subtitleTransition
}