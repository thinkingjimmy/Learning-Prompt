// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs')

const config = {
  title: 'Learning Prompt',
  tagline: 'Free Prompt Engineering and Midjourney tutorial.',
  url: 'https://learningpromt.wiki',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thinkingjimmy',
  projectName: 'Learning-prompt.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-Hans',
      },
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9QBEXE7W09',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin, 'docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [{name: 'keywords', content: 'AI, Prompt Engineering, GPT-3, ChatGPT, Midjourney, Learning Prompt, AI, How to use Midjourney, How to use ChatGPT'}],
      announcementBar: {
        content:
          '⭐ If you have any questions, feel free to join our <a target="_blank" href="https://discord.gg/B7Z7wjuUPg">Discord</a>.⭐',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Learning Prompt',
        logo: {
          alt: 'Learning Prompt logo',
          src: 'img/logo.svg',
        },
        items: [
          // todo: multiple version config
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          // },

          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: '👋 Welcome',
          },
          {
            type: 'doc',
            docId: 'ai-101',
            position: 'left',
            label: '🤖 AI 101',
          },
          {
            type: 'doc',
            docId: 'chatgpt-learning-path',
            position: 'left',
            label: '💬 ChatGPT',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'midjourney-learning-path',
            label: '🖼️ Midjourney',
          },
          { to: '/blog', label: '📰 Changelog', position: 'left' },
          {
            href: 'https://jimmywong.bio/',
            label: '😎 About Me',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/thinkingjimmy/Learning-Prompt',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
