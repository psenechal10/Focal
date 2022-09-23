import { TwigComponent } from '@/twig';

const TwigPath = require('./input.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Input',
    excludeStories: /.*(Data|Path)$/,
};

export const input = () => (TwigComponent(TwigPath, {
    data() {
        return {
        };
    },
}));
