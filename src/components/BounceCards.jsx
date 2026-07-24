import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 800,
  containerHeight = 340,
  animationDelay = 0.2,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.5)",
  transformStyles = [
    "rotate(7deg) translate(-260px, 0px)",
    "rotate(-3deg) translate(-130px, -10px)",
    "rotate(0deg) translate(0px, -18px)",
    "rotate(4deg) translate(130px, -10px)",
    "rotate(-7deg) translate(260px, 0px)"
  ],
  enableHover = true,
  onCardClick
}) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bounce-card",
        {
          scale: 0,
          opacity: 0,
          y: 90
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: animationDelay,
          stagger: animationStagger,
          ease: easeType
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center mx-auto ${className}`}
      style={{
        width: '100%',
        maxWidth: `${containerWidth}px`,
        height: `${containerHeight}px`
      }}
    >
      {images.map((src, index) => {
        const baseTransform = transformStyles[index % transformStyles.length];
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => enableHover && setHoveredIndex(index)}
            onMouseLeave={() => enableHover && setHoveredIndex(null)}
            onClick={() => onCardClick && onCardClick(index)}
            className={`
              bounce-card absolute cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ease-out
              ${isHovered ? 'drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]' : 'drop-shadow-xl'}
            `}
            style={{
              width: '235px',
              height: '290px',
              transform: isHovered ? `${baseTransform} scale(1.1) translateY(-12px)` : baseTransform,
              zIndex: isHovered ? 9999 : index + 1
            }}
          >
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        );
      })}
    </div>
  );
}
