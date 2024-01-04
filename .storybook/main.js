/** @type { import('browser-sync-webpack-plugin').BrowserSyncWebpackPlugin } */
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin')

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/html-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: [{ from: "../www/build", to: "/build" }],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      plugins: [...config.plugins, new BrowserSyncWebpackPlugin(
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:6006',
          injectCss: true,
          reloadDelay: 1000,
          reloadThrottle: 2000,
          files: ['../dist/**/*'],
          notify: false
        }
      )],
    }
  },
};
export default config;
