import { TwigComponent } from '@/twig';

const TwigPath = require('./hero.html.twig').default;


export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Hero',
    excludeStories: /.*(Data|Path)$/,
};

export const hero = () => (TwigComponent(TwigPath, {
    data() {
        return {
            clickableWrapper_image1: require('@/assets/img/banner00.jpg'),
            clickableWrapper_image2: require('@/assets/img/banner01.jpg'),
            clickableWrapper_image3: require('@/assets/img/banner02.jpg')
        };
    },
}));
