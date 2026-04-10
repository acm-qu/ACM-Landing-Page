import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { curvesTransition, filteredImageTransition, imageTransition, lineTransition, markerTransition, rotatingDashTransition, opacityTransition } from "./transitions";
import { useResponsive } from "../../hooks/use-responsive";

const Splitter = ({ height }) => {

  const ASPECT_RATIO = 139 / 51;
  const { isDesktop } = useResponsive();

  return (
    <svg
      minWidth={height * ASPECT_RATIO}
      height={height}
      viewBox="-4 -15 1668 612"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ---- Curved Path ---- */}
      <AnimatePresence>
        {isDesktop && 
        <>
          <motion.path
            d="M811.5,152C811.5,152,1104,169,1347,100"
            fill="none"
            stroke="rgb(55, 54, 55)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={curvesTransition}
            exit={{ pathLength: 0, transition: { delay: 0 } }}
          />
          <motion.path
            d="M811.5,152 C811.5,152,1024,150,1084,289"
            fill="none"
            stroke="rgb(55, 54, 55)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={curvesTransition}
            exit={{ pathLength: 0, transition: { delay: 0 } }}
          />
        </>}
      </AnimatePresence>

      {/* ---- First Image + Shadow + Dashed Border ---- */}
      <defs >
        <filter
          id="filter-shadow-1"
          x="-0.056"
          y="-0.058"
          width="1.103"
          height="1.155"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="bg" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-4" dy="4" />
          <feGaussianBlur stdDeviation="0" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2157 0 0 0 0 0.2118 0 0 0 0 0.2157 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="bg" result="blend1" />
          <feBlend mode="normal" in="SourceGraphic" in2="blend1" />
        </filter>

        <pattern
          id="img-pattern-1"
          patternUnits="userSpaceOnUse"
          x="822"
          y="260"
          width="464"
          height="310"
        >
          <image
            href="/hero/hero-ladies.jpg"
            width="464"
            height="310"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
        <pattern
          id="img-pattern-filtered-1"
          patternUnits="userSpaceOnUse"
          x="822"
          y="260"
          width="464"
          height="310"
        >
          <image
            href="/hero/hero-ladies-filtered.jpg"
            width="464"
            height="310"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>

        {/* ---- Second Image Pattern + Shadow ---- */}
        <filter
          id="filter-shadow-2"
          x="-0.084"
          y="-0.058"
          width="1.154"
          height="1.154"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="bg" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-4" dy="4" />
          <feGaussianBlur stdDeviation="0" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2157 0 0 0 0 0.2118 0 0 0 0 0.2157 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="bg" result="blend2" />
          <feBlend mode="normal" in="SourceGraphic" in2="blend2" />
        </filter>

        <pattern
          id="img-pattern-2"
          patternUnits="userSpaceOnUse"
          x="1338"
          y="0"
          width="311"
          height="311"
        >
          <image
            href="/hero/hero-gentlemen.jpg"
            width="311"
            height="311"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>

        <pattern
          id="img-pattern-filtered-2"
          patternUnits="userSpaceOnUse"
          x="1338"
          y="0"
          width="311"
          height="311"
        >
          <image
            href="/hero/hero-gentlemen-filtered.jpg"
            width="311"
            height="311"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>

        {/* ---- Arrow Markers ---- */}
        <marker
          id="circle-marker"
          viewBox="0 0 6 6"
          refX="3"
          refY="3"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <circle cx="3" cy="3" r="3" fill="#373637" />
        </marker>
        <marker
          id="diamond-marker"
          viewBox="0 0 6 6"
          refX="3"
          refY="3"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <motion.path
            d="M3 0L6 3L3 6L0 3Z"
            fill="#373637"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={markerTransition}
            style={{ transformOrigin: "3px 3px" }}
          />
        </marker>
      </defs>
      <AnimatePresence>
        {isDesktop && 
          <>
            {/* First image */}
            <motion.rect
              key="filtered-1"
              x="822"
              y="260"
              width="464"
              initial={{ height: 0 }}
              animate={{ height: 310 }}
              transition={filteredImageTransition}
              fill="url(#img-pattern-filtered-1)"
              filter="url(#filter-shadow-1)"
              exit={{
                height: 0,
                transition: {
                  delay: 0
                }
              }}
            />
            <motion.rect
              key="image-1"
              x="822"
              y="260"
              width="464"
              initial={{ height: 0 }}
              animate={{ height: 310 }}
              transition={imageTransition}
              fill="url(#img-pattern-1)"
              filter="url(#filter-shadow-1)"
              exit={{
                height: 0,
                transition: {
                  delay: 0
                }
              }}
            />
            {/* First dashed border */}
            <motion.rect
              x="822"
              y="260"
              width="464"
              fill="none"
              stroke="rgb(55, 54, 55)"
              strokeWidth={4}
              strokeDasharray="12 12"
              initial={{ strokeDashoffset: 24, opacity: 0, height: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1, height: 310 }}
              transition={{
                strokeDashoffset: rotatingDashTransition,
                opacity: opacityTransition,
                height: filteredImageTransition
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                delay: 0
              }
            }}
            />

            {/* Second image */}
            <motion.rect
              x="1338"
              y="0"
              width="311"
              initial={{ height: 0 }}
              animate={{ height: 311 }}
              transition={filteredImageTransition}
              fill="url(#img-pattern-filtered-2)"
            filter="url(#filter-shadow-2)"
            exit={{
              height: 0,
              transition: {
                delay: 0
              }
            }}
            />
            <motion.rect
              x="1338"
              y="0"
              width="311"
              initial={{ height: 0 }}
              animate={{ height: 311 }}
              transition={imageTransition}
              fill="url(#img-pattern-2)"
            filter="url(#filter-shadow-2)"
            exit={{
              height: 0,
              transition: {
                delay: 0
              }
            }}
            />
            {/* Second dashed border */}
            <motion.rect
              x="1338"
              y="0"
              width="311"
              fill="none"
              stroke="rgb(55, 54, 55)"
              strokeWidth={4}
              strokeDasharray="12 12"
              initial={{ strokeDashoffset: 24, opacity: 0, height: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1, height: 311 }}
              transition={{
                strokeDashoffset: rotatingDashTransition,
                opacity: opacityTransition,
                height: filteredImageTransition
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                delay: 0
              }
            }}
            />
          </>
        }
      </AnimatePresence>

      {/* Straight arrow line */}
      <motion.path
        d="M0,151.99L810,152"
        fill="none"
        stroke="rgb(55, 54, 55)"
        strokeWidth={2}
        markerStart="url(#circle-marker)"
        markerEnd="url(#diamond-marker)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={lineTransition}
      />
    </svg>
  )
};

export default Splitter;
