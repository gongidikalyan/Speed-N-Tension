import React, { useState } from 'react';
import { LegalLayout } from './LegalLayout';
import { RoutePath } from '../../types';
import { Mail, MapPin, Check, Copy, Send, ShieldCheck, User } from 'lucide-react';

interface ContactGrievanceProps {
  onNavigate: (path: RoutePath) => void;
}

export const ContactGrievance: React.FC<ContactGrievanceProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const email = 'gongidikalyan@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `[Speed N Tension Support] ${subject || 'Inquiry'}`
    )}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <LegalLayout
      title="Contact & Grievance"
      subtitle="Official developer contact details and grievance redressal mechanism for the Speed N Tension mobile game."
      lastUpdated="September 28, 2026"
      activePath="/contact"
      onNavigate={onNavigate}
    >
      {/* Developer Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Developer Info Card */}
        <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-500 font-bold">
            <User className="w-4 h-4" />
            <span>Developer Details</span>
          </div>

          <div className="space-y-2 text-sm font-sans">
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block">Developer Name</span>
              <span className="font-bold text-neutral-900 dark:text-white text-base">G Kalyan</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block">Developer Type</span>
              <span className="text-neutral-800 dark:text-neutral-200">Individual Developer</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block">Location</span>
              <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Chittoor, Andhra Pradesh, India</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block">Game</span>
              <span className="text-neutral-800 dark:text-neutral-200">Speed N Tension (Free, 13+)</span>
            </div>
          </div>
        </div>

        {/* Grievance & Email Card */}
        <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-500 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Grievance Contact</span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block">Designated Contact</span>
              <span className="font-bold text-neutral-900 dark:text-white">G Kalyan</span>
            </div>

            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase block mb-1">Official Email Address</span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm text-red-600 dark:text-red-400 font-semibold hover:underline break-all"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              For any privacy inquiries, feedback, gameplay issues, or grievance redressal, please email directly with relevant details.
            </p>
          </div>
        </div>
      </div>

      {/* Grievance Redressal Policy */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          1. Grievance Redressal Mechanism
        </h2>
        <p>
          In accordance with applicable digital and information technology laws, any user complaints, concerns, or grievances concerning Speed N Tension, data handling, or advertising content may be submitted to the designated Grievance Contact:
        </p>
        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs space-y-1 text-neutral-700 dark:text-neutral-300">
          <p><strong>Grievance Officer:</strong> G Kalyan</p>
          <p><strong>Jurisdiction / Location:</strong> Chittoor, Andhra Pradesh, India</p>
          <p><strong>Email:</strong> gongidikalyan@gmail.com</p>
          <p><strong>Response Timeline:</strong> Grievance communications are typically acknowledged and reviewed promptly.</p>
        </div>
      </section>

      {/* Direct Email Composition Form */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wide text-neutral-900 dark:text-white border-l-3 border-red-600 pl-3">
          2. Send an Email Inquiry
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          You can use the form below to quickly draft your email in your default email client:
        </p>

        <form onSubmit={handleMailtoSubmit} className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Inquiry / Feedback / Grievance"
                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your inquiry, bug report, or feedback..."
              className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors resize-y"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-neutral-500 font-mono">
              Direct to: gongidikalyan@gmail.com
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose Email</span>
            </button>
          </div>
        </form>
      </section>
    </LegalLayout>
  );
};
