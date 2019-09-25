const mix = require('laravel-mix');

mix.sass('resources/sass/app.scss', 'public/css');

var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin()
  ]
});