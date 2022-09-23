import { TwigComponent } from '@/twig';

const TwigPath = require('./title.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Title',
    excludeStories: /.*(Data|Path)$/,
};

export const title__h1 = () => (TwigComponent(TwigPath, {
    data() {
        return {
            title_modifiers: ['h1'],
            title_content: 'Front-end developer'
        };
    },
}));

export const title__h2 = () => (TwigComponent(TwigPath, {
    data() {
        return {
            title_modifiers: ['h2'],
            title_content: 'Values'
        };
    },
}));



export const title__h3 = () => (TwigComponent(TwigPath, {
    data() {
        return {
            title_modifiers: ['h3'],
            title_content: 'Web Developer'
        };
    },
}));