"use client";

import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  targetValue: number;
  suffix: string;
  label: string;
}

function StatItem({ targetValue, suffix, label }: StatItemProps) {
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

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <h3 className="text-[2rem] font-semibold bg-gradient-to-r from-[#0f4761] to-[#f0952a] text-transparent bg-clip-text mb-1">
        {currentValue.toLocaleString()}{suffix}
      </h3>
      <p className="text-[#646464] text-[1.125rem]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full bg-white text-[#0f4761] font-sans py-10">
      <div className="max-w-[1230px] mx-auto px-4 text-center">
        <h2 className="text-[2rem] font-medium leading-tight">
          Números que <br /> Hablan por Sí Solos
        </h2>
        <p className="text-[#646464] text-[1.125rem] mt-2 mb-12">
          Más de dos décadas de experiencia en cifras
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">
          <StatItem
            targetValue={15000}
            suffix="+"
            label="Habitaciones conectadas"
          />
          <StatItem
            targetValue={1000}
            suffix="+"
            label="Camas hospitalarias"
          />
          <StatItem
            targetValue={80}
            suffix="%"
            label="Recurrencia de clientes"
          />
          <StatItem
            targetValue={247}
            suffix=""
            label="Soporte disponible 24/7"
          />
        </div>
      </div>
    </section>
  );
}
