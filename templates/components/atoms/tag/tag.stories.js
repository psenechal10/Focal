import { TwigComponent } from '@/twig';

const TwigPath = require('./tag.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Tag',
    excludeStories: /.*(Data|Path)$/,
};

export const tag = () => (TwigComponent(TwigPath, {
    data() {
        return {
            tag_content: '4.0 GPA'
        };
    },
}));
