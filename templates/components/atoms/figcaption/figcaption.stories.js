import { TwigComponent } from '@/twig';

const TwigPath = require('./figcaption.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Figcaption',
    excludeStories: /.*(Data|Path)$/,
};

export const figcaption = () => (TwigComponent(TwigPath, {
    data() {
        return {
            figcaption_content: 'John Doe'
        };
    },
}));
