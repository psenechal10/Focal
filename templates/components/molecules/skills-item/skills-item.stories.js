import { TwigComponent } from '@/twig';

const TwigPath = require('./skills-item.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Skills-item',
    excludeStories: /.*(Data|Path)$/,
};

export const skills__item = () => (TwigComponent(TwigPath, {
    data() {
        return {

            title_modifiers: ['h3'],
            title_content: 'PhotoShop',
            bar_modifiers: ['PhotoShop'],
            bar_content: 90
        };
    },
}));
