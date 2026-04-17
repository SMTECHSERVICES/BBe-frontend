
import { FiArrowUpRight } from "react-icons/fi";
import program from '../../../assets/Images/programming.jpg'
import bb from '../../../assets/Images/bb.jpg'
import mobile from '../../../assets/Images/mobile.png'
import software from '../../../assets/Images/software.png'

import React, { useRef } from "react";
import { Briefcase, Flag } from "lucide-react";

const Card = ({ children, borderColor, glowColor }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const animationRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;

    cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = 1;
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;

    cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(() => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      glow.style.opacity = 0;
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out will-change-transform backdrop-blur-lg bg-white/40 border-2 ${borderColor} rounded-2xl p-8 shadow-lg cursor-pointer`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={glowRef}
        className={`absolute w-40 h-40 ${glowColor} opacity-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-300`}
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {children}
    </div>
  );
};

const ScopePromise = () => {
  return (
    <div> 
   



  </div>
  );
};

export default ScopePromise;