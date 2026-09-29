import React from 'react';
import { Eye, Zap, Flame } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'READ',
      subtitle: 'A challenge appears.',
      description: 'Your eyes take in the visual pattern. No instructions or tutorials—just raw cognitive stimulus.',
      icon: Eye,
      accent: 'border-neutral-700 hover:border-red-600',
      numColor: 'text-neutral-500 group-hover:text-red-500',
    },
    {
      num: '02',
      title: 'REACT',
      subtitle: 'Make the right move before time runs out.',
      description: 'The clock drops by milliseconds. Tap, swipe, avoid, or freeze before the red line collapses.',
      icon: Zap,
      accent: 'border-neutral-700 hover:border-orange-500',
      numColor: 'text-neutral-500 group-hover:text-orange-500',
    },
    {
      num: '03',
      title: 'SURVIVE',
      subtitle: 'One mistake can destroy your run.',
      description: 'No health bars. No buffer shields. Instant sudden death resets your streak to absolute zero.',
      icon: Flame,
      accent: 'border-neutral-700 hover:border-red-600',
      numColor: 'text-neutral-500 group-hover:text-red-500',
    },
  ];

  return (
    <section id="concept" className="relative py-24 sm:py-32 border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            THE ARCHITECTURE OF SPEED
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-none">
            ONE RULE.
            <br />
            <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">ZERO TIME TO THINK.</span>
          </h2>
        </div>

        {/* 3 Steps with Large Numbers */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`group relative p-8 sm:p-10 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 ${step.accent} transition-all duration-300 hover:bg-neutral-900/80 dark:hover:bg-neutral-900/80 light:hover:bg-neutral-50 light:shadow-sm flex flex-col justify-between min-h-[340px]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-6xl sm:text-7xl font-black font-display tracking-tighter ${step.numColor} transition-colors`}
                    >
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex items-center justify-center text-neutral-300 dark:text-neutral-300 light:text-neutral-700 group-hover:text-red-500 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-base text-neutral-200 dark:text-neutral-200 light:text-neutral-800 font-medium mb-3">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed font-sans border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 pt-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
