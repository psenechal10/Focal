import { TwigComponent } from '@/twig';

const TwigPath = require('./clickableWrapper.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Templates/ClickableWrapper',
    excludeStories: /.*(Data|Path)$/,
};

export const clickableItem = () => (TwigComponent(TwigPath, {
    data() {
        return {
            clickableWrapper_image: require('@/assets/img/img00.asset.jpg')
        };
    },
}));