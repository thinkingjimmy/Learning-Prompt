import Link from '@docusaurus/Link';
import React from 'react';
import PRINCIPLES from '../../principles';

export default function PrincipleSection() {
  return (
    <section className="my-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="lg:text-3xl">基本介绍</h2>

        <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div
              className="group flex flex-col justify-between"
              key={principle.title}
            >
              <div>
                <h3 className="font-semibold text-black dark:text-white lg:text-xl">
                  {principle.title}
                </h3>
                <p className="leading-snug text-text-400">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
