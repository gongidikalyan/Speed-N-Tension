import React, { useState, useEffect } from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';

const LOOP_STEPS = [
  { id: 'see', label: 'SEE', desc: 'Visual stimulus arrives in retina' },
  { id: 'think', label: 'THINK', desc: 'Cognitive filter isolates the rule' },
  { id: 'react', label: 'REACT', desc: 'Motor impulse fires to fingertip' },
  { id: 'survive', label: 'SURVIVE', desc: 'Streak continues intact' },
  { id: 'faster', label: 'FASTER', desc: 'Next round time budget cuts by 15%' },
  { id: 'repeat', label: 'REPEAT', desc: 'The clock resets immediately' },
];

export const GameLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % LOOP_STEPS.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            THE NEUROLOGICAL ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950">
            THE UNENDING LOOP
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-sans">
            A frictionless cycle of pressure, adrenaline, and instantaneous consequence.
          </p>
        </div>

        {/* Desktop Horizontal Loop with Active Pulse */}
        <div className="hidden lg:grid grid-cols-6 gap-3 relative">
          {LOOP_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.id}
                className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[170px] ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-neutral-900 light:bg-white border-red-500 shadow-lg shadow-red-950/40 light:shadow-red-500/10 scale-105 z-10'
                    : 'bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-50 border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-red-500 font-bold' : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-500'}>
                    0{index + 1}
                  </span>
                  {index < LOOP_STEPS.length - 1 ? (
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-red-500 light:text-neutral-900' : 'text-neutral-700 light:text-neutral-400'}`} />
                  ) : (
                    <RotateCcw className={`w-3.5 h-3.5 ${isActive ? 'text-red-500 animate-spin' : 'text-neutral-700 light:text-neutral-400'}`} />
                  )}
                </div>

                <div className="my-auto">
                  <h3
                    className={`text-2xl font-black font-display tracking-tight uppercase ${
                      isActive ? 'text-white dark:text-white light:text-neutral-950' : 'text-neutral-300 dark:text-neutral-300 light:text-neutral-700'
                    }`}
                  >
                    {step.label}
                  </h3>
                </div>

                <p className="text-[10px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-sans leading-tight">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Responsive Flow */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
          {LOOP_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-neutral-900 light:bg-white border-red-500 shadow-md shadow-red-950/30'
                    : 'bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200'
                }`}
              >
                <div className="flex justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-1">
                  <span>0{index + 1}</span>
                  {index === LOOP_STEPS.length - 1 ? (
                    <span className="text-red-500">CYCLE</span>
                  ) : (
                    <span>→</span>
                  )}
                </div>
                <div className="text-xl font-bold font-display uppercase text-white dark:text-white light:text-neutral-950 mb-1">
                  {step.label}
                </div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-tight">
                  {step.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
