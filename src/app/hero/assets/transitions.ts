import { cubicBezier } from "motion";

const DELAY = 1

const lineTransition = {
  duration: DELAY,
  ease: cubicBezier(.34, -0.02, .99, .51),
}

const markerTransition = {
  duration: 1,
  ease: cubicBezier(0, .99, .07, 1),
  delay: DELAY
}

const curvesTransition = {
  duration: 1.5,
  ease: cubicBezier(0, .99, .07, 1),
  delay: DELAY
}

const rotatingDashTransition = {
  duration: 4,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
  delay: DELAY
}

const filteredImageTransition = {
  duration: 1,
  ease: cubicBezier(.88, -0.01, .12, 1),
  delay: DELAY
}

const imageTransition = {
  ...filteredImageTransition,
  delay: DELAY + 0.5
}

const opacityTransition = {
  delay: DELAY,
  duration: 0.5,
}

export {
  lineTransition,
  markerTransition,
  curvesTransition,
  rotatingDashTransition,
  filteredImageTransition,
  imageTransition,
  opacityTransition
}