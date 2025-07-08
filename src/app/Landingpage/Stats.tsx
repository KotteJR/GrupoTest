'use client';

import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  targetValue?: number;
  suffix?: string;
  label: string;
  alignment: 'start' | 'center' | 'end';
  isText?: boolean;
  targetText?: string;
}

function StatItem({ targetValue, suffix = '', label, alignment, isText = false, targetText }: StatItemProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (isText && targetText) {
      // Smoother shuffling text animation
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const duration = 1000;
      const fps = 120;
      const totalFrames = (duration / 1000) * fps;
      let currentFrame = 0;
      
      const timer = setInterval(() => {
        currentFrame++;
        
        if (currentFrame <= totalFrames) {
          // Smooth easing function (ease-out)
          const progress = 1 - Math.pow(1 - (currentFrame / totalFrames), 3);
          
          let shuffledText = '';
          for (let i = 0; i < targetText.length; i++) {
            if (targetText[i] === ' ') {
              shuffledText += ' ';
            } else {
              // Gradual reveal with smoother probability curve
              const charProgress = Math.min(1, Math.max(0, (progress - (i * 0.05)) * 1.2));
              if (Math.random() < charProgress) {
                shuffledText += targetText[i];
              } else {
                // Less aggressive shuffling as we get closer to the end
                const shuffleIntensity = 1 - charProgress;
                if (Math.random() < shuffleIntensity) {
                  shuffledText += characters[Math.floor(Math.random() * characters.length)];
                } else {
                  shuffledText += targetText[i];
                }
              }
            }
          }
          setCurrentText(shuffledText);
        }
        
        if (currentFrame >= totalFrames) {
          clearInterval(timer);
          setCurrentText(targetText);
        }
      }, 1000 / fps);

      return () => clearInterval(timer);
    } else if (targetValue !== undefined) {
      // Smoother count-up number animation
      const duration = 1500;
      const fps = 60;
      const totalFrames = (duration / 1000) * fps;
      let currentFrame = 0;

      const timer = setInterval(() => {
        currentFrame++;
        
        // Smooth easing function (ease-out)
        const progress = 1 - Math.pow(1 - (currentFrame / totalFrames), 3);
        const newValue = Math.min(targetValue * progress, targetValue);
        setCurrentValue(Math.round(newValue));

        if (currentFrame >= totalFrames) {
          clearInterval(timer);
          setCurrentValue(targetValue);
        }
      }, 1000 / fps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetValue, targetText, isText]);

  const alignmentClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };

  return (
    <div ref={elementRef} className={`flex flex-col ${alignmentClasses[alignment]}`}>
      <h3 className="text-[2.5rem] font-semibold bg-gradient-to-r from-[#0f4761] to-[#f0952a] text-transparent bg-clip-text mb-1">
        {isText ? currentText : `${currentValue.toLocaleString()}${suffix}`}
      </h3>
      <p className="text-[#646464] text-base">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="w-full bg-white py-10 text-center font-sans">
      <div className="max-w-[1230px] mx-auto px-4 flex justify-between items-center">
        <StatItem
          targetValue={15000}
          suffix="+"
          label="Habitaciones conectadas"
          alignment="start"
        />
        <StatItem
          targetValue={20}
          suffix="+"
          label="Años de experiencia"
          alignment="center"
        />
        <StatItem
          isText={true}
          targetText="Todo España" 
          label="Islas + Península"
          alignment="center"
        />
        <StatItem
          isText={true}
          targetText="24/7/365"
          label="Equipo propio y soporte "
          alignment="end"
        />
      </div>
    </section>
  );
}
