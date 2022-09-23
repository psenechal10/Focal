import { TwigComponent } from '@/twig';

const TwigPath = require('./button.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Button',
    excludeStories: /.*(Data|Path)$/,
};

export const btn__green = () => (TwigComponent(TwigPath, {
    data() {
        return {
            button_modifiers: ['green'],
            button_content: 'Contact Me'
        };
    },
}));

export const btn__dark = () => (TwigComponent(TwigPath, {
    data() {
        return {
            button_modifiers: ['dark'],
            button_content: 'Contact Me'
        };
    },
}));

export const btn__light = () => (TwigComponent(TwigPath, {
    data() {
        return {
            button_modifiers: ['light'],
            button_content: 'Learn More'
        };
    },
}));

export const btn__indicator = () => (TwigComponent(TwigPath, {
    data() {
        return {
            button_modifiers: ['indicator'],
        };
    },
}));