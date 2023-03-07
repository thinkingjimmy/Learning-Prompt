import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/calendar.svg" alt="Book a demo" />
            <h4 className="my-3">Book a Demo</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Contact us for a demo. We are looking forward to connecting with
              you.
            </p>
            <Link
              href="#"
              className="text-primary dark:text-primary-100"
            >
              Schedule a Call &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/customer.svg" alt="Book a demo" />
            <h4 className="my-3">Support</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Ribir expert support team is excited to help. Connect for
              dedicated 1:1 support!
            </p>
            <Link
              href="#"
              className="text-primary dark:text-primary-100"
            >
              Contact Us &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/chat.svg" alt="Book a demo" />
            <h4 className="my-3">FAQs</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Browse through our FAQs to find answers to commonly asked
              questions.
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              View FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
