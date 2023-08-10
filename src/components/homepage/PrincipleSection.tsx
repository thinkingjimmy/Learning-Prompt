import Link from '@docusaurus/Link'
import React from 'react'
import PRINCIPLES from '../../principles'
import Translate, { translate } from '@docusaurus/Translate'

const principles = [
  {
    title: <Translate>About This Tutorial</Translate>,
    description: <Translate>If you don't know how to use ChatGPT or Midjourney, this tutorial should help you. This is a free tutorial teaching you how to better use ChatGPT and Midjourney.</Translate>,
  },
  {
    title: <Translate>What It Is Not</Translate>,
    description:
      <Translate>This tutorial is not a collection of prompts that you can directly use. If you expect to find ready-made prompts to use, I suggest you Google them. This tutorial focuses more on teaching methods and explaining why they are effective.</Translate>,
  },
  {
    title: <Translate>Why I Created This Tutorial</Translate>,
    description:
      <Translate>Recently I've been studying prompt engineering knowledge. I found most tutorials are in English and the content is great, but as a beginner it's still challenging for me to read. So I had the idea to write my own tutorial, using output to drive input and learn through the process.</Translate>,
  },
]

export default function PrincipleSection() {
  return (
    <section className="my-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="lg:text-3xl">
          <Translate>Introduction</Translate>
        </h2>

        <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
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
  )
}
