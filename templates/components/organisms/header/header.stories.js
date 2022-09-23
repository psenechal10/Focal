import { TwigComponent } from '@/twig';

const TwigPath = require('./header.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'organisms/Header',
    excludeStories: /.*(Data|Path)$/,
};

export const header = () => (TwigComponent(TwigPath, {
    data() {
        return {
            logo__img: require('@/assets/img/logo.asset.png')
        };
    },
}));
