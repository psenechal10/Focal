// @ts-ignore
import { v1 as uuid } from 'uuid';
/* uncomment if you're using twig files: https://github.com/twigjs/twig.js */
// @ts-ignore
import Twig from 'twig';

Twig.extendFunction('uuid', () => {
    return uuid();
});

Twig.extendFunction('asset', (value) => {
    const imgName = value.split('/')[value.split('/').length - 1];
    const asset = require(`@/assets/${ imgName }`);

    if (asset) {
        return require(`@/assets/${ imgName }`);
    }
    return 'http://via.placeholder.com/1000';
});

Twig.extendFunction('filter', (value) => {
    console.log(value);
    // const imgName = value.split('/')[value.split('/').length - 1];
    // return require(@/assets/${imgName});
});

Twig.extendFunction('path', (value) => {
    return value;
});

Twig.extendFilter('trans', (value) => {
    return value;
});

Twig.extendFilter('trans_edit', (value) => {
    return value;
});

Twig.extendFilter('trans_editor', (value) => {
    return value;
});

// /* removes cached requests from include/embed/... */
Twig.cache(false);
//
// /* adds files to server */
const TwigFiles = require.context('@root/templates', true, /\.twig$/);
TwigFiles.keys().forEach(TwigFiles);
//
// /* enables HMR for root and nested twig files
//  * (file-loader doesn't detect changes for some reasons so we import them as raw strings) */
const TwigFilesRaw = require.context('@root/templates?raw', true, /\.twig$/);
TwigFilesRaw.keys().forEach(TwigFilesRaw);
//
// /* Twig configuration */
const renderTwig = (path, data = {}) => {
    return new Promise((resolve, reject) => {
        Twig.twig({
            namespaces: { 'AppFront': 'templates/' },
            href: path,
            load: template => {
                resolve(template.render(data));
            },
        });
    });
};

const TwigComponentMixin = {
    data() {
        return {
            html: '',
        };
    },
};

const TwigComponent = (twigPath, params = {}) => ({
    mixins: [TwigComponentMixin],
    async mounted() {
        if (twigPath) {
            this.html = await renderTwig(twigPath, this.$data);
        }
    },
    template: '<div v-html="html"></div>',
    ...params,
});

export { renderTwig, TwigComponent, TwigComponentMixin };
