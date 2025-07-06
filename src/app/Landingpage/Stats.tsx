'use client';

import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  targetValue: number;
  suffix: string;
  label: string;
  alignment: 'start' | 'center' | 'end';
}

function StatItem({ targetValue, suffix, label, alignment }: StatItemProps) {
  const [currentValue, setCurrentValue] = useState(0);
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

    const duration = 1000;
    const steps = 30;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(currentStep * increment, targetValue);
      setCurrentValue(Math.round(newValue));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCurrentValue(targetValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  const alignmentClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };

  return (
    <div ref={elementRef} className={`flex flex-col ${alignmentClasses[alignment]}`}>
      <h3 className="text-[3rem] font-semibold bg-gradient-to-r from-[#0f4761] to-[#f0952a] text-transparent bg-clip-text mb-1">
        {currentValue.toLocaleString()}{suffix}
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
          targetValue={420}
          suffix="+"
          label="Puntos de acceso WiFi 6"
          alignment="center"
        />
        <StatItem
          targetValue={800}
          suffix="+"
          label="Camas hospitalarias digitalizadas"
          alignment="center"
        />
        <StatItem
          targetValue={99.7}
          suffix=" %"
          label="Uptime promedio"
          alignment="end"
        />
      </div>
    </section>
  );
}
