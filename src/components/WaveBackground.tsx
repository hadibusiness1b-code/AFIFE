import { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let time = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Clear black background
      ctx.fillStyle = '#030305';
      ctx.fillRect(0, 0, width, height);

      time += 0.005;

      // Draw multiple fluid waves
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        const yOffset = height * 0.5 + j * 50;
        const amplitude = 100 + j * 30;
        const frequency = 0.001 + j * 0.0005;

        for (let x = 0; x <= width; x += 20) {
          const y = yOffset + Math.sin(x * frequency + time * (j + 1)) * amplitude * Math.sin(time);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Create deep red gradient for waves
        const gradient = ctx.createLinearGradient(0, height * 0.4, 0, height);
        gradient.addColorStop(0, `rgba(211, 19, 19, ${0.05 + j * 0.02})`);
        gradient.addColorStop(1, `rgba(255, 30, 30, ${0.1 + j * 0.05})`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add a subtle glowing stroke to the edge of the waves
        ctx.strokeStyle = `rgba(255, 30, 30, ${0.2 + j * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] opacity-70 pointer-events-none"
    />
  );
}
