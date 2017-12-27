const Encore = require('@symfony/webpack-encore');
const copyPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .autoProvideVariables({
        Popper: ['popper.js', 'default'],

    })
    .enableSassLoader()
    .enablePostCssLoader()
    .enableVersioning()
    .enableSourceMaps(!Encore.isProduction())
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('css/app', './assets/scss/app.scss')
    .createSharedEntry('js/vendors', [
        'jquery',
        'bootstrap',
        'popper.js',
        'select2',
    ])
    .addPlugin(new copyPlugin([{
        from: './assets/images',
        to: 'images',
    }]))
;

module.exports = Encore.getWebpackConfig();
