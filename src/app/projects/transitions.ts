import { cubicBezier } from "motion"

export const eyebrowTransition = {
  duration: 1,
  ease: cubicBezier(0, .75, .2, 1.01)
}

export const titleTransition = {
  duration: 1,
  ease: cubicBezier(0, .75, .2, 1.01),
  delay: 0.12
}

export const descriptionTransition = {
  duration: 1,
  ease: cubicBezier(0.00, 0.44, 0.39, 0.99),
  delay: 0.25
}

export const cardTransition = (index:number) => ({
  duration: 1,
  ease: cubicBezier(0.00, 0.72, 0.23, 0.99),
  delay: 0.35 + index * 0.15
})
