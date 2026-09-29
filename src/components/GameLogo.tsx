import React from 'react';

interface GameLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
}

const SIZE_MAP = {
  xs: 'w-7 h-7',
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-28 h-28 sm:w-32 sm:h-32',
  xl: 'w-48 h-48 sm:w-64 sm:h-64',
};

export const GameLogo: React.FC<GameLogoProps> = ({
  size = 'md',
  className = '',
  showGlow = true,
}) => {
  const dimensionClass = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div className={`relative inline-block select-none group ${dimensionClass} ${className}`}>
      {/* Ambient Outer Glow */}
      {showGlow && (
        <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-cyan-500 rounded-[26%] blur-md opacity-50 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Main App Icon Squircle */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full relative z-10 drop-shadow-2xl rounded-[24%] overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background Gradients */}
          <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="65%" stopColor="#0a0f1d" />
            <stop offset="100%" stopColor="#04060c" />
          </radialGradient>

          {/* Fire Speed Gradient */}
          <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffea00" />
            <stop offset="45%" stopColor="#ff7b00" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          {/* Ice Tension Gradient */}
          <linearGradient id="tensionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Gold Star & Coin Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Purple Gem Gradient */}
          <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="60%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#701a75" />
          </linearGradient>

          {/* Red Car & Prohibition Gradient */}
          <linearGradient id="redProhibit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          {/* Speedometer Gauge Arc */}
          <linearGradient id="gaugeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>

          {/* Glass Highlight */}
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Soft Shadow */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Squircle App Background */}
        <rect width="500" height="500" rx="110" fill="url(#bgGlow)" />

        {/* Cyber / Arcade Subsurface Grid */}
        <g opacity="0.12" stroke="#38bdf8" strokeWidth="1">
          <line x1="0" y1="100" x2="500" y2="100" />
          <line x1="0" y1="200" x2="500" y2="200" />
          <line x1="0" y1="300" x2="500" y2="300" />
          <line x1="0" y1="400" x2="500" y2="400" />
          <line x1="100" y1="0" x2="100" y2="500" />
          <line x1="200" y1="0" x2="200" y2="500" />
          <line x1="300" y1="0" x2="300" y2="500" />
          <line x1="400" y1="0" x2="400" y2="500" />
        </g>

        {/* ---------------- 1. TOP CENTER: PROHIBITED RED CAR ---------------- */}
        <g transform="translate(250, 110)" filter="url(#shadow)">
          {/* Subtle Red Aura */}
          <circle cx="0" cy="0" r="72" fill="#dc2626" opacity="0.25" />

          {/* The Red Sports Car */}
          <g transform="translate(0, 5)">
            {/* Shadow */}
            <ellipse cx="0" cy="30" rx="42" ry="10" fill="#000000" opacity="0.5" />
            {/* Wheels */}
            <rect x="-38" y="16" width="10" height="20" rx="4" fill="#171717" />
            <rect x="28" y="16" width="10" height="20" rx="4" fill="#171717" />
            {/* Car Body */}
            <path
              d="M-36,22 C-38,10 -25,-12 -18,-18 C-8,-23 8,-23 18,-18 C25,-12 38,10 36,22 C34,26 26,28 0,28 C-26,28 -34,26 -36,22 Z"
              fill="#ef4444"
            />
            {/* Roof & Windshield */}
            <path
              d="M-20,0 C-16,-15 -4,-18 0,-18 C4,-18 16,-15 20,0 C14,1 -14,1 -20,0 Z"
              fill="#0f172a"
            />
            {/* Front Headlights */}
            <polygon points="-28,14 -18,14 -22,19 -30,18" fill="#e0f2fe" opacity="0.9" />
            <polygon points="28,14 18,14 22,19 30,18" fill="#e0f2fe" opacity="0.9" />
            {/* Front Grille */}
            <rect x="-12" y="18" width="24" height="6" rx="2" fill="#111827" />
          </g>

          {/* Prohibition Circle & Diagonal Slash */}
          <circle cx="0" cy="0" r="62" fill="none" stroke="url(#redProhibit)" strokeWidth="13" />
          <line
            x1="-44"
            y1="-44"
            x2="44"
            y2="44"
            stroke="url(#redProhibit)"
            strokeWidth="13"
            strokeLinecap="round"
          />
        </g>

        {/* ---------------- 2. SCATTERED GAME OBJECTS ---------------- */}

        {/* Top-Left: Glowing Star */}
        <g transform="translate(68, 140)">
          {/* Star rays */}
          <line x1="-3" y1="-42" x2="-3" y2="-30" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="-26" x2="22" y2="-18" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
          <line x1="-34" y1="-20" x2="-25" y2="-15" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
          {/* Star Polygon */}
          <polygon
            points="0,-32 10,-10 32,-8 16,8 20,30 0,18 -20,30 -16,8 -32,-8 -10,-10"
            fill="url(#goldGrad)"
            filter="url(#shadow)"
          />
          {/* Star inner shine */}
          <polygon points="0,-24 7,-8 24,-6 12,6 15,22 0,13" fill="#ffffff" opacity="0.4" />
        </g>

        {/* Top-Right: Soccer Ball */}
        <g transform="translate(430, 126)">
          <circle cx="0" cy="0" r="38" fill="#f8fafc" filter="url(#shadow)" />
          {/* Cyan Glow Rim */}
          <circle cx="0" cy="0" r="41" fill="none" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
          {/* Pentagons */}
          <polygon points="0,-12 11,-4 7,10 -7,10 -11,-4" fill="#0f172a" />
          <polygon points="0,-38 8,-28 -8,-28" fill="#0f172a" />
          <polygon points="34,-12 25,-4 33,6" fill="#0f172a" />
          <polygon points="-34,-12 -25,-4 -33,6" fill="#0f172a" />
          <polygon points="18,34 11,24 23,20" fill="#0f172a" />
          <polygon points="-18,34 -11,24 -23,20" fill="#0f172a" />
        </g>

        {/* Bottom-Left: Cartoon Tree */}
        <g transform="translate(68, 380)">
          {/* Trunk */}
          <rect x="-8" y="10" width="16" height="30" rx="3" fill="#78350f" />
          {/* Foliage Clouds */}
          <circle cx="0" cy="-6" r="26" fill="#22c55e" filter="url(#shadow)" />
          <circle cx="-16" cy="4" r="20" fill="#16a34a" />
          <circle cx="16" cy="4" r="20" fill="#15803d" />
          <circle cx="-2" cy="-14" r="18" fill="#4ade80" opacity="0.6" />
        </g>

        {/* Bottom-Left-Center: Gold Star Coin */}
        <g transform="translate(182, 400)">
          <circle cx="0" cy="0" r="38" fill="url(#goldGrad)" filter="url(#shadow)" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.8" />
          {/* Coin Star */}
          <polygon
            points="0,-18 5,-5 18,-5 8,4 12,17 0,9 -12,17 -8,4 -18,-5 -5,-5"
            fill="#ca8a04"
          />
        </g>

        {/* Middle-Right: Purple Gem */}
        <g transform="translate(440, 275)">
          <polygon
            points="0,-28 26,-8 18,24 -18,24 -26,-8"
            fill="url(#gemGrad)"
            filter="url(#shadow)"
          />
          <polygon points="0,-28 10,-8 0,24 -10,-8" fill="#fae8ff" opacity="0.3" />
          <polygon points="0,-28 26,-8 10,-8" fill="#ffffff" opacity="0.5" />
        </g>

        {/* Bottom-Right: Red Bomb with Sparking Fuse */}
        <g transform="translate(440, 385)">
          {/* Fuse Cap & String */}
          <rect x="-6" y="-36" width="12" height="6" rx="2" fill="#71717a" />
          <path d="M0,-36 Q-12,-48 0,-56" fill="none" stroke="#d97706" strokeWidth="3" />
          {/* Fuse Spark */}
          <polygon points="0,-56 6,-64 0,-70 -6,-64" fill="#fbbf24" />
          <polygon points="0,-56 8,-58 0,-62 -8,-58" fill="#ef4444" />
          {/* Bomb Sphere */}
          <circle cx="0" cy="-6" r="32" fill="#dc2626" filter="url(#shadow)" />
          <circle cx="-10" cy="-16" r="8" fill="#ffffff" opacity="0.4" />
        </g>

        {/* ---------------- 3. CENTER: LOGO TYPOGRAPHY ---------------- */}

        {/* Word: SPEED (Fiery angled brushed typography) */}
        <g transform="translate(230, 222) rotate(-5)">
          {/* Speed horizontal cut swooshes behind */}
          <path d="M-190,-8 L-80,-8" stroke="#f97316" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
          <path d="M-170,12 L-60,12" stroke="#eab308" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
          <path d="M-150,30 L-40,30" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

          {/* Deep 3D Shadow Offset */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#18181b"
            fontSize="78"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="-2px"
            dx="5"
            dy="8"
          >
            SPEED
          </text>
          {/* Outer stroke */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="none"
            stroke="#451a03"
            strokeWidth="12"
            strokeLinejoin="round"
            fontSize="78"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="-2px"
          >
            SPEED
          </text>
          {/* Main Gradient Face */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="url(#speedGrad)"
            fontSize="78"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="-2px"
          >
            SPEED
          </text>
        </g>

        {/* Sub-line: "N" + Speedometer Gauge */}
        <g transform="translate(250, 252)">
          {/* Speedometer Arc */}
          <path
            d="M5,-8 A 22 22 0 1 1 48,-8"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Dial Needle */}
          <line x1="27" y1="-8" x2="38" y2="-22" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="27" cy="-8" r="4" fill="#ef4444" />

          {/* "N" Character */}
          <text
            x="-4"
            y="0"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="32"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            filter="url(#shadow)"
          >
            N
          </text>
          {/* Speed dashes on sides of N */}
          <line x1="-38" y1="-10" x2="-18" y2="-10" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <line x1="-34" y1="-2" x2="-14" y2="-2" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Word: TENSION (Icy cyan dimensional block typography) */}
        <g transform="translate(245, 320) rotate(-3)">
          {/* Deep Extrusion Shadow */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#082f49"
            fontSize="68"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="2px"
            dx="4"
            dy="7"
          >
            TENSION
          </text>
          {/* Outer Border */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="none"
            stroke="#082f49"
            strokeWidth="10"
            strokeLinejoin="round"
            fontSize="68"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="2px"
          >
            TENSION
          </text>
          {/* Main Cyan Face */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="url(#tensionGrad)"
            fontSize="68"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="2px"
          >
            TENSION
          </text>
          {/* White Top Highlight */}
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            fill="#e0f2fe"
            opacity="0.4"
            fontSize="68"
            fontWeight="900"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            letterSpacing="2px"
          >
            TENSION
          </text>
        </g>

        {/* ---------------- 4. BOTTOM CENTER: POINTING FINGER & SPARKS ---------------- */}
        <g transform="translate(340, 420)" filter="url(#shadow)">
          {/* Touch Spark Burst */}
          <line x1="-38" y1="-50" x2="-48" y2="-62" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
          <line x1="-24" y1="-62" x2="-28" y2="-76" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
          <line x1="-8" y1="-54" x2="-2" y2="-66" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="-25" cy="-52" r="6" fill="#ffffff" />

          {/* Pointing Hand / Finger */}
          {/* Palm base */}
          <path
            d="M-50,60 C-20,40 20,40 50,60 C40,110 -20,110 -50,60 Z"
            fill="#fdba74"
          />
          {/* Knuckles and index finger extending up */}
          <path
            d="M-36,50 C-40,20 -38,-15 -25,-48 C-21,-56 -13,-56 -10,-48 C-4,-20 -2,10 5,45 C-12,50 -26,52 -36,50 Z"
            fill="#fed7aa"
          />
          {/* Fingernail */}
          <path
            d="M-23,-44 C-21,-50 -16,-50 -14,-44 C-15,-38 -22,-38 -23,-44 Z"
            fill="#ffffff"
            opacity="0.5"
          />
          {/* Finger shading */}
          <path
            d="M-34,20 C-36,0 -32,-30 -24,-45 C-22,-48 -20,-48 -21,-40 C-26,-20 -28,5 -28,30 Z"
            fill="#fb923c"
            opacity="0.5"
          />
        </g>

        {/* Gloss / Specular Top Reflection */}
        <rect width="500" height="240" rx="110" fill="url(#glassReflection)" />
      </svg>
    </div>
  );
};
