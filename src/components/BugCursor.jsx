import React, { useEffect, useRef } from 'react';
import './BugCursor.css';

const BugCursor = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const bugRef = useRef({ x: 0, y: 0, angle: 0, legs: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize bug position far from center
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height;
    bugRef.current = {
      x: startX,
      y: startY,
      angle: 0,
      legs: [
        { angle: 0, phase: 0 },
        { angle: 0, phase: Math.PI / 2 },
        { angle: 0, phase: Math.PI },
        { angle: 0, phase: Math.PI * 1.5 },
        { angle: 0, phase: Math.PI / 4 },
        { angle: 0, phase: Math.PI * 0.75 }
      ]
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Touch move handler for mobile - don't prevent default to allow scrolling
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX;
      mouseRef.current.y = touch.clientY;
    };

    // Touch start handler for mobile - don't prevent default
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX;
      mouseRef.current.y = touch.clientY;
    };

    // Animation loop
    const animate = () => {
      const bug = bugRef.current;
      const mouse = mouseRef.current;
      
      // Calculate direction to mouse
      const dx = mouse.x - bug.x;
      const dy = mouse.y - bug.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only move if far enough away (crawling from distance)
      if (distance > 30) {
        const targetAngle = Math.atan2(dy, dx);
        const speed = 0.02; // Very slow crawling
        
        // Smooth angle rotation
        let angleDiff = targetAngle - bug.angle;
        if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        bug.angle += angleDiff * 0.1;
        
        // Move bug toward mouse
        bug.x += Math.cos(bug.angle) * speed * distance * 0.1;
        bug.y += Math.sin(bug.angle) * speed * distance * 0.1;
      }
      
      // Animate legs
      const time = Date.now() * 0.005;
      bug.legs.forEach((leg, index) => {
        leg.angle = Math.sin(time + leg.phase) * 0.3;
      });
      
      // Draw bug
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw bug body
      ctx.save();
      ctx.translate(bug.x, bug.y);
      ctx.rotate(bug.angle);
      
      // Bug body (oval shape)
      ctx.fillStyle = '#8B4513';
      ctx.strokeStyle = '#654321';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Bug shell pattern
      ctx.fillStyle = '#A0522D';
      ctx.beginPath();
      ctx.ellipse(0, -2, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Bug head
      ctx.fillStyle = '#654321';
      ctx.beginPath();
      ctx.arc(8, 0, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Bug eyes
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(10, -2, 1.5, 0, Math.PI * 2);
      ctx.arc(10, 2, 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye highlights
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(10.5, -2.5, 0.5, 0, Math.PI * 2);
      ctx.arc(10.5, 1.5, 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Bug antennae
      ctx.strokeStyle = '#2d5016';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(12, -1);
      ctx.lineTo(16, -3);
      ctx.moveTo(12, 1);
      ctx.lineTo(16, 3);
      ctx.stroke();
      
      // Antennae tips
      ctx.fillStyle = '#4a7c59';
      ctx.beginPath();
      ctx.arc(16, -3, 1, 0, Math.PI * 2);
      ctx.arc(16, 3, 1, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw legs
      ctx.strokeStyle = '#2d5016';
      ctx.lineWidth = 2;
      
      // Front legs
      ctx.save();
      ctx.translate(6, -4);
      ctx.rotate(bug.legs[0].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(8, -4);
      ctx.stroke();
      ctx.restore();
      
      ctx.save();
      ctx.translate(6, 4);
      ctx.rotate(bug.legs[1].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(8, 4);
      ctx.stroke();
      ctx.restore();
      
      // Middle legs
      ctx.save();
      ctx.translate(0, -6);
      ctx.rotate(bug.legs[2].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(6, -3);
      ctx.stroke();
      ctx.restore();
      
      ctx.save();
      ctx.translate(0, 6);
      ctx.rotate(bug.legs[3].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(6, 3);
      ctx.stroke();
      ctx.restore();
      
      // Back legs
      ctx.save();
      ctx.translate(-6, -4);
      ctx.rotate(bug.legs[4].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(8, -2);
      ctx.stroke();
      ctx.restore();
      
      ctx.save();
      ctx.translate(-6, 4);
      ctx.rotate(bug.legs[5].angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(8, 2);
      ctx.stroke();
      ctx.restore();
      
      ctx.restore();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners for both mouse and touch
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="bug-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default BugCursor;
