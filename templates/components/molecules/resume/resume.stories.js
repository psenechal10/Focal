import { TwigComponent } from '@/twig';

const TwigPath = require('./resume.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Resume',
    excludeStories: /.*(Data|Path)$/,
};

export const resume = () => (TwigComponent(TwigPath, {
    data() {
        return {
            button_modifiers: ['green'],
            button_content: 'Download resume'
        };
    },
}));
