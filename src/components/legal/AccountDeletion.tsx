import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { Smartphone, HardDrive, Trash2, Mail, CheckCircle2 } from 'lucide-react';

interface AccountDeletionProps {
  onNavigate: (path: RoutePath) => void;
}

export const AccountDeletion: React.FC<AccountDeletionProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Account & Data Deletion"
      subtitle="Information regarding account creation, data storage, and how to delete locally stored game data for Speed N Tension."
      lastUpdated="September 28, 2026"
      activePath="/account-deletion"
      onNavigate={onNavigate}
    >
      {/* Key Summary Box */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 text-sm">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-500 font-semibold font-display uppercase tracking-wider text-xs">
          <CheckCircle2 className="w-4 h-4" />
          No Account Required · No Online Profile Maintained
        </div>
        <p className="text-neutral-800 dark:text-neutral-200">
          Speed N Tension does not require users to create an account and does not maintain an online user-account database or personal profile repository.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. No User Accounts Created or Maintained
        </h2>
        <p>
          Speed N Tension is designed as an immediate arcade reaction game. You do not need to register, log in, provide an email address, or create a username or password to enjoy the game.
        </p>
        <p>
          Because Speed N Tension does not operate an online account system or maintain personal profiles on remote servers, there is no remote user account to delete or deactivate.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. Locally Stored Game Data
        </h2>
        <p>
          Speed N Tension may save your personal high score locally on your device so that you can view your best performance when you return to the game.
        </p>
        <p>
          This data resides entirely on your local hardware storage and is never uploaded to an online user-account database.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. How to Remove Locally Stored Game Data
        </h2>
        <p>
          Users have complete autonomy to remove locally stored game data at any time through standard operating system controls:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold text-sm">
              <HardDrive className="w-4 h-4 text-red-600" />
              <span>Option A: Clear App Storage</span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Clear application data and cache through your device settings:
            </p>
            <ol className="list-decimal list-inside text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>Open your device <strong>Settings</strong></li>
              <li>Navigate to <strong>Apps</strong> or <strong>Application Manager</strong></li>
              <li>Select <strong>Speed N Tension</strong></li>
              <li>Tap <strong>Storage</strong> &rarr; <strong>Clear Data</strong> / <strong>Clear Cache</strong></li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold text-sm">
              <Trash2 className="w-4 h-4 text-red-600" />
              <span>Option B: Uninstall the Game</span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Uninstalling the application immediately removes the game and its locally stored data from your device:
            </p>
            <ol className="list-decimal list-inside text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>Locate the <strong>Speed N Tension</strong> icon on your home screen or app drawer</li>
              <li>Long-press the icon and select <strong>Uninstall</strong></li>
              <li>Confirm uninstallation</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. Advertising and Third-Party Data
        </h2>
        <p>
          Speed N Tension displays advertisements through Google AdMob. Google AdMob may process certain technical device information or advertising identifiers according to Google&apos;s applicable policies and controls.
        </p>
        <p>
          You can manage or reset your advertising identifier directly in your device settings (e.g., Settings &rarr; Google &rarr; Ads &rarr; Reset advertising ID or Delete advertising ID).
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          5. Contact Developer
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          If you have any questions about data handling, local storage, or privacy practices for Speed N Tension, please reach out to the developer:
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
