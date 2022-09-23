const path = require('path');

module.exports = {
    "stories": [
        './../templates/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    "addons": [
        {
            name: 'storybook-addon-sass-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
                loadSassAfterPostCSS: true,
                rule: {
                    test: /\.(sa|sc)ss$/,
                },
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    "framework": "@storybook/vue3",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    webpackFinal: async (config) => {
        config.module.rules = [
            ...config.module.rules,
            {
                test: /.twig$/,
                oneOf: [
                    {
                        resourceQuery: /raw/,
                        loader: 'raw-loader',
                    },
                    {
                        exclude: /\.(s?(a?|c)ss|js|html)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ]
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, './../assets'),
            '@root': path.resolve(__dirname, './../'),
            '@templates': path.resolve(__dirname, './../templates'),
        }

        return config;
    }
}