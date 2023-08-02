// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs')

const config = {
  title: 'Learning Prompt',
  tagline: '免费的 Prompt Engineering 教程',
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
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
      announcementBar: {
        content:
          '⭐ 如果你有任何的问题，欢迎加入我们的 <a target="_blank" href="https://discord.gg/B7Z7wjuUPg">Discord Channel</a> 一起学习讨论。⭐',
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
            label: '👋 欢迎',
          },
          {
            type: 'doc',
            docId: 'chatgpt-learning-path',
            position: 'left',
            label: '💬 ChatGPT 教程',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'midjourney-learning-path',
            label: '🖼️ Midjourney 教程',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'best-practice',
            label: '🏗️ AI 最佳实践',
          },
          { to: '/blog', label: '📰 更新日志', position: 'left' },
          {
            href: 'https://jimmywong.bio/',
            label: '😎 关于我',
            position: 'right',
          },
          {
            href: 'https://github.com/thinkingjimmy/Learning-Prompt',
            label: 'GitHub',
            position: 'right',
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
