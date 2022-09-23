import { TwigComponent } from '@/twig';

const TwigPath = require('./icon.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Icon',
    excludeStories: /.*(Data|Path)$/,
};

export const icon = () => (TwigComponent(TwigPath, {
    data() {
        return {
            icon_size: 50,
            icon_name: 'seo'
        };
    },
}));