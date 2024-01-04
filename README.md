## Small starter project for a Storybook HTML + StencilJS combo including reloading of components semi on-the-fly.

# Usage

- Clone in
- Run `npm install`
- Run `npm run storybook`, which runs StencilJS and StorybookJS concurrently in the same console
- The browser should automatically open at `http://localhost:3000` when ready

# Issues

- Sometimes, the StencilJS `--watch` mode does not recognize a change has been made. The console will just show `Reloading browsers...` because BrowserSyncWebpackPlugin apparently does know.
- No true live-reloading, as the page gets refreshed by `BrowserSyncWebpackPlugin`
