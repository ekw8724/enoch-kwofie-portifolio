import { useState, type FormEvent } from 'react';
import { CheckCircle2, Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { validateContactForm } from '../utils/contactValidation';
import { PageHeader } from './PageHeader';

interface ContactProps {
  onBackHome: () => void;
}

export function Contact({ onBackHome }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateContactForm({
      name,
      email,
      message,
      companyWebsite,
    });

    if (validation.isSpam) {
      setStatus('sent');
      setStatusMessage('Thank you. Your inquiry has been received.');
      return;
    }

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    if (formEndpoint && formEndpoint.trim().length > 0) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        });

        if (response.ok) {
          setStatus('sent');
          setStatusMessage('Message sent successfully. I will respond within 24 hours.');
          setName('');
          setEmail('');
          setMessage('');
          return;
        }
      } catch {
        // Fall through to mailto fallback
      }
    }

    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name.trim()}`,
    )}&body=${encodeURIComponent(`From: ${name.trim()} (${email.trim()})\n\n${message.trim()}`)}`;

    window.location.href = mailtoUrl;
    setStatus('fallback');
    setStatusMessage(
      `Opening your email client to send directly to ${PROFILE.email}. You can also reach me on WhatsApp.`,
    );
  };

  return (
    <section id="contact" aria-label="Contact and Availability" className="bg-[var(--bg-canvas)]">
      <PageHeader
        eyebrow={`Get in Touch · ${PROFILE.location}`}
        title="Contact & Availability"
        description={`${PROFILE.availability}. Reach out directly for IT support roles, network administration opportunities, or local infrastructure troubleshooting.`}
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Direct Channels Column */}
          <div className="min-w-0 lg:col-span-5">
            <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
              Direct Channels
            </h2>
            <p className="mt-2 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
              Prefer a direct message? Use email, WhatsApp, LinkedIn, or GitHub below.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex min-h-[48px] flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--text-muted)]"
              >
                <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  Email
                </span>
                <span className="break-all text-xs text-[var(--text-secondary)]">{PROFILE.email}</span>
              </a>

              <a
                href="https://wa.me/233552159898"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--text-muted)]"
              >
                <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                  <MessageSquare className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  WhatsApp (Primary)
                </span>
                <span className="font-mono-tech text-xs text-[var(--text-secondary)]">+233 0552159898</span>
              </a>

              <a
                href="https://wa.me/233208269562"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--text-muted)]"
              >
                <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                  <MessageSquare className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  WhatsApp (Secondary)
                </span>
                <span className="font-mono-tech text-xs text-[var(--text-secondary)]">+233 0208269562</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kwofie-enoch-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--text-muted)]"
              >
                <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                  <Linkedin className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  LinkedIn
                </span>
                <span className="text-xs text-[var(--text-secondary)]">kwofie-enoch-it</span>
              </a>

              <a
                href="https://github.com/ekw8724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--text-muted)]"
              >
                <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                  <Github className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  GitHub
                </span>
                <span className="text-xs text-[var(--text-secondary)]">github.com/ekw8724</span>
              </a>
            </div>
          </div>

          {/* Validated Contact Form Column */}
          <div className="min-w-0 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8"
            >
              <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                Send a Message
              </h2>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Validated form with spam protection and direct email fallback.
              </p>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="company-website">Company Website</label>
                <input
                  id="company-website"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    placeholder="Your name or organization"
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    placeholder="you@company.com"
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    placeholder="Share role details, project scope, or timeline..."
                    className="mt-1.5 w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] disabled:opacity-60 sm:w-auto cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {(status === 'sent' || status === 'fallback') && statusMessage && (
                  <div
                    role="status"
                    className="flex items-start gap-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-3.5 text-xs text-[var(--text-primary)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
