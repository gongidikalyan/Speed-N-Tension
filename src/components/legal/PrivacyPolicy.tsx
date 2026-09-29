import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { Mail, Shield, Smartphone } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (path: RoutePath) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how Speed N Tension, developed by G Kalyan, handles information when you use the Speed N Tension mobile game."
      lastUpdated="September 28, 2026"
      activePath="/privacy-policy"
      onNavigate={onNavigate}
    >
      {/* Overview Card */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
        <p className="pt-2 text-xs text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
          Speed N Tension is a free mobile game intended for users aged 13 and above.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. Information We Collect
        </h2>
        <p>Speed N Tension does not require users to create an account.</p>
        <p>We do not directly request or require users to provide:</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Password</li>
          <li>Home address</li>
          <li>Contacts</li>
          <li>Photos or videos</li>
          <li>Precise location</li>
          <li>Account information</li>
        </ul>
        <p>The game does not maintain a user account or personal profile.</p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. High Scores
        </h2>
        <p>
          Speed N Tension may store your high score locally on your device so that the game can display your best performance.
        </p>
        <p>
          This high-score information is stored locally and is not intended to be associated with an online user account.
        </p>
        <p>
          If you uninstall the game or clear its application data, locally stored game information may be removed.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. Advertising
        </h2>
        <p>
          Speed N Tension may display advertisements through Google AdMob, a service provided by Google.
        </p>
        <p>
          AdMob may collect or use certain information from your device in accordance with Google&apos;s applicable policies and settings. This may include information used to provide, measure, personalize, or improve advertising.
        </p>
        <p>
          Speed N Tension does not directly collect personal information for the purpose of creating user accounts or profiles.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. Device and Technical Information
        </h2>
        <p>
          Third-party advertising services such as AdMob may process certain technical information associated with a device or app interaction.
        </p>
        <p>
          The information and processing performed by third-party services are governed by their respective privacy policies and configurations.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          5. How Information Is Used
        </h2>
        <p>Information processed in connection with the game may be used to:</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li>Provide and operate the game</li>
          <li>Save and display local high scores</li>
          <li>Display advertisements</li>
          <li>Support advertising measurement and delivery</li>
          <li>Maintain security and reliability</li>
          <li>Identify and resolve technical problems</li>
          <li>Improve the game and user experience</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          6. Data Sharing
        </h2>
        <p>Speed N Tension does not sell users&apos; personal information.</p>
        <p>
          The game may use third-party services, particularly Google AdMob, to provide advertising functionality.
        </p>
        <p>
          Those third-party providers may process information according to their own privacy policies and terms.
        </p>
      </section>

      {/* Section 7 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          7. Data Storage
        </h2>
        <p>The game stores the player&apos;s high score locally on the device.</p>
        <p>
          Speed N Tension does not operate an online user-account database for player accounts or personal profiles.
        </p>
      </section>

      {/* Section 8 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          8. Data Security
        </h2>
        <p>We take reasonable steps to avoid unnecessary collection of personal information.</p>
        <p>
          Because Speed N Tension does not require user accounts or directly collect personal profile information, the game is designed to minimize the amount of personal information handled by the developer.
        </p>
        <p>No method of electronic storage or transmission can be guaranteed to be completely secure.</p>
      </section>

      {/* Section 9 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          9. Children&apos;s Privacy
        </h2>
        <p>Speed N Tension is intended for users aged 13 and above.</p>
        <p>The game is not intentionally designed to collect personal information from children under 13.</p>
        <p>
          If you believe that personal information has been provided to us by a child under 13, please contact:
        </p>
        <p className="font-mono text-sm text-red-600 dark:text-red-400">
          <a href="mailto:gongidikalyan@gmail.com" className="hover:underline">
            gongidikalyan@gmail.com
          </a>
        </p>
      </section>

      {/* Section 10 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          10. Your Choices
        </h2>
        <p>
          Because Speed N Tension does not require an account, users do not need to provide personal information to play the game.
        </p>
        <p>
          Users may also manage certain advertising and privacy controls through their device settings and Google&apos;s available controls.
        </p>
      </section>

      {/* Section 11 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          11. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy when the game, advertising services, technology, or applicable legal requirements change.
        </p>
        <p>
          The updated version will be published on this website with a revised &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      {/* Section 12 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          12. Contact
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
