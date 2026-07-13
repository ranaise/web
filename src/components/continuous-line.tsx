"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ContinuousLine() {
  const { scrollYProgress } = useScroll();
  // We'll draw the main line as you scroll down
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Points where the line crosses the center
  const nodes = [15, 30, 45, 60, 75, 90];

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-5] pointer-events-none overflow-hidden opacity-40 dark:opacity-60">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
      >
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />      {/* sky-400 */}
            <stop offset="25%" stopColor="#f472b6" />     {/* pink-400 */}
            <stop offset="50%" stopColor="#818cf8" />     {/* indigo-400 */}
            <stop offset="75%" stopColor="#38bdf8" />     {/* sky-400 */}
            <stop offset="100%" stopColor="#f472b6" />    {/* pink-400 */}
          </linearGradient>
        </defs>

        {/* Abstract sine waves for texture (Image 1 style) */}
        <path
          d="M 40 0 C 70 5, 70 10, 40 15 S 10 25, 40 30 S 70 40, 40 45 S 10 55, 40 60 S 70 70, 40 75 S 10 85, 40 90 S 40 95, 40 100"
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 60 0 C 90 5, 90 10, 60 15 S 30 25, 60 30 S 90 40, 60 45 S 30 55, 60 60 S 90 70, 60 75 S 30 85, 60 90 S 60 95, 60 100"
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* Main Constellation Line */}
        <path
          d="M 50 0 C 80 5, 80 10, 50 15 S 20 25, 50 30 S 80 40, 50 45 S 20 55, 50 60 S 80 70, 50 75 S 20 85, 50 90 S 50 95, 50 100"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated glowing path drawn on scroll */}
        <motion.path
          d="M 50 0 C 80 5, 80 10, 50 15 S 20 25, 50 30 S 80 40, 50 45 S 20 55, 50 60 S 80 70, 50 75 S 20 85, 50 90 S 50 95, 50 100"
          stroke="url(#line-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>

      {/* HTML Nodes overlay for perfect circles (Constellation effect) */}
      {nodes.map((yPos, i) => (
        <div 
          key={yPos}
          className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(56,189,248,0.5)] animate-pulse" 
          style={{ 
            left: '50%', 
            top: `${yPos}%`, 
            transform: 'translate(-50%, -50%)',
            borderColor: i % 2 === 0 ? '#38bdf8' : '#f472b6',
            boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(56,189,248,0.5)' : 'rgba(244,114,182,0.5)'}`
          }} 
        />
      ))}
      
      {/* Scattered smaller stars */}
      {[...Array(12)].map((_, i) => {
        // Deterministic pseudo-random offset between 0 and 10 to prevent hydration mismatch
        const pseudoRandomOffset = (i * 7.3) % 10;
        return (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${30 + (i % 2 === 0 ? 40 : -10) + pseudoRandomOffset}%`,
              top: `${(i * 8) + 5}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        );
      })}
    </div>
  );
}
