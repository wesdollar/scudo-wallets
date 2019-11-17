// eslint-disable-next-line no-undef
const mix = require("laravel-mix");

mix
  .react("resources/js/ssr-client.js", "public/js")
  .react("resources/js/ssr-server.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");

if (!mix.inProduction()) {
  mix.sourceMaps();

  // eslint-disable-next-line no-undef
  const LiveReloadPlugin = require("webpack-livereload-plugin");

  mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
  });
}

if (mix.inProduction()) {
  mix.version();
}
