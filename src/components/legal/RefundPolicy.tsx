import React from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { CheckCircle2, Shield } from 'lucide-react';

interface RefundPolicyProps {
  onNavigate: (path: RoutePath) => void;
}

export const RefundPolicy: React.FC<RefundPolicyProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Information concerning payments, charges, and refunds for the Speed N Tension mobile game."
      lastUpdated="September 28, 2026"
      activePath="/refund-policy"
      onNavigate={onNavigate}
    >
      {/* Overview Card */}
      <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 text-sm">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold font-display uppercase tracking-wider text-xs">
          <CheckCircle2 className="w-4 h-4" />
          100% Free Mobile Game · Zero Financial Transactions
        </div>
        <p className="text-neutral-800 dark:text-neutral-200">
          Speed N Tension is a completely free mobile game. There are no paid downloads, subscriptions, paid versions, or in-app purchases.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. Free to Play
        </h2>
        <p>
          Speed N Tension is offered to users free of charge. You can download, access, and enjoy all core gameplay challenges, reaction tests, and game features without paying any fee.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. No In-App Purchases or Subscriptions
        </h2>
        <p>
          The game contains:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 ml-2">
          <li><strong>No Subscriptions:</strong> There are no recurring monthly, annual, or periodic fees.</li>
          <li><strong>No In-App Purchases:</strong> There are no microtransactions, virtual currency bundles, extra lives, or digital items available for purchase.</li>
          <li><strong>No Paid Version:</strong> The game is available as a single free version.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          3. Refund Applicability
        </h2>
        <p>
          Because Speed N Tension does not request, accept, or process payments, credit cards, banking credentials, or fees of any kind, refund requests are not applicable.
        </p>
        <p>
          We do not charge you, and therefore no financial billing disputes or refund transactions can arise directly between you and the developer.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          4. Advertising Supported
        </h2>
        <p>
          Speed N Tension is monetized solely via advertisements provided through Google AdMob. Viewing advertisements does not involve any direct monetary payment from users to the developer.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3 p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white">
          5. Contact Developer
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          If you have any questions regarding the game or this policy, please contact:
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
