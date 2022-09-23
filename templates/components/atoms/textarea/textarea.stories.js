import { TwigComponent } from '@/twig';

const TwigPath = require('./textarea.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Textarea',
    excludeStories: /.*(Data|Path)$/,
};

export const textarea = () => (TwigComponent(TwigPath, {
    data() {
        return {
        };
    },
}));
