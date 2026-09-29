import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';

interface TermsOfServiceProps {
  onNavigate: (path: RoutePath) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your use of the Speed N Tension mobile game developed by G Kalyan."
      lastUpdated="September 28, 2026"
      activePath="/terms"
      onNavigate={onNavigate}
    >
      {/* Overview Card */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 text-sm">
        <p className="font-semibold text-neutral-900 dark:text-white">
          Welcome to Speed N Tension.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          These Terms of Service govern your use of the Speed N Tension mobile game developed by G Kalyan.
          By downloading, accessing, or using Speed N Tension, you agree to these Terms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono block">Developer</span>
            <span className="font-semibold text-neutral-900 dark:text-white">G Kalyan</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono block">Location</span>
            <span className="text-neutral-800 dark:text-neutral-200">Chittoor, Andhra Pradesh, India</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono block">Email</span>
            <a href="mailto:gongidikalyan@gmail.com" className="text-red-600 dark:text-red-400 font-mono hover:underline">
              gongidikalyan@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. About Speed N Tension
        </h2>
        <p>
          Speed N Tension is a free mobile game focused on reaction, attention, speed, and challenge-based gameplay.
        </p>
        <p>The game does not require users to create an account.</p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. Eligibility
        </h2>
        <p>Speed N Tension is intended for users aged 13 and above.</p>
        <p>By using the game, you confirm that you meet the applicable age requirement.</p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. Use of the Game
        </h2>
        <p>You may use Speed N Tension for personal entertainment purposes.</p>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li>Modify or interfere with the game</li>
          <li>Attempt to gain unauthorized access to game systems</li>
          <li>Use bots or automated tools to manipulate gameplay</li>
          <li>Intentionally exploit bugs or vulnerabilities</li>
          <li>Attempt to manipulate scores through unauthorized means</li>
          <li>Reverse engineer the game except where permitted by applicable law</li>
          <li>Use the game for unlawful purposes</li>
          <li>Interfere with the operation or security of the game</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. High Scores
        </h2>
        <p>Speed N Tension may save high scores locally on your device.</p>
        <p>
          High scores are intended to reflect gameplay performance and may be affected by device data deletion, application removal, updates, technical issues, or other circumstances.
        </p>
        <p>The developer does not guarantee permanent preservation of locally stored scores.</p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          5. Advertising
        </h2>
        <p>
          Speed N Tension is free to use and may display advertisements through Google AdMob.
        </p>
        <p>
          Advertisements are provided by a third-party advertising service and may be subject to Google&apos;s applicable policies and terms.
        </p>
        <p>The developer does not control all advertisements displayed by third-party advertising providers.</p>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          6. Availability
        </h2>
        <p>
          We aim to keep Speed N Tension available and functional, but we do not guarantee that the game will always be available, uninterrupted, or free from technical issues.
        </p>
        <p>Features may be changed, updated, suspended, or removed when necessary.</p>
      </section>

      {/* Section 7 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          7. Updates
        </h2>
        <p>
          We may release updates to improve gameplay, fix bugs, introduce new features, improve security, or make technical changes.
        </p>
        <p>You may need to install updates to continue using certain versions of the game.</p>
      </section>

      {/* Section 8 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          8. Intellectual Property
        </h2>
        <p>
          Speed N Tension and its associated software, interface, graphics, text, branding, and other original materials are used by or associated with the developer unless otherwise stated.
        </p>
        <p>
          Nothing in these Terms transfers ownership of the developer&apos;s intellectual property to the user.
        </p>
        <p>
          You may not reproduce, distribute, modify, or commercially exploit protected game materials without appropriate authorization, except where permitted by applicable law.
        </p>
      </section>

      {/* Section 9 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          9. Third-Party Services
        </h2>
        <p>The game may use third-party services, including Google AdMob.</p>
        <p>
          Third-party services operate independently and may have their own terms and privacy policies.
        </p>
      </section>

      {/* Section 10 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          10. Disclaimer
        </h2>
        <p>Speed N Tension is provided for entertainment purposes.</p>
        <p>
          The developer does not guarantee that the game will always be error-free, uninterrupted, or available on every device.
        </p>
        <p>
          Game scores and performance results are intended for entertainment and do not constitute professional assessments of a person&apos;s abilities.
        </p>
      </section>

      {/* Section 11 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          11. Limitation of Liability
        </h2>
        <p>
          To the extent permitted by applicable law, the developer will not be responsible for losses or damages arising from circumstances outside the developer&apos;s reasonable control, including device issues, network failures, third-party services, or interruptions to the game.
        </p>
        <p>
          Nothing in these Terms is intended to exclude or limit any liability that cannot legally be excluded or limited.
        </p>
      </section>

      {/* Section 12 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          12. Changes to These Terms
        </h2>
        <p>These Terms may be updated from time to time.</p>
        <p>
          The updated Terms will be published on this website with a revised &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      {/* Section 13 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          13. Governing Law
        </h2>
        <p>
          These Terms are intended to be governed by the applicable laws of India, subject to any mandatory rights or protections available to users under applicable law.
        </p>
      </section>

      {/* Section 14 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          14. Contact
        </h2>
        <div className="font-mono text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
          <p className="font-bold text-neutral-900 dark:text-white">G Kalyan</p>
          <p>Chittoor, Andhra Pradesh, India</p>
          <p>
            Email:{' '}
            <a href="mailto:gongidikalyan@gmail.com" className="text-red-600 dark:text-red-400 hover:underline">
              gongidikalyan@gmail.com
            </a>
          </p>
        </div>
      </section>
    </LegalLayout>
  );
};
