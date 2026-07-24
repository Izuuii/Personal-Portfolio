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
  enableHover = true,
  onCardClick
}) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, [animationDelay, animationStagger, easeType, isMobile]);

  // Responsive transforms and dimensions (Prevent mobile horizontal overflow)
  const desktopTransforms = [
    "rotate(7deg) translate(-260px, 0px)",
    "rotate(-3deg) translate(-130px, -10px)",
    "rotate(0deg) translate(0px, -18px)",
    "rotate(4deg) translate(130px, -10px)",
    "rotate(-7deg) translate(260px, 0px)"
  ];

  const mobileTransforms = [
    "rotate(6deg) translate(-105px, 0px)",
    "rotate(-3deg) translate(-52px, -6px)",
    "rotate(0deg) translate(0px, -12px)",
    "rotate(4deg) translate(52px, -6px)",
    "rotate(-6deg) translate(105px, 0px)"
  ];

  const currentTransforms = isMobile ? mobileTransforms : desktopTransforms;
  const cardWidth = isMobile ? '135px' : '235px';
  const cardHeight = isMobile ? '175px' : '290px';
  const currentHeight = isMobile ? 220 : containerHeight;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center mx-auto max-w-full ${className}`}
      style={{
        width: '100%',
        maxWidth: isMobile ? '360px' : `${containerWidth}px`,
        height: `${currentHeight}px`
      }}
    >
      {images.map((src, index) => {
        const baseTransform = currentTransforms[index % currentTransforms.length];
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
              width: cardWidth,
              height: cardHeight,
              transform: isHovered ? `${baseTransform} scale(1.15) translateY(-10px)` : baseTransform,
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
