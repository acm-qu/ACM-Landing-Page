import React from 'react';

const HeroSplitter = ({ height }) => (
  <svg
    width={height*(139/51)}
    height={height}
    viewBox="-4 -15 1668 612"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className='hero-mobile-hide'
  >
    {/* ---- Curved Path ---- */}
    <path
      d="M1084,289C1024,150,811.5,152,811.5,152C811.5,152,1104,169,1347,100"
      fill="none"
      stroke="rgb(55, 54, 55)"
      strokeWidth={2}

    />

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
          href="/hero_ladies.jpg"
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
          href="/hero_gentlemen.jpg"
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
        <path d="M3 0L6 3L3 6L0 3Z" fill="#373637" />
      </marker>
    </defs>

    {/* First image */}
    <rect
      x="822"
      y="260"
      width="464"
      height="310"
      fill="url(#img-pattern-1)"
      filter="url(#filter-shadow-1)"
    />
    {/* First dashed border */}
    <rect
      x="822"
      y="260"
      width="464"
      height="310"
      fill="none"
      stroke="rgb(55, 54, 55)"
      strokeWidth={4}
      strokeDasharray="12 12"
    />

    {/* Second image */}
    <rect
      x="1338"
      y="0"
      width="311"
      height="311"
      fill="url(#img-pattern-2)"
      filter="url(#filter-shadow-2)"
    />
    {/* Second dashed border */}
    <rect
      x="1338"
      y="0"
      width="311"
      height="311"
      fill="none"
      stroke="rgb(55, 54, 55)"
      strokeWidth={4}
      strokeDasharray="12 12"
    />

    {/* Straight arrow line */}
    <path
      d="M0,151.99L810,152"
      fill="none"
      stroke="rgb(55, 54, 55)"
      strokeWidth={2}
      markerStart="url(#circle-marker)"
      markerEnd="url(#diamond-marker)"
    />
  </svg>
);

export default HeroSplitter;
