import { TwigComponent } from '@/twig';

const TwigPath = require('./skills.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Skills',
    excludeStories: /.*(Data|Path)$/,
};

export const skills = () => (TwigComponent(TwigPath, {
    data() {
        return {
        };
    },
}));