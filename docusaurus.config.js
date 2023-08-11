// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '吉特科技有限公司',
  tagline: 'GTech is cool',
  url: 'https://gtech.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gtech-world', // Usually your GitHub org/user name.
  projectName: 'gtech-docs', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'GTech Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/introduction',
            position: 'left',
            label: '开放平台',
          },
          {
            href: 'mailto:hi@gtech.world',
            label: '联系我们',
            position: 'right',
          },
          {
            href: 'https://github.com/gtech-world/gtech-docs',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository'
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      // tableOfContents: {
      //   minHeadingLevel: 2,
      //   maxHeadingLevel: 3,
      // },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: 'description', content: '吉特科技有限公司，提供跨界数据解决方案：信任、透明、可追溯'}
      ],
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
        options: {
          maxTextSize: 500,
        },
      },
    }),
  
    themes: [
      // ... Your other themes.
      '@docusaurus/theme-mermaid',
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ["en", "zh"],
          docsRouteBasePath: '/',
          ignoreFiles: [],
          searchBarPosition: 'right',
        },
      ],
    ],

};

module.exports = config;