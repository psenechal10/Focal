import { TwigComponent } from '@/twig';

const TwigPath = require('./bar.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Bar',
    excludeStories: /.*(Data|Path)$/,
};

export const bar = () => (TwigComponent(TwigPath, {
    data() {
        return {
            bar_modifiers: ['PhotoShop'],
            bar_content: 90
        };
    },
}));
