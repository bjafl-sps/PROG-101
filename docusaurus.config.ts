import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Introduction to programming and Python',
  tagline: '',//'From Zero to Hero',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sps-prog101.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SPS', // Usually your GitHub org/user name.
  projectName: 'PROG-101', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'no',
    locales: ['en', 'no'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      no: {
        htmlLang: 'nb-NO',
        //direction: 'rtl'
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Sanpro IT',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png'

      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'prog101Sidebar',
          position: 'left',
          label: 'PROG-101',
        },
        {
          type: 'docSidebar',
          sidebarId: 'py101Sidebar',
          position: 'left',
          label: 'PY-101',
        },
        {
          type: 'docSidebar',
          sidebarId: 'py101TasksSidebar',
          position: 'left',
          label: 'PY-101 Tasks',

        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/bjafl-sps/PROG-101',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'PROG-101',
              to: '/docs/PROG-101/Intro',
            },
            {
              label: 'PY-101',
              to: '/docs/PY-101/Intro',
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      copyright: "MIT"//`Copyright © ${new Date().getFullYear()} Bjarte Lode, SPS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    themeConfig: {
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
