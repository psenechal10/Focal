import { TwigComponent } from '@/twig';

const TwigPath = require('./label.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Label',
    excludeStories: /.*(Data|Path)$/,
};

export const label = () => (TwigComponent(TwigPath, {
    data() {
        return {
            label_content: 'Name'
        };
    },
}));
