import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { AlertCircle, ShieldAlert } from 'lucide-react';

interface DisclaimerProps {
  onNavigate: (path: RoutePath) => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Important disclosures regarding gameplay metrics, entertainment purpose, availability, and third-party advertising for Speed N Tension."
      lastUpdated="September 28, 2026"
      activePath="/disclaimer"
      onNavigate={onNavigate}
    >
      {/* Overview Card */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold font-display uppercase tracking-wider text-xs">
          <AlertCircle className="w-4 h-4" />
          Entertainment Purpose Only
        </div>
        <p className="text-neutral-800 dark:text-neutral-200">
          Speed N Tension is provided solely for personal entertainment and casual gameplay purposes. In-game scores and metrics do not constitute professional or medical assessments.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. Entertainment Purpose &amp; Gameplay Metrics
        </h2>
        <p>
          Speed N Tension is a fast-paced reaction game designed to provide engaging, challenge-based entertainment.
        </p>
        <p>
          Any performance metrics generated during play—such as reaction times, tap speeds, high scores, or challenge streaks—are strictly intended for gaming entertainment. They do not constitute professional cognitive tests, clinical assessments, neurological diagnostics, or official measures of cognitive capability.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. &ldquo;As Is&rdquo; &amp; &ldquo;As Available&rdquo; Disclaimer
        </h2>
        <p>
          Speed N Tension is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
        </p>
        <p>
          The developer does not warrant or guarantee that:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li>The game will operate completely uninterrupted, error-free, or continuously.</li>
          <li>Defects or software bugs will be immediately corrected.</li>
          <li>The game will be compatible with every mobile device, hardware model, or operating system release.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. Locally Stored Data &amp; High Scores
        </h2>
        <p>
          High scores and local settings are saved on the user&apos;s local device. The developer does not guarantee permanent preservation of locally stored game records. Device updates, app uninstalls, clearing device storage, hardware faults, or data corruption may result in loss of local game data.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. Third-Party Advertising (Google AdMob)
        </h2>
        <p>
          Speed N Tension displays advertisements through Google AdMob. The developer does not control or endorse every specific third-party product, service, or advertisement presented by the ad network. Any interactions or transactions with third-party advertisers are solely between the user and the respective third party.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          5. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable law, the developer shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising from or connected with your download, installation, gameplay, or inability to use Speed N Tension.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          6. Contact Developer
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
