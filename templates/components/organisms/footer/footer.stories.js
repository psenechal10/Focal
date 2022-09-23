import { TwigComponent } from '@/twig';

const TwigPath = require('./footer.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'organisms/Footer',
    excludeStories: /.*(Data|Path)$/,
};

export const content = () => (TwigComponent(TwigPath, {
    data() {
        return {
        };
    },
}));
