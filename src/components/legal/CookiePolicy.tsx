import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { CheckCircle2, Shield } from 'lucide-react';

interface CookiePolicyProps {
  onNavigate: (path: RoutePath) => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Information regarding the use of cookies, local device storage, and related browser technologies on the Speed N Tension landing page and mobile game."
      lastUpdated="September 28, 2026"
      activePath="/cookie-policy"
      onNavigate={onNavigate}
    >
      {/* Overview Card */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 text-sm">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold font-display uppercase tracking-wider text-xs">
          <CheckCircle2 className="w-4 h-4" />
          No Tracking Cookies · No Invasive Third-Party Marketing Trackers
        </div>
        <p className="text-neutral-800 dark:text-neutral-200">
          This website for Speed N Tension is an informational landing page. We do not use advertising tracking cookies, analytics profiling cookies, or data-broker scripts on this website.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. What Are Cookies and Local Storage?
        </h2>
        <p>
          Cookies are small text files that a website stores on your computer or mobile device when you visit. They are commonly used to remember preferences and ensure basic website functionality.
        </p>
        <p>
          Local Storage is an HTML5 technology that enables web browsers to store key-value data directly inside your browser without sending that data to any web server with every network request.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. How Technologies Are Used on This Website
        </h2>
        <p>
          The Speed N Tension website uses local browser storage solely for essential user preferences:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 ml-2">
          <li>
            <strong>Theme Preference:</strong> Storing whether you have selected light mode or dark mode (e.g., <code className="font-mono text-xs bg-neutral-200 dark:bg-neutral-800 px-1 py-0.5 rounded">snt-theme-mode</code>) so your preferred visual experience is preserved across page refreshes.
          </li>
          <li>
            <strong>Audio Preference:</strong> Remembering your audio on/off toggle state during website navigation.
          </li>
        </ul>
        <p>
          These storage keys are strictly functional and contain no personal identifiers, names, emails, or browsing history.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. Mobile Game Storage &amp; Advertising
        </h2>
        <p>
          The Speed N Tension mobile game itself stores high scores locally on your mobile device. The mobile game does not use web cookies.
        </p>
        <p>
          The mobile game may display advertisements served by Google AdMob. Google AdMob may process certain device identifiers or technical data in accordance with Google&apos;s applicable policies and settings.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. Managing Your Preferences
        </h2>
        <p>
          You can clear your browser&apos;s local storage and cookies at any time via your browser settings:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li><strong>Chrome / Brave / Edge:</strong> Settings &rarr; Privacy and security &rarr; Clear browsing data &rarr; Cookies and other site data.</li>
          <li><strong>Safari:</strong> Settings &rarr; Safari &rarr; Advanced &rarr; Website Data &rarr; Remove All Website Data.</li>
          <li><strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data &rarr; Clear Data.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          5. Contact
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          If you have questions regarding this Cookie Policy, please contact:
        </p>
        <div className="font-mono text-sm space-y-1 text-neutral-700 dark:text-neutral-300 pt-2">
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
