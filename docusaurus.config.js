// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doma🏠Nodes',
  tagline: 'Web3 and everything related.',
  url: 'https://domanodes.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'domanodes', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          feedOptions: {
            type: 'all',
          }, 
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Doma🏠Nodes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorials',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/doma2k',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   // title: 'Docs',
          //   // items: [
          //   //   // {
          //   //   //   label: 'Tutorials',
          //   //   //   to: '/docs/intro',
          //   //   // },
          //   // ],
          // },
          {
            title: 'Contacts',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/users/17710466/kyrylo-doma',
              // },
              {
                label: 'Discord',
                href: 'discord.com/users/doma2k#4006',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/domakyrylo',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/domanodes',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/doma2k',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doma🏠Nodes, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};


module.exports = config;
