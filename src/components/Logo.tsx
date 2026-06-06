import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Logo() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Sequence the phases
    const timer1 = setTimeout(() => setPhase(2), 1500); // After stroke draw
    const timer2 = setTimeout(() => setPhase(3), 3000); // After laptops fade in
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-48 w-full max-w-md mx-auto my-12">
      <svg
        viewBox="0 0 400 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Phase 1: Stroke Draw of "عفيف" */}
        <motion.path
          d="M 280 80 Q 250 80 230 100 Q 210 120 180 120 Q 150 120 130 100 Q 110 80 80 80"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Arabic Typography specific dots (stylized approximation) */}
        <motion.circle
          cx="200" cy="140" r="4" fill="white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.circle
          cx="170" cy="140" r="4" fill="white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />

        {/* Phase 2: The Laptop Figures Fading In */}
        {phase >= 2 && (
          <g>
            {/* Left Figure & Laptop */}
            <motion.path
              d="M 50 100 L 50 60 L 70 40 L 90 60"
              stroke="white"
              strokeWidth="4"
              strokeLinejoin="round"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.rect
              x="60" y="55" width="20" height="15" rx="2"
              fill="none" stroke="var(--color-brand-red-neon)" strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            
            {/* Right Figure & Laptop */}
            <motion.path
              d="M 350 100 L 350 60 L 330 40 L 310 60"
              stroke="white"
              strokeWidth="4"
              strokeLinejoin="round"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.rect
              x="320" y="55" width="20" height="15" rx="2"
              fill="none" stroke="var(--color-brand-red-neon)" strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            
            {/* Soft Neon Crimson Pulse Drop Shadow Filter */}
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <motion.rect
               x="62" y="57" width="16" height="11"
               fill="var(--color-brand-red-neon)"
               filter="url(#neon-glow)"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 0.5, 0.2, 0.5] }}
               transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: 'mirror' }}
            />
            <motion.rect
               x="322" y="57" width="16" height="11"
               fill="var(--color-brand-red-neon)"
               filter="url(#neon-glow)"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 0.5, 0.2, 0.5] }}
               transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: 'mirror' }}
            />
          </g>
        )}

        {/* Phase 3: Data Transfer Particles */}
        {phase >= 3 && (
          <g>
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                r="1.5"
                fill="var(--color-brand-red-neon)"
                filter="url(#neon-glow)"
                initial={{ cx: 90, cy: 62 }}
                animate={{ cx: [90, 200, 310], cy: [62, 40, 62] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={`particle-rev-${i}`}
                r="1.5"
                fill="#ffffff"
                initial={{ cx: 310, cy: 68 }}
                animate={{ cx: [310, 200, 90], cy: [68, 80, 68] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3 + 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
